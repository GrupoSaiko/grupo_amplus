import Customer from "@/app/models/customers";
import { NextResponse } from "next/server";

/**
 *
 * @param {Request} req - Req
 */
export async function GET(req) {
  try {
    const data = await Customer.get();

    return NextResponse.json(
      {
        message: "Clientes obtenidos",
        customers: data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Clientes no pudieron consultarse",
        customers: [],
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const data = await Customer.add("dasdasdas");

    return NextResponse.json({ message: "Ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "No" }, { status: 500 });
  }
}
