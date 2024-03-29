"use client";
import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm,} from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "El nombre debe tener como mínimo 2 caracteres",
    })
    .max(50, {
      message: "El nombre debe tener como máximo 50 caracteres",
    }),
  lastname: z
    .string()
    .min(2, {
      message: "El apellido debe tener como mínimo 2 caracteres",
    })
    .max(50, {
      message: "El nombre debe tener como máximo 50 caracteres",
    }),
  email: z.string().email({
    message: "El email no es válido",
  }),
  role: z.enum(["alumno", "profesor", "secretario", "administrador"]),
  dni: z.string().min(8, {
    message: "El dni debe tener como mínimo 8 números",
  }),
  course: z.string().min(2, {
    message: "El curso debe tener como mínimo 2 letras",
  }),
  tel: z.string().min(10, {
    message: "El telefono debe tener minimo 10 nueros",
  }),
  direction: z.string().min(2, {
    message: "El curso debe tener como mínimo 2 letras",
  }),
});

type Role = "alumno" | "profesor" | "secretario" | "administrador";

type InputFieldType = {
  name: string;
  lastname: string;
  email: string;
  role: Role;
  dni: number;
  course: string;
  tel: string;
  direction: string;
};

const FormSignUp = ({ numeroAlumnos }: any) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      role: "alumno",
      dni: "",
      course: "",
      tel: "",
      direction: "",
    },
  });

  const router = useRouter();

  async function onSubmit() {
    try {
      const values = form.getValues();
      console.log(values);

      const signupResponse = await axios.post("/api/auth/signup", values);
      console.log(signupResponse);
      toast.success("Usuario/s creado/s correctamente");


      if (signupResponse.data.message === "success") {
        toast.success("Usuario/s creado/s correctamente");
        window.location.reload();
      }

    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
        toast.error(`${error.response?.data.message}`);
      }
    }
  }

  const fields = [
    [
      {
        name: "name",
        placeholder: "Nombre 1",
        label: "Nombre",
        colSpan: "col-span-1",
        type: "text",
      },
      {
        name: "lastname",
        placeholder: "Apellido 1",
        label: "Apellido",
        colSpan: "col-span-1",
        type: "text",
      },
      {
        name: "email",
        placeholder: "Email 1",
        label: "Email",
        colSpan: "col-span-1",
        type: "text",
      },
      {
        name: "role",
        placeholder: "Rol 1",
        label: "Rol",
        colSpan: "col-span-1",
        type: "select",
        options: ["alumno", "profesor", "secretario", "administrador"],
      },
      {
        name: "dni",
        placeholder: "DNI 1",
        label: "DNI",
        colSpan: "col-span-1",
        type: "number",
      },
      {
        name: "course",
        placeholder: "course 1",
        label: "Curso",
        colSpan: "col-span-1",
        type: "text",
      },
      {
        name: "tel",
        placeholder: "+5491139549810",
        label: "Telefono",
        colSpan: "col-span-1",
        type: "number",
      },
      {
        name: "direction",
        placeholder: "Direccion 1",
        label: "Direccion",
        colSpan: "col-span-1",
        type: "text",
      },
    ],
  ];

  for (let i = 2; i <= numeroAlumnos; i++) {
    fields.push([
      {
        name: `name${i}`,
        placeholder: `Nombre ${i}`,
        label: `Nombre`,
        colSpan: "col-span-1",
        type: "text",
      },
      {
        name: `lastname${i}`,
        placeholder: `Apellido ${i}`,
        label: `Apellido`,
        colSpan: "col-span-1",
        type: "text",
      },
      {
        name: `email${i}`,
        placeholder: `Email ${i}`,
        label: `Email`,
        colSpan: "col-span-1",
        type: "text",
      },
      {
        name: `role${i}`,
        placeholder: `Rol ${i}`,
        label: `Rol`,
        colSpan: "col-span-1",
        type: "select",
        options: ["alumno", "profesor", "secretario", "administrador"],
      },
      {
        name: `dni${i}`,
        placeholder: `DNI ${i}`,
        label: `DNI`,
        colSpan: "col-span-1",
        type: "number",
      },
      {
        name: `course${i}`,
        placeholder: `course ${i}`,
        label: "Curso",
        colSpan: "col-span-1",
        type: "text",
      },
      {
        name: `tel${i}`,
        placeholder: `+5491139549810`,
        label: "Telefono",
        colSpan: "col-span-1",
        type: "number",
      },
      {
        name: `direction${i}`,
        placeholder: `Direccion ${i}`,
        label: "Direccion",
        colSpan: "col-span-1",
        type: "text",
      },
    ]);
  }

  /*console.log(fields);*/

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pt-4">
        <div className="w-full py-4">
          {fields.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid gap-y-3 gap-x-2 grid-cols-8 w-full ${
                rowIndex > 0 ? "pt-5" : ""
              }`}
            >
              {row.map((fieldInfo, colIndex) => (
                <div key={colIndex} className={`${fieldInfo.colSpan}`}>
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name={fieldInfo.name as any}
                      render={({ field }) => (
                        <FormItem>
                          {colIndex < 8 && (
                            <div className="bg-secondary py-2 px-3">
                              <FormLabel
                                className="text-lg font-bold text-white"
                                htmlFor={fieldInfo.name}
                              >
                                {fieldInfo.label} {` - ${rowIndex + 1}`}
                              </FormLabel>
                            </div>
                          )}
                          <FormControl>
                            {fieldInfo.type === "select" &&
                            fieldInfo.options ? (
                              <Select
                                onValueChange={(selectedRole) => {
                                  form.setValue(
                                    fieldInfo.name as any,
                                    selectedRole,
                                  );
                                  console.log(selectedRole);
                                }}
                              >
                                <SelectTrigger className="py-6 bg-gray-50 ">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {fieldInfo.options?.map(
                                    (option: string, i: any) => (
                                      <SelectItem key={option} value={option}>
                                        {option}
                                      </SelectItem>
                                    ),
                                  )}
                                </SelectContent>
                              </Select>
                            ) : (
                              <Input
                                className="py-6 bg-gray-50"
                                id={fieldInfo.name}
                                type={fieldInfo.type}
                                placeholder={fieldInfo.placeholder}
                                {...field}
                              />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="pt-4 w-full flex sm:justify-start justify-center">
          <Button
            type="submit"
            className="py-6 px-10 hover:bg-[#b30c67] bg-secondary"
          >
            Registrarse
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormSignUp;
