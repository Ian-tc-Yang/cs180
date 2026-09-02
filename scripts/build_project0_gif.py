"""Build the Project 0 dolly-zoom GIF from the web-ready stills."""

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "public" / "project0" / "assets"
FRAME_NAMES = (
    "dolly-05x.jpg",
    "dolly-1x.jpg",
    "dolly-2x.jpg",
    "dolly-3x.jpg",
    "dolly-5x.jpg",
    "dolly-10x.jpg",
    "dolly-15x.jpg",
)
OUTPUT = ASSET_DIR / "dolly-zoom.gif"
TARGET_SIZE = (600, 800)


def prepare_frame(path: Path) -> Image.Image:
    with Image.open(path) as source:
        frame = source.convert("RGB")
        frame.thumbnail(TARGET_SIZE, Image.Resampling.LANCZOS)

        canvas = Image.new("RGB", TARGET_SIZE, "#0c1c2c")
        x = (TARGET_SIZE[0] - frame.width) // 2
        y = (TARGET_SIZE[1] - frame.height) // 2
        canvas.paste(frame, (x, y))
        return canvas.quantize(colors=192, method=Image.Quantize.MEDIANCUT)


def main() -> None:
    forward = [prepare_frame(ASSET_DIR / name) for name in FRAME_NAMES]
    frames = forward + forward[-2:0:-1]
    durations = [900] + [520] * (len(forward) - 2) + [900]
    durations += [520] * (len(frames) - len(forward))

    frames[0].save(
        OUTPUT,
        save_all=True,
        append_images=frames[1:],
        duration=durations,
        loop=0,
        optimize=True,
        disposal=2,
    )
    print(f"Wrote {OUTPUT} ({len(frames)} frames)")


if __name__ == "__main__":
    main()
