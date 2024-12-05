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

    // 관리자만 접근 가능
    const currentUser = await db.user.findUnique({
      where: { id: session.user.id }
    })

    if (currentUser?.role !== "ADMIN") {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 })
    }

    const users = await db.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      }
    })

    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}