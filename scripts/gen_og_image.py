#!/usr/bin/env python3
"""Generate a 1200x630 Open Graph image for the portfolio."""

from PIL import Image, ImageDraw, ImageFont, ImageEnhance

W, H = 1200, 630
WINE = (118, 49, 64)
WINE_DEEP = (92, 37, 51)
CREAM = (246, 241, 238)
TINT = (228, 191, 199)

FONT_DIR = "/usr/share/fonts/truetype/dejavu"

def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(f"{FONT_DIR}/{name}", size)

img = Image.new("RGB", (W, H), WINE)
draw = ImageDraw.Draw(img)

# Subtle grid paper
grid_color = (255, 255, 255, 10)
overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
odraw = ImageDraw.Draw(overlay)
for x in range(0, W, 60):
    odraw.line([(x, 0), (x, H)], fill=(246, 241, 238, 14), width=1)
for y in range(0, H, 60):
    odraw.line([(0, y), (W, y)], fill=(246, 241, 238, 14), width=1)
img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
draw = ImageDraw.Draw(img)

# Portrait on the right (luminosity blended, like the site)
try:
    portrait = Image.open("/home/z/my-project/public/salim-portrait.jpg").convert("L")
    # Crop to a tall right-side band
    pw = 460
    ratio = portrait.height / portrait.width
    portrait = portrait.resize((pw, int(pw * ratio)))
    if portrait.height < H:
        portrait = portrait.resize((int(H / ratio), H))
        pw = portrait.width
    top = max(0, (portrait.height - H) // 2 + int(H * 0.10))
    portrait = portrait.crop((0, top, portrait.width, top + H))
    # Width band
    portrait = portrait.crop((int(portrait.width * 0.18), 0, int(portrait.width * 0.18) + 470, H)) if portrait.width > 470 else portrait

    # Blend luminosity toward wine
    wine_layer = Image.new("RGB", portrait.size, WINE_DEEP)
    bw = Image.merge("RGB", (portrait, portrait, portrait))
    blended = Image.blend(bw, wine_layer, 0.55)
    blended = ImageEnhance.Contrast(blended).enhance(1.05)

    px = W - blended.width
    img.paste(blended, (px, 0))
    # Left-to-right fade so text area stays clean
    fade = Image.new("L", (blended.width, H), 0)
    fdraw = ImageDraw.Draw(fade)
    for i in range(blended.width):
        alpha = int(255 * min(1.0, max(0.0, (i - 40) / 180)))
        fdraw.line([(i, 0), (i, H)], fill=alpha)
    mask = Image.new("L", (blended.width, H), 255)
    mask.paste(fade, (0, 0))
    img.paste(WINE, (px, 0), fade.point(lambda a: 255 - a))
except Exception as e:
    print("portrait blend skipped:", e)

draw = ImageDraw.Draw(img)

# Left text block
f_eyebrow = font("DejaVuSans-Bold.ttf", 26)
f_name = font("DejaVuSans-Bold.ttf", 92)
f_title = font("DejaVuSans.ttf", 34)
f_stat = font("DejaVuSans-Bold.ttf", 44)
f_stat_label = font("DejaVuSans.ttf", 19)

x0 = 70
draw.text((x0, 78), "DUBAI, UNITED ARAB EMIRATES", font=f_eyebrow, fill=TINT)
draw.text((x0, 130), "Salim", font=f_name, fill=CREAM)
draw.text((x0, 232), "Sayed", font=f_name, fill=CREAM)

draw.text(
    (x0, 352),
    "Retail Operations Leader",
    font=f_title,
    fill=CREAM,
)
draw.text(
    (x0, 396),
    "GCC & India  ·  Multi-Unit  ·  P&L",
    font=f_title,
    fill=(246, 241, 238, 200) if False else TINT,
)

# Stats row
stats = [
    ("15+", "YEARS"),
    ("45+", "STORES LAUNCHED"),
    ("200+", "TEAM LED"),
    ("130M", "AED PORTFOLIO"),
]
sx = x0
line_y = 490
draw.line([(x0, line_y - 26), (x0 + 900, line_y - 26)], fill=(246, 241, 238, 60), width=1)
for value, label in stats:
    draw.text((sx, line_y), value, font=f_stat, fill=CREAM)
    draw.text((sx, line_y + 58), label, font=f_stat_label, fill=TINT)
    sx += 235

img.save("/home/z/my-project/public/og-image.jpg", quality=90, optimize=True)
print("OG image saved:", img.size)
