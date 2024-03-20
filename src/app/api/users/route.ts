import { NextResponse } from "next/server";
import User from "@/models/users";
import { connectDB } from "@/lib/mongoose";

export async function GET(request: Request) {
  try {
    await connectDB();

    const users = await User.find({"dni": {"$ne": "45552478"}});

    return NextResponse.json(users);
  } catch (error) {
    console.log("Error al procesar la solicitud:", error);
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
