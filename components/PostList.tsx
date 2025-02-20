"use client";
import { IconLoader2, IconMoodEmptyFilled } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const PostList = ({
  data,
  loading,
}: {
  data: BlogPosts[];
  loading: boolean;
}) => {
  if (loading) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center">
        <IconLoader2 size={32} className="animate-spin" />
      </div>
    );
  }
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 max-sm:grid-cols-1 gap-4 mt-8">
      {data.length > 0 ? (
        data.map((post) => (
          <li
            key={post.title}
            className="bg-background rounded-md p-8 hover:bg-background/50 "
          >
            <Link href={`/blog/${post.title}`} className="flex flex-col gap-2">
              <p className="text-sm text-primary">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-base">{post.summary}</p>
            </Link>
          </li>
        ))
      ) : (
        <div className="flex flex-col gap-4 justify-center items-center col-span-full h-[300px] ">
          <IconMoodEmptyFilled size={100} className="text-primary" />
          <p className="w-full text-center text-lg font-semibold">
            No posts found.
          </p>
        </div>
      )}
    </ul>
  );
};

export default PostList;
