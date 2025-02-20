import Link from "next/link";
import React from "react";

const PostList = ({ data }: { data: BlogPosts[] }) => {
  return (
    <div className="max-w-7xl mx-auto py-4 mt-8 px-4">
      <h2 className="text-2xl font-bold md:text-3xl">Blog Posts</h2>

      <ul className="grid grid-cols-2 md:grid-cols-3 max-sm:grid-cols-1 gap-4 mt-8">
        {data.map((post) => (
          <li key={post.title} className="bg-background rounded-md p-4 ">
            <Link href={`/blog/${post.title}`} className="flex flex-col gap-2">
              <p className="text-sm text-primary">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-base">{post.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
