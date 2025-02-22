"use server"

import { prisma } from "./prisma"


// Project actions
export async function getProjects() {
  try {
    return await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })
  } catch (error) {
    throw new Error(`Failed to fetch projects: ${error}`)
  }
}

export async function getProject(id: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
    })
    if (!project) throw new Error("Project not found")
    return project
  } catch (error) {
    throw new Error(`Failed to fetch project: ${error}`)
  }
}

export async function createProject(data: {
  name: string
  cover_url: string
  description: string
}) {
  try {
    return await prisma.project.create({ data })
  } catch (error) {
    throw new Error(`Failed to create project: ${error}`)
  }
}

export async function updateProject(
  id: string,
  data: {
    name?: string
    cover_url?: string
    description?: string
  },
) {
  try {
    return await prisma.project.update({
      where: { id },
      data,
    })
  } catch (error) {
    throw new Error(`Failed to update project: ${error}`)
  }
}

export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({
      where: { id },
    })
  } catch (error) {
    throw new Error(`Failed to delete project: ${error}`)
  }
}

// Service actions
export async function getServices() {
  try {
    return await prisma.service.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })
  } catch (error) {
    throw new Error(`Failed to fetch services: ${error}`)
  }
}

export async function getService(id: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { id },
    })
    if (!service) throw new Error("Service not found")
    return service
  } catch (error) {
    throw new Error(`Failed to fetch service: ${error}`)
  }
}

export async function createService(data: {
  name: string
  cover_url: string
  icon: string
  description: string
}) {
  try {
    return await prisma.service.create({ data })
  } catch (error) {
    throw new Error(`Failed to create service: ${error}`)
  }
}

export async function updateService(
  id: string,
  data: {
    name?: string
    cover_url?: string
    icon?: string
    description?: string
  },
) {
  try {
    return await prisma.service.update({
      where: { id },
      data,
    })
  } catch (error) {
    throw new Error(`Failed to update service: ${error}`)
  }
}

export async function deleteService(id: string) {
  try {
    await prisma.service.delete({
      where: { id },
    })
  } catch (error) {
    throw new Error(`Failed to delete service: ${error}`)
  }
}

