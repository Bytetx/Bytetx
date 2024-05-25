import sharp from "sharp";

const resizeImage = async (
  imageBuffer: Buffer,
  width: number,
  height: number,
  format: string | any,
  quality: number | undefined
): Promise<Buffer> => {
  let image = sharp(imageBuffer);

  if (width && height) {
    image = image.resize({ width, height });
  }

  if (format) {
    image = image.toFormat(format);
  }

  if (quality && !isNaN(quality)) {
    image = image.jpeg({ quality });
  }

  return await image.toBuffer();
};

export const POST = async (request: Request, response: Response) => {
  try {
    const { image, width, height, format, quality } = await request.json();

    const imageBuffer = Buffer.from(image.split(",")[1], "base64");

    const resizedImageBuffer = await resizeImage(
      imageBuffer,
      width,
      height,
      format,
      quality
    );

    const metadata = await sharp(resizedImageBuffer).metadata();

    return new Response(
      JSON.stringify({
        width: metadata.width,
        height: metadata.height,
        size: metadata.size,
        format: metadata.format,
        success: true,
        image: `data:image/${
          metadata.format
        };base64,${resizedImageBuffer.toString("base64")}`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Something went wrong while resizing");
    return new Response("Something went wrong while resizing image", {
      status: 500,
    });
  }
};
