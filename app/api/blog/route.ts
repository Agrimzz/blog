import { NextResponse } from "next/server";
import mockData from "@/mockdata.json";
export const GET = async () => {
  try {
    return NextResponse.json(mockData);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { error: `Error fetching posts: ${error}` },
      { status: 500 }
    );
  }
};
