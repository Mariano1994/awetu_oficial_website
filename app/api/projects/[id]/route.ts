import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: params.id,
      },
    })
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: "Error fetching project" }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const json = await request.json()
    const project = await prisma.project.update({
      where: {
        id: params.id,
      },
      data: json,
    })
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: "Error updating project" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.project.delete({
      where: {
        id: params.id,
      },
    })
    return NextResponse.json({ message: "Project deleted" })
  } catch (error) {
    return NextResponse.json({ error: "Error deleting project" }, { status: 500 })
  }
}

