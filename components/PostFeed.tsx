"use client";
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import PostList from "./PostList";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useDebounce } from "@/hooks/useDebounce";

const PostFeed = ({ data }: { data: BlogPosts[] }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [postData, setPostData] = useState<BlogPosts[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const pageSize = 6;

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    setPostData(data);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const filteredData = debouncedSearch
        ? data.filter((post) => post.title.includes(debouncedSearch))
        : data;
      const pages = Math.ceil(filteredData.length / pageSize);
      setTotalPages(pages);
      const startIndex = (page - 1) * pageSize;
      const paginatedData = filteredData.slice(
        startIndex,
        startIndex + pageSize
      );
      setPostData(paginatedData);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [debouncedSearch, page, data]);

  return (
    <>
      <Hero search={search} setSearch={setSearch} />
      <div className="max-w-7xl mx-auto py-4 mt-16 px-4">
        <h2 className="text-2xl font-bold md:text-3xl">
          {search ? `Search result for "${search}"` : "Blog Posts"}
        </h2>
        <PostList data={postData} loading={loading} />
      </div>
      {postData.length > 0 && (
        <div className="w-full flex justify-center items-center gap-4 mt-4">
          <button
            className="p-4 rounded-full bg-primary disabled:bg-background disabled:cursor-not-allowed"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <IconArrowLeft />
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            className="p-4 rounded-full bg-primary disabled:bg-background disabled:cursor-not-allowed"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            <IconArrowRight />
          </button>
        </div>
      )}
    </>
  );
};

export default PostFeed;
