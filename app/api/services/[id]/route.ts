import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const service = await prisma.service.findUnique({
      where: {
        id: params.id,
      },
    })
    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 })
    }
    return NextResponse.json(service)
  } catch (error) {
    return NextResponse.json({ error: `Error fetching service: ${error}` }, { status: 500 })
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const json = await request.json()
    const service = await prisma.service.update({
      where: {
        id: params.id,
      },
      data: json,
    })
    return NextResponse.json(service)
  } catch (error) {
    return NextResponse.json({ error: `Error updating services: ${error}` }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.service.delete({
      where: {
        id: params.id,
      },
    })
    return NextResponse.json({ message: "Service deleted" })
  } catch (error) {
    return NextResponse.json({ error: `Error deleting services: ${error}` }, { status: 500 })
  }
}

