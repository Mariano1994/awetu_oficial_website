import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json({ error: `Error fetching projects: ${error}` }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const project = await prisma.project.create({
      data: {
        name: json.name,
        cover_url: json.cover_url,
        description: json.description,
      },
    })
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: `Error creating project: ${error}` }, { status: 500 })
  }
}

