"use client";
import React from "react";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
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

const formSchema = z.object({
  dni: z.string().min(8, {
    message: "La Contraseña debe tener como minimo 6 caracteres.",
  }),
  password: z.string().min(6, {
    message: "La Contraseña debe tener como minimo 6 caracteres.",
  }),
});

type InputFieldType = {
  dni: string;
  password: string;
};

const FormSignIp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dni: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFieldType>({
    resolver: zodResolver(formSchema),
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const { dni, password } = values;

    const res = await signIn("credentials", {
      dni,
      password,
      redirect: false,
    });

      if (res?.error) {
        console.log(res?.error);
        return toast.success("El dni o la contraseña no son validas.");
      }

    if (res?.ok) return router.push("/protected")
  }

  const fields = [
    { name: "dni", label: "DNI", colSpan: "col-span-2", type: "text" },
    {
      name: "password",
      label: "password",
      colSpan: "col-span-2",
      type: "password",
    },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pt-4">
        <div className="w-full grid gap-y-2 gap-x-4 grid-cols-2 py-4">
          {fields.map((fieldInfo: any) => (
            <div key={fieldInfo.name} className={`${fieldInfo.colSpan}`}>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name={fieldInfo.name as any}
                  render={({ field }) => (
                    <FormItem className="!w-full">
                      <FormLabel
                        className="text-lg font-bold"
                        htmlFor={fieldInfo.name}
                      >
                        {fieldInfo.label}
                      </FormLabel>
                      <FormControl className="!w-full">
                        <Input
                          className="py-6 !w-full bg-gray-50"
                          id={fieldInfo.name}
                          type={fieldInfo.type}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="pt-8 w-full flex sm:justify-start justify-center">
          <Button type="submit" className="py-6 px-10 hover:bg-[#b30c67] bg-secondary">
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormSignIp;