import { NextRequest, NextResponse } from "next/server";
import {updateschema} from "../schema";
import prisma from "@/prisma/client";


interface Props {
  params: { id: string };
}
export const GET = async (req: NextRequest, { params: { id } }: Props) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  if (!user)
    return NextResponse.json({ error: `user not found` }, { status: 404 });
  return NextResponse.json(user, { status: 200 });
};

export const PUT = async (req: NextRequest, { params: { id } }: Props) => {
  const body = await req.json();
  const validation = updateschema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });
  const user = await prisma.user.findUnique({
    where: { id },
  });
  if (!user)
    return NextResponse.json({ error: `user not found` }, { status: 404 });
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser, { status: 200 });
};

export const DELETE = async (req: NextRequest, { params: { id } }: Props) => {
  try {
    const user = await prisma.user.findUnique({
        where: { id},
      });
      if (!user)  return NextResponse.json({ error: `user not found` }, { status: 404 });
   
    await prisma.user.delete({
    where: { id:user.id
   }})

    return NextResponse.json( "User Deleted successfully",{ status: 200 });
  } catch (error) {
    console.log(error);
  }
};
