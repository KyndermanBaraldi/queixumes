import { NextResponse } from "next/server";

export async function GET(request: Request) {

    const api_url = process.env.NEXT_PUBLIC_API_URL ?? "";
    const res = await fetch(api_url);
    console.log(res);
    const data = await res.json();

    return NextResponse.json(
        data.res
    )
}