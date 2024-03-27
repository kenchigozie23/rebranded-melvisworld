"use client";
import React from "react";

import { RingLoader } from "react-spinners";
import { motion } from "framer-motion";
import Link from "next/link";
import * as z from "zod";
import Image from 'next/image'
import { useForm, SubmitHandler } from "react-hook-form";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";


import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { reset } from "@/actions/reset";
import { ResetSchema } from "@/lib/schema";

type ResetField = z.infer<typeof ResetSchema>;

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  // const form = useForm<z.infer<typeof ResetSchema>>({
  //   resolver: zodResolver(ResetSchema),
  //   defaultValues: {
  //     email: "",
  //   },
  // });
  const onSubmit: SubmitHandler<ResetField> = (values) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      reset(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetField>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(ResetSchema),
  });
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-6">
          {/* Replace with your logo */}
          <Image src="/melvis world logo.png" alt="Logo" width={70} height={70} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl font-bold text-gray-800">Reset Password</h1>
          <p className="text-gray-600">
            Enter your email to reset your password.
          </p>
        </motion.div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <input
              type="email"
              {...register("email")}
              disabled={isPending}
              placeholder="john.doe@example.com"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <div className="flex justify-center mb-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
              disabled={isPending}
              
              type="submit"
            >
              {isPending ? (
                <div className="flex items-center">
                  <RingLoader color="#ffffff" size={20} className="mr-2" />
                  Sending...
                </div>
              ) : (
                "Send Reset Email"
              )}
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link href="/login" className="text-blue-500 hover:text-blue-700">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};
