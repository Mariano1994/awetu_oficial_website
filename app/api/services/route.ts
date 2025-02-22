import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })
    return NextResponse.json(services)
  } catch (error) {
    return NextResponse.json({ error: `Error fetching services: ${error}` }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const service = await prisma.service.create({
      data: {
        name: json.name,
        cover_url: json.cover_url,
        icon: json.icon,
        description: json.description,
      },
    })
    return NextResponse.json(service)
  } catch (error) {
    return NextResponse.json({ error: `Error creating services: ${error}` }, { status: 500 })
  }
}

