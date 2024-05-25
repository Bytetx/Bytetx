import sharp from "sharp";

export async function POST(request: Request) {
  try {
    const { image } = await request.json();

    const imageBuffer = Buffer.from(image.split(",")[1], "base64");

    const metadata = await sharp(imageBuffer).metadata();

    if (!metadata || !metadata.width || !metadata.height) {
      return new Response(
        "Failed to fetch image metadata or metadata is incomplete",
        { status: 400 }
      );
    }

    return new Response(
      JSON.stringify({
        width: metadata.width,
        height: metadata.height,
        size: metadata.size,
        format: metadata.format,
        success: true,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Failed to fetch image metadata:", error);
    return new Response("Failed to fetch image metadata prompts", {
      status: 500,
    });
  }
}
