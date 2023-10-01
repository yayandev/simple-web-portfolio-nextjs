import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/db";
import bcryptjs from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, password, secret } = body;

    if (!name || !email || !password || !secret) {
      return NextResponse.json({
        message: "All fields are required",
        success: false,
      });
    }

    if (secret !== process.env.SECRET) {
      return NextResponse.json({
        message: "Invalid secret",
        success: false,
      });
    }

    const users = await db.user.findMany({
      where: {
        email: email,
      },
    });

    if (users.length > 0) {
      return NextResponse.json({
        message: "User already exists",
        success: false,
      });
    }

    const passwordHash = await bcryptjs.hash(password, 10);

    const newUser = await db.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
    });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      data: newUser,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
