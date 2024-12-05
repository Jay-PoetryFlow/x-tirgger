import { hash } from "bcrypt"
import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json()

    const existingUser = await db.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        { message: "이미 사용 중인 이메일입니다" },
        { status: 400 }
      )
    }

    const hashedPassword = await hash(password, 10)

    const user = await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    })

    return NextResponse.json(
      { message: "회원가입이 완료되었습니다", userId: user.id },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "회원가입 중 오류가 발생했습니다" },
      { status: 500 }
    )
  }
}