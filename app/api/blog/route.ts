import { NextResponse } from "next/server";
import mockData from "@/mockdata.json";

export const GET = async () => {
  return NextResponse.json(mockData);
};
