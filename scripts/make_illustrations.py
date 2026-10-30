"""Generate the neubrutalist SVG illustrations in static/illustrations.
Usage: python scripts/make_illustrations.py static/illustrations

Style: flat fills, 10px ink strokes,
hard 24px offset shadows, dot texture, square corners."""
import math
import os
import sys

OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)

INK = "#000"
C = dict(
    yellow="#FFD23F", pink="#FF6B6B", blue="#74B9FF", green="#88D498",
    orange="#FFA552", purple="#B8A9FA", cyan="#7FDBDA", white="#FFFFFF",
    yellow_l="#FFF3C4", pink_l="#FFE0E0", blue_l="#E3F2FD", green_l="#E8F5E9",
    orange_l="#FFF0E0", purple_l="#F0ECFF", warm="#F5F0E8",
)
SW = 10   # stroke width
SH = 24   # shadow offset


def svg(w, h, bg, body, title):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img" aria-label="{title}">
<title>{title}</title>
<defs><pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="#000" fill-opacity="0.12"/></pattern></defs>
<rect width="{w}" height="{h}" fill="{bg}"/>
<rect width="{w}" height="{h}" fill="url(#dots)"/>
<g stroke="{INK}" stroke-width="{SW}" stroke-linejoin="miter" stroke-linecap="square">
{body}
</g>
</svg>
"""


def box(x, y, w, h, fill, sh=SH, rot=0):
    t = f' transform="rotate({rot} {x + w / 2} {y + h / 2})"' if rot else ""
    s = f'<rect x="{x + sh}" y="{y + sh}" width="{w}" height="{h}" fill="{INK}"/>' if sh else ""
    return f'<g{t}>{s}<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}"/></g>'


def poly(points, fill, sh=SH, rot=None):
    p = " ".join(f"{a},{b}" for a, b in points)
    ps = " ".join(f"{a + sh},{b + sh}" for a, b in points)
    t = f' transform="rotate({rot[0]} {rot[1]} {rot[2]})"' if rot else ""
    s = f'<polygon points="{ps}" fill="{INK}"/>' if sh else ""
    return f'<g{t}>{s}<polygon points="{p}" fill="{fill}"/></g>'


def circ(cx, cy, r, fill, sh=SH):
    s = f'<circle cx="{cx + sh}" cy="{cy + sh}" r="{r}" fill="{INK}"/>' if sh else ""
    return f'{s}<circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}"/>'


def line(points, width=SW):
    p = " ".join(f"{a},{b}" for a, b in points)
    return f'<polyline points="{p}" fill="none" stroke-width="{width}"/>'


def gear(cx, cy, r, teeth, fill, sh=SH):
    pts = []
    for i in range(teeth * 2):
        a = math.pi * i / teeth
        rr = r if i % 2 == 0 else r * 0.8
        for da in (-0.12, 0.12):
            pts.append((round(cx + rr * math.cos(a + da), 1), round(cy + rr * math.sin(a + da), 1)))
    return poly(pts, fill, sh) + circ(cx, cy, r * 0.3, C["white"], 0)


def window(x, y, w, h, fill=C["white"], bar=C["yellow"]):
    out = [box(x, y, w, h, fill), f'<rect x="{x}" y="{y}" width="{w}" height="70" fill="{bar}"/>']
    for i, c in enumerate(("pink", "yellow", "green")):
        out.append(f'<rect x="{x + 30 + i * 50}" y="{y + 20}" width="30" height="30" fill="{C[c]}"/>')
    return "".join(out)


files = {}
P = ["yellow", "pink", "blue", "green", "orange", "purple", "cyan"]

# 1. 35 concepts for web development: browser with code glyph + 35-tile grid
b = [window(180, 150, 1240, 700)]
b.append(line([(400, 380), (300, 500), (400, 620)], 28))
b.append(line([(560, 380), (660, 500), (560, 620)], 28))
b.append(line([(510, 360), (450, 640)], 28))
for i in range(35):
    r, c = divmod(i, 7)
    b.append(box(780 + c * 80, 300 + r * 100, 60, 60, C[P[(i * 3) % 7]], 8))
b.append(box(1300, 90, 220, 120, C["pink"], rot=6))
b.append(line([(1350, 150), (1470, 150)], 16))
files["web-development-concepts"] = svg(1600, 1000, C["blue_l"], "\n".join(b), "Browser window with a code glyph and a grid of 35 tiles")

# 2. How the internet works (OSI): 7 stacked layers + packet arrow
b = []
for i in range(7):
    y = 140 + i * 105
    b.append(box(260 + i * 40, y, 900, 80, C[P[i]], 14))
    b.append(f'<rect x="{300 + i * 40}" y="{y + 25}" width="30" height="30" fill="{INK}"/>')
    for k in range(i + 1):
        b.append(f'<rect x="{360 + i * 40 + k * 26}" y="{y + 32}" width="16" height="16" fill="{INK}" stroke-width="0"/>')
b.append(box(1330, 120, 80, 640, C["white"], 14))
b.append(poly([(1290, 760), (1450, 760), (1370, 880)], C["yellow"], 14))
files["how-the-internet-works"] = svg(1600, 1000, C["purple_l"], "\n".join(b), "Seven stacked network layers with a packet travelling down")

# 3. 17-step process: staircase of 17 steps to a flag
b = []
for i in range(17):
    x, h = 120 + i * 78, 60 + i * 42
    b.append(box(x, 900 - h, 78, h, C[P[i % 7]], 0))
b.append(f'<polyline points="{" ".join(f"{120 + i * 78},{900 - 60 - i * 42} {198 + i * 78},{900 - 60 - i * 42}" for i in range(17))}" fill="none" stroke-width="14"/>')
b.append(f'<rect x="1430" y="70" width="14" height="130" fill="{INK}"/>')
b.append(poly([(1444, 70), (1560, 105), (1444, 140)], C["pink"], 12))
b.append(box(150, 140, 300, 160, C["white"]))
for k in range(3):
    b.append(box(185, 175 + k * 40, 30, 24, C["green"], 0))
    b.append(f'<rect x="235" y="{183 + k * 40}" width="{180 - k * 40}" height="10" fill="{INK}" stroke-width="0"/>')
files["17-step-process"] = svg(1600, 1000, C["yellow_l"], "\n".join(b), "A seventeen-step staircase climbing to a flag")

# 4. SQL for product managers: database + table + magnifier
b = []
for k in range(3):
    y = 640 - k * 150
    b.append(f'<rect x="{204}" y="{y - 56}" width="400" height="150" fill="{INK}"/>')
    b.append(f'<rect x="180" y="{y - 80}" width="400" height="150" fill="{C[("blue", "cyan", "yellow")[k]]}"/>')
    b.append(f'<ellipse cx="380" cy="{y - 80}" rx="200" ry="50" fill="{C[("blue", "cyan", "yellow")[k]]}"/>')
b.append(box(720, 180, 700, 560, C["white"]))
b.append(f'<rect x="720" y="180" width="700" height="100" fill="{INK}"/>')
for r in range(4):
    for c in range(4):
        fill = C["yellow"] if r == 1 else C["white"]
        b.append(f'<rect x="{720 + c * 175}" y="{280 + r * 115}" width="175" height="115" fill="{fill}"/>')
b.append(circ(1300, 700, 120, C["pink_l"]))
b.append(f'<line x1="1385" y1="785" x2="1500" y2="900" stroke-width="40"/>')
files["sql-for-product-managers"] = svg(1600, 1000, C["green_l"], "\n".join(b), "Database cylinder, a results table and a magnifier")

# 5. Story of blockchain: linked cubes
b = []
for i, c in enumerate(("yellow", "pink", "blue", "green")):
    x, y, s = 150 + i * 340, 600 - i * 130, 200
    d = 60
    b.append(f'<polygon points="{x + SH},{y + SH} {x + s + SH},{y + SH} {x + s + d + SH},{y - d + SH} {x + s + d + SH},{y + s - d + SH} {x + s + SH},{y + s + SH} {x + SH},{y + s + SH}" fill="{INK}"/>')
    b.append(f'<rect x="{x}" y="{y}" width="{s}" height="{s}" fill="{C[c]}"/>')
    b.append(f'<polygon points="{x},{y} {x + d},{y - d} {x + s + d},{y - d} {x + s},{y}" fill="{C["white"]}"/>')
    b.append(f'<polygon points="{x + s},{y} {x + s + d},{y - d} {x + s + d},{y + s - d} {x + s},{y + s}" fill="{INK}" fill-opacity="0.35"/>')
    b.append(f'<rect x="{x + 70}" y="{y + 70}" width="60" height="60" fill="{INK}"/>')
    if i < 3:
        cx, cy = x + s + 70, y + 30
        b.append(f'<rect x="{cx - 40}" y="{cy - 22}" width="90" height="44" rx="22" fill="none" stroke-width="16" transform="rotate(-21 {cx} {cy})"/>')
        b.append(f'<rect x="{cx + 20}" y="{cy - 45}" width="90" height="44" rx="22" fill="none" stroke-width="16" transform="rotate(-21 {cx} {cy})"/>')
files["story-of-blockchain"] = svg(1600, 1000, C["orange_l"], "\n".join(b), "Four blocks linked into a rising chain")

# 6. Industry 4.0: gears, robot arm, conveyor
b = [gear(360, 380, 210, 10, C["yellow"]), gear(640, 620, 140, 8, C["pink"])]
b.append(box(780, 780, 760, 70, C["white"]))
for k in range(5):
    b.append(f'<circle cx="{830 + k * 165}" cy="815" r="18" fill="{INK}"/>')
for k, c in enumerate(("blue", "green", "orange")):
    b.append(box(840 + k * 230, 650, 120, 110, C[c], 12))
b.append(box(1300, 640, 160, 120, C["purple"], 12))
b.append(line([(1380, 640), (1380, 420), (1180, 260), (1060, 360)], 46))
b.append(line([(1380, 640), (1380, 420), (1180, 260), (1060, 360)], 26).replace('fill="none"', f'fill="none" stroke="{C["cyan"]}"'))
for x, y in ((1380, 420), (1180, 260)):
    b.append(circ(x, y, 42, C["yellow"], 0))
b.append(line([(1020, 330), (1060, 400), (1110, 360)], 18))
files["industry-4-0"] = svg(1600, 1000, C["blue_l"], "\n".join(b), "Gears, a robot arm and a conveyor belt")

# 7. Mechanics of disruption: falling dominoes and a lightning bolt
b = [box(100, 840, 1400, 30, INK, 0)]
for i in range(7):
    ang = [0, 0, 0, 12, 28, 48, 66][i]
    x = 200 + i * 170
    # pivot on the bottom-right corner so toppled pieces stay on the floor
    b.append(f'<g transform="rotate({ang} {x + 90} 840)">' + box(x, 440, 90, 400, C[P[i]], 18)
             + f'<rect x="{x + 30}" y="520" width="30" height="30" fill="{INK}"/><rect x="{x + 30}" y="700" width="30" height="30" fill="{INK}"/></g>')
b.append(poly([(260, 60), (420, 60), (350, 220), (450, 220), (230, 430), (290, 270), (200, 270)], C["yellow"]))
files["mechanics-of-disruption"] = svg(1600, 1000, C["pink_l"], "\n".join(b), "A line of dominoes toppling after a lightning strike")

# 8. Home hero: full-stack PM made of UI (roadmap board, phone, chart)
b = [box(70, 90, 700, 560, C["white"])]
b.append(f'<rect x="70" y="90" width="700" height="80" fill="{C["green"]}"/>')
for col in range(3):
    x = 100 + col * 225
    b.append(f'<rect x="{x}" y="200" width="200" height="420" fill="{C["warm"]}"/>')
    for k in range(3 - col % 2):
        b.append(box(x + 18, 225 + k * 125, 164, 100, C[("yellow", "pink", "blue", "purple")[(col + k) % 4]], 8))
b.append(box(840, 60, 290, 560, C["white"], rot=4))
b.append(f'<g transform="rotate(4 985 340)"><rect x="840" y="60" width="290" height="70" fill="{INK}"/><rect x="880" y="180" width="210" height="120" fill="{C["cyan"]}"/><rect x="880" y="330" width="210" height="40" fill="{C["yellow"]}"/><rect x="880" y="400" width="140" height="40" fill="{C["pink"]}"/><rect x="935" y="545" width="100" height="24" fill="{INK}"/></g>')
b.append(box(300, 640, 760, 220, C["yellow"], rot=-2))
for k, hgt in enumerate((60, 110, 80, 150, 130, 175)):
    b.append(f'<g transform="rotate(-2 680 750)"><rect x="{350 + k * 115}" y="{830 - hgt}" width="70" height="{hgt}" fill="{C[P[(k + 1) % 7]]}"/></g>')
files["hero-product-builder"] = svg(1200, 900, C["blue_l"], "\n".join(b), "A roadmap board, a phone screen and a growth chart")

# 9. About: toys (stacked blocks, ball, robot)
b = [box(80, 840, 1440, 40, INK, 0)]
for (x, y, c, rot) in ((180, 560, "yellow", 0), (460, 560, "pink", 0), (320, 290, "blue", -6), (740, 640, "green", 8)):
    b.append(box(x, y, 260, 260 if y < 640 else 180, C[c], rot=rot))
b.append(f'<text x="290" y="770" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="170" text-anchor="middle" fill="{INK}" stroke-width="0">A</text>')
b.append(f'<text x="590" y="770" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="170" text-anchor="middle" fill="{INK}" stroke-width="0">B</text>')
b.append(f'<text x="450" y="500" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="170" text-anchor="middle" fill="{INK}" stroke-width="0" transform="rotate(-6 450 420)">C</text>')
b.append(circ(1000, 720, 110, C["orange"]))
b.append(f'<path d="M890 720 Q1000 640 1110 720" fill="none" stroke-width="10"/>')
b.append(box(1180, 470, 240, 230, C["purple"]))
b.append(box(1220, 700, 60, 130, C["purple"], 12))
b.append(box(1320, 700, 60, 130, C["purple"], 12))
b.append(box(1240, 350, 160, 120, C["white"]))
b.append(f'<rect x="1270" y="385" width="30" height="30" fill="{INK}"/><rect x="1340" y="385" width="30" height="30" fill="{INK}"/>')
b.append(line([(1320, 350), (1320, 270)], 12))
b.append(circ(1320, 255, 22, C["pink"], 0))
b.append(box(1220, 520, 160, 110, C["yellow"], 0))
files["about-toys"] = svg(1600, 1000, C["yellow_l"], "\n".join(b), "Toy alphabet blocks, a ball and a robot")

for name, content in files.items():
    with open(os.path.join(OUT, name + ".svg"), "w", encoding="utf-8", newline="\n") as f:
        f.write(content)
    print(name, len(content))
