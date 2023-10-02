import { NextRequest, NextResponse } from "next/server";
import { db } from "@/utils/db";
import { getServerSession } from "next-auth";
import { uploadOnePhoto } from "@/utils/cloudinary";

export async function POST(req: NextRequest) {
  try {
    const auth = await getServerSession();

    if (!auth) {
      return NextResponse.json({
        message: "Unauthorized",
        success: false,
      });
    }

    const user = await db.user.findUnique({
      where: {
        email: auth?.user?.email as string,
      },
    });

    if (!user) {
      return NextResponse.json({
        message: "Unauthorized",
        success: false,
      });
    }

    const userId = user.id;

    const formData = await req.formData();

    const file = formData.get("file");
    const code = formData.get("code");
    const demo = formData.get("demo");
    const name = formData.get("name");
    const description = formData.get("description");

    if (!file || !name || !description || !code || !demo) {
      return NextResponse.json({
        message: "All fields are required",
        success: false,
      });
    }

    const result = await uploadOnePhoto(formData);

    if (result.error) {
      return NextResponse.json({
        message: result.error.message,
        success: false,
      });
    }

    const image = result.photo?.secure_url;
    const imageId = result.photo?.public_id;

    const newProject = await db.project.create({
      data: {
        name: name as string,
        description: description as string,
        image: image as string,
        linkCode: code as string,
        linkDemo: demo as string,
        idImage: imageId as string,
        authorId: userId as string,
      },
    });

    return NextResponse.json({
      message: "Project created",
      success: true,
      project: newProject,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}

export async function GET(req: NextRequest) {
  try {
    const projects = await db.project.findMany();

    return NextResponse.json({
      message: "Projects found",
      success: true,
      projects: projects,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
