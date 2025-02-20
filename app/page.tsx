import Hero from "@/components/Hero";
import PostList from "@/components/PostList";
import axios from "axios";

export default async function Home() {
  const response = await axios.get("http://localhost:3000/api/blog");
  const data = response.data;

  return (
    <div>
      <Hero />
      <PostList data={data} />
    </div>
  );
}
