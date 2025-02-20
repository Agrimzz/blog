import { NextRequest, NextResponse } from "next/server";
import mockData from "@/mockdata.json";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  try {
    const { slug } = await params;
    if (!slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }
    const decodedSlug = decodeURIComponent(slug);
    const blog = mockData.find((item) => item.title === decodedSlug);

    if (!blog) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the blog post" },
      { status: 500 }
    );
  }
};
