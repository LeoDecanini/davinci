import { NextResponse } from "next/server";
import User from "@/models/users";
import { connectDB } from "@/lib/mongoose";

export async function GET(req: Request, { params }: any) {
  await connectDB();

  try {
    if (!params || !params.id) {
      return NextResponse.json(
          { error: "Id no proporcionado" },
          { status: 400 },
      );
    }

    const { id } = params;

    const userFound = await User.findById(id);

    if (!userFound) {
      return NextResponse.json(
          { error: "Usuario no encontrado" },
          { status: 404 },
      );
    }

    return NextResponse.json(userFound);
  } catch (error) {
    console.error("Error al obtener usuario por id:", error);
    return NextResponse.json(
        { error: "Error al obtener usuario por id" },
        { status: 500 },
    );
  }
}

export async function PUT(request: Request, { params }: any) {
  await connectDB();

  try {
    if (!params || !params.id) {
      return NextResponse.json(
          { error: "Id no proporcionado" },
          { status: 400 },
      );
    }

    const { id } = params;

    const userToUpdate = await User.findById(id);

    if (!userToUpdate) {
      return NextResponse.json(
          { error: "Usuario no encontrado" },
          { status: 404 },
      );
    }

    const requestBody = await request.json();

    console.log("Información del usuario antes de la actualización:", userToUpdate);

    let hasChanges = false;

    Object.keys(requestBody).forEach(key => {
      if (userToUpdate[key] !== requestBody[key]) {
        userToUpdate[key] = requestBody[key];
        hasChanges = true;
      }
    });

    if (!hasChanges) {
      console.log("No hubo cambios");
      return NextResponse.json(
          { message: "No hubo cambios" },
          { status: 200 },
      );
    }

    await userToUpdate.save();

    console.log("Usuario actualizado:", userToUpdate);
    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return NextResponse.json(
        { error: "Error al actualizar usuario" },
        { status: 500 },
    );
  }
}
