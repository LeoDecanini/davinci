import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/users";
import { connectDB } from "@/lib/mongoose";

interface UserData {
  [key: string]: string;
}

interface GroupedUsers {
  [key: number]: UserData;
}

export async function POST(request: Request) {
  const requestData = await request.json();
  const usersData: GroupedUsers = {};

  for (const key in requestData) {
    const match = key.match(/^(\D+)(\d+)$/);
    if (match) {
      const fieldName = match[1];
      const userIndex = parseInt(match[2]);
      if (!usersData[userIndex]) {
        usersData[userIndex] = {};
      }
      usersData[userIndex][fieldName] = requestData[key];
    } else {
      if (!usersData[1]) {
        usersData[1] = {};
      }
      usersData[1][key] = requestData[key];
    }
  }

  console.log("Datos de usuarios agrupados:", usersData);

  try {
    await connectDB();

    let hasIncompleteUser = false;

    for (const userIndex in usersData) {
      const userData = usersData[userIndex];
      if (Object.values(userData).some((value) => !value)) {
        hasIncompleteUser = true;
        break;
      }
    }

    if (hasIncompleteUser) {
      return NextResponse.json(
        { message: "Al menos un usuario tiene campos faltantes" },
        { status: 400 },
      );
    }

    const savedUsers = [];

    for (const userIndex in usersData) {
      const userData = usersData[userIndex];
      const { name, lastname, email, role, dni, course, tel, direction } =
        userData;

      const existingUserWithEmail = await User.findOne({ email });
      if (existingUserWithEmail) {
        return NextResponse.json(
          { message: `El email ${email} ya está en uso` },
          { status: 409 },
        );
      }

      const existingUserWithDNI = await User.findOne({ dni });
      if (existingUserWithDNI) {
        return NextResponse.json(
          { message: `El DNI ${dni} ya está en uso` },
          { status: 409 },
        );
      }

      const password = await bcrypt.hash(dni, 10);

      const newUser = new User({
        name,
        lastname,
        email,
        password,
        role,
        dni,
        course,
        tel,
        direction,
      });

      const savedUser = await newUser.save();
      savedUsers.push(savedUser);
      console.log(`userIndex`, savedUsers);
    }

    return NextResponse.json(savedUsers);
  } catch (error) {
    console.log("Error al procesar la solicitud:", error);
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
