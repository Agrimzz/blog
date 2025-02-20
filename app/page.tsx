import PostFeed from "@/components/PostFeed";
import axios from "axios";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await axios.get(`${baseUrl}/api/blog`);
  const data = response.data;

  return (
    <>
      <PostFeed data={data} />
    </>
  );
}
