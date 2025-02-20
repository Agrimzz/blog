import PostFeed from "@/components/PostFeed";
import axios from "axios";

export default async function Home() {
  const response = await axios.get("http://localhost:3000/api/blog");
  const data = response.data;

  return (
    <>
      <PostFeed data={data} />
    </>
  );
}
