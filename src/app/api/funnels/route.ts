import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { db } from "@/lib/db"
import { authOptions } from "@/lib/auth"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const funnels = await db.funnel.findMany({
      where: {
        userId: session.user.id
      },
      orderBy: {
        createdAt: "desc"
      }
    })

    return NextResponse.json(funnels)
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { name } = await req.json()

    const funnel = await db.funnel.create({
      data: {
        name,
        userId: session.user.id
      }
    })

    return NextResponse.json(funnel, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}