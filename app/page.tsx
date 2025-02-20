// app/page.tsx (or your Home page component)
import PostFeed from "@/components/PostFeed";
import axios from "axios";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  try {
    const response = await axios.get(`${baseUrl}/api/blog`);
    const data = response.data;
    return (
      <>
        <PostFeed data={data ?? []} />
      </>
    );
  } catch (error) {
    console.error("Failed to load blog posts:", error);
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">
          Failed to load blog posts. Please try again later.
        </p>
      </div>
    );
  }
}
