#!/usr/bin/env python3
"""Contrast audit for the portfolio's color pairs (WCAG AA)."""

def hex_to_rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def rel_lum(rgb):
    def chan(c):
        c = c / 255
        return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = (chan(c) for c in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def to_rgb(c):
    if isinstance(c, tuple):
        return c
    return hex_to_rgb(c)

def contrast(fg, bg):
    l1, l2 = rel_lum(to_rgb(fg)), rel_lum(to_rgb(bg))
    if l1 < l2:
        l1, l2 = l2, l1
    return (l1 + 0.05) / (l2 + 0.05)

def blend(fg_hex, alpha, bg_hex):
    """Simulate CSS color opacity by blending fg over bg."""
    fg, bg = to_rgb(fg_hex), to_rgb(bg_hex)
    out = tuple(round(f * alpha + b * (1 - alpha)) for f, b in zip(fg, bg))
    return out

CREAM = '#F6F1EE'
INK = '#2A171B'
WINE = '#763140'
WINE_DEEP = '#5C2533'
MUTE = '#6E5A5E'
TINT = '#E4BFC7'
LINE = '#DFD1D3'
WHITE60 = blend('#FFFFFF', 0.6, CREAM)  # bg-white/60 over cream

pairs = [
    # Light sections (cream / white backgrounds)
    ('ink on cream', INK, CREAM),
    ('ink/85 on cream', blend(INK, 0.85, CREAM), CREAM),
    ('ink/80 on cream', blend(INK, 0.80, CREAM), CREAM),
    ('mute on cream', MUTE, CREAM),
    ('wine on cream', WINE, CREAM),
    ('wine on white60', WINE, '#FFFFFF'),
    ('mute on white60', MUTE, blend('#FFFFFF', 0.6, CREAM)),
    ('ink on white', INK, '#FFFFFF'),
    ('ink/80 on white60', blend(INK, 0.8, WHITE60), WHITE60),
    ('ink/85 on white60', blend(INK, 0.85, WHITE60), WHITE60),
    ('mute on muted(#EFE6E3)', MUTE, '#EFE6E3'),
    # Wine hero (dark backgrounds)
    ('cream on wine', CREAM, WINE),
    ('cream/85 on wine', blend(CREAM, 0.85, WINE), WINE),
    ('cream/80 on wine', blend(CREAM, 0.80, WINE), WINE),
    ('cream/75 on wine', blend(CREAM, 0.75, WINE), WINE),
    ('cream/70 on wine', blend(CREAM, 0.70, WINE), WINE),
    ('cream/60 on wine', blend(CREAM, 0.60, WINE), WINE),
    ('cream/50 on wine', blend(CREAM, 0.50, WINE), WINE),
    ('tint on wine', TINT, WINE),
    ('tint/80 on wine', blend(TINT, 0.8, WINE), WINE),
    ('mute on wine (BAD header)', MUTE, WINE),
    # Wine-deep expansion section
    ('cream on wine-deep', CREAM, WINE_DEEP),
    ('cream/90 on wine-deep', blend(CREAM, 0.9, WINE_DEEP), WINE_DEEP),
    ('cream/85 on wine-deep', blend(CREAM, 0.85, WINE_DEEP), WINE_DEEP),
    ('cream/80 on wine-deep', blend(CREAM, 0.80, WINE_DEEP), WINE_DEEP),
    ('cream/75 on wine-deep', blend(CREAM, 0.75, WINE_DEEP), WINE_DEEP),
    ('cream/70 on wine-deep', blend(CREAM, 0.70, WINE_DEEP), WINE_DEEP),
    ('cream/60 on wine-deep', blend(CREAM, 0.60, WINE_DEEP), WINE_DEEP),
    ('cream/50 on wine-deep', blend(CREAM, 0.50, WINE_DEEP), WINE_DEEP),
    ('tint on wine-deep', TINT, WINE_DEEP),
]

print(f"{'pair':<32} {'ratio':>6}  AA(4.5) AA-lg(3.0)")
print('-' * 60)
for name, fg, bg in pairs:
    r = contrast(fg, bg)
    aa = 'PASS' if r >= 4.5 else 'fail'
    aalg = 'PASS' if r >= 3.0 else 'fail'
    flag = '' if r >= 4.5 else ('  << LARGE-ONLY' if r >= 3.0 else '  << FAIL')
    print(f"{name:<32} {r:>5.2f}:1  {aa:^7} {aalg:^9}{flag}")
