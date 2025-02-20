import axios from "axios";
import React from "react";

const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const response = await axios.get(`${baseUrl}/api/blog/${slug}`);

  const post: BlogPosts = response.data;

  return (
    <>
      <div className="w-full  mx-auto bg-background/60 pt-[80px]">
        <div className="max-w-4xl min-h-[300px]  mx-auto py-4 text-center flex flex-col items-center justify-center gap-12 px-4">
          <h1 className="text-2xl  font-bold leading-[1.5] md:text-4xl ">
            {post.title}
          </h1>
          <p className="text-base">{post.summary}</p>
          <div className=" flex flex-col gap-8 items-center mx-auto mt-4 md:gap-16 flex-wrap sm:flex-row sm:mt8">
            <div className="flex flex-col gap-2 items-center">
              <p className="text-base">RANGE</p>
              <p className="text-2xl font-bold text-primary">{post.range}</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-base">BATTERY CAPACITY</p>
              <p className="text-2xl font-bold text-primary">
                {post.batteryCapacity}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-base">YEAR</p>
              <p className="text-2xl font-bold text-primary">{post.year}</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-base">MANUFACTURER</p>
              <p className="text-2xl font-bold text-primary">
                {post.manufacturer}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-4 mt-16 text-center">
        <p className="text-primary text-2xl font-bold">ABOUT</p>
        <p>{post.detail}</p>
      </div>
      <div className="max-w-2xl mx-auto p-4 mt-16 ">
        <p className="text-primary text-2xl font-bold">SPEC</p>
        <div className="mt-4 w-full grid grid-cols-2 gap-4">
          <p className="text-lg ">RANGE</p>
          <p className="text-lg  text-right">{post.range}</p>
          <hr className="col-span-full text-white" />
          <p className="text-lg ">CHARGING TIME</p>
          <p className="text-lg  text-right">{post.chargingTime}</p>
          <hr className="col-span-full text-white" />
          <p className="text-lg ">MANUFACTURER</p>
          <p className="text-lg  text-right">{post.manufacturer}</p>
          <hr className="col-span-full text-white" />
          <p className="text-lg ">MODEL</p>
          <p className="text-lg  text-right">{post.model}</p>
          <hr className="col-span-full text-white" />
          <p className="text-lg ">BATTERY CAPACITY</p>
          <p className="text-lg  text-right">{post.batteryCapacity}</p>
          <hr className="col-span-full text-white" />
          <p className="text-lg ">TYPE</p>
          <p className="text-lg  text-right">{post.type}</p>
          <hr className="col-span-full text-white" />
          <p className="text-lg ">YEAR</p>
          <p className="text-lg  text-right">{post.year}</p>
          <hr className="col-span-full text-white" />
          <p className="text-lg ">PRICE</p>
          <p className="text-lg  text-right">{post.price}</p>
          <hr className="col-span-full text-white" />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
