import os
import sys
import subprocess

# Ensure Pillow is installed
try:
    from PIL import Image
except ImportError:
    print("Pillow is not installed. Installing Pillow via pip...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "--user", "Pillow"])
    from PIL import Image

IMAGE_DIR = "/home/hael/code/sety-driving-school/static/images"

TARGET_WIDTHS = [480, 768, 1024]
ASPECT_RATIO = 4 / 3  # Enforced landscape aspect ratio

# Only process original source images
SOURCE_FORMATS = [".jpg", ".jpeg", ".png"]


def center_crop_to_aspect(img, target_aspect):
    w, h = img.size
    current_aspect = w / h

    if current_aspect < target_aspect:
        # Height is too tall, crop height
        new_h = int(w / target_aspect)
        top = (h - new_h) // 2
        bottom = top + new_h
        return img.crop((0, top, w, bottom))

    elif current_aspect > target_aspect:
        # Width is too wide, crop width
        new_w = int(h * target_aspect)
        left = (w - new_w) // 2
        right = left + new_w
        return img.crop((left, 0, right, h))

    return img


def process_image(filename):
    filepath = os.path.join(IMAGE_DIR, filename)
    base_name, ext = os.path.splitext(filename)

    # 🚫 Skip anything that is not a source image
    if ext.lower() not in SOURCE_FORMATS:
        return

    print(f"\nProcessing {filename}...")

    try:
        with Image.open(filepath) as img:
            # 1. Crop to consistent aspect ratio
            cropped_img = center_crop_to_aspect(img, ASPECT_RATIO)

            # 2. Generate responsive sizes
            for width in TARGET_WIDTHS:
                height = int(width / ASPECT_RATIO)
                resized = cropped_img.resize((width, height), Image.Resampling.LANCZOS)

                output_name = f"{base_name}-{width}w.webp"
                output_path = os.path.join(IMAGE_DIR, output_name)

                resized.save(output_path, "WEBP", quality=80, optimize=True)
                print(f"  -> Generated {output_name} ({width}x{height})")

            # 3. Primary WebP (max 1024px)
            primary_height = int(1024 / ASPECT_RATIO)
            primary_img = cropped_img.resize((1024, primary_height), Image.Resampling.LANCZOS)

            primary_output_path = os.path.join(IMAGE_DIR, f"{base_name}.webp")
            primary_img.save(primary_output_path, "WEBP", quality=80, optimize=True)

            print(f"  -> Generated primary {base_name}.webp")

        # 4. Remove original file after conversion
        os.remove(filepath)
        print(f"  Removed original legacy file: {filename}")

    except Exception as e:
        print(f"  Error processing {filename}: {e}")


def main():
    if not os.path.exists(IMAGE_DIR):
        print(f"Image directory {IMAGE_DIR} does not exist!")
        return

    files = [
        f for f in os.listdir(IMAGE_DIR)
        if os.path.isfile(os.path.join(IMAGE_DIR, f))
    ]

    for file in files:
        process_image(file)

    print("\nImage WebP migration and performance resizing complete!")


if __name__ == "__main__":
    main()