import { Schema, model, models } from "mongoose";
import z from "zod";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    minlength: [2, "El nombre debe tener al menos 2 caracteres"],
    maxlength: [50, "El nombre no debe tener más de 50 caracteres"],
  },
  lastname: {
    type: String,
    required: [true, "El apellido es obligatorio"],
    minlength: [2, "El apellido debe tener al menos 2 caracteres"],
    maxlength: [50, "El apellido no debe tener más de 50 caracteres"],
  },
  email: {
    type: String,
    required: [true, "El correo electrónico es obligatorio"],
    unique: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "El correo electrónico no es válido",
    ],
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
    minlength: [6, "La contraseña debe tener al menos 6 caracteres"],
    select: false,
  },
  role: {
    type: String,
    enum: ["alumno", "profesor", "secretario", "administrador"],
    required: [true, "El rol es obligatorio"],
  },
  dni: {
    type: String,
    minlength: [8, "El DNI debe tener al menos 11 caracteres"],
  },
  course: {
    type: String,
    minlength: [2, "El curso debe tener como mínimo 2 letras"],
  },
  tel: {
    type: String,
    minlength: [10, "El telefono debe tener minimo 10 nueros"],
  },
  direction: {
    type: String,
    minlength: [2, "El curso debe tener como mínimo 2 letras"],
  },
});

const User = models.User || model("User", userSchema);
export default User;
