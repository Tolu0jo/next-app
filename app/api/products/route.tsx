import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export const GET = async () => {
  const products = await prisma.product.findMany();
  return NextResponse.json(products, { status: 200 });
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(product, { status: 201 });
};
