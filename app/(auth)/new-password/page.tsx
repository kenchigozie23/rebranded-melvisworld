'use client'
import React, { useState } from 'react';
import { RingLoader } from 'react-spinners';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { newPassword } from '@/actions/new-passwords';


import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";


import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

import { NewPasswordSchema } from "@/lib/schema";

type ResetField = z.infer<typeof NewPasswordSchema>;


const ResetPasswordForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const onSubmit: SubmitHandler<ResetField> = (values) => {
        setError("");
        setSuccess("");
    
        startTransition(() => {
          newPassword(values, token).then((data) => {
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
          password: "",
        },
        resolver: zodResolver( NewPasswordSchema ),
      });

      const searchParams = useSearchParams();

      const token = searchParams.get("token");



 
 

 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-6">
          {/* Replace with your logo */}
          <img src="/logo.png" alt="Logo" className="h-12" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl font-bold text-gray-800">Reset Password</h1>
          <p className="text-gray-600">Enter your new password.</p>
        </motion.div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
            disabled={isPending}

                type="password"
                placeholder="New Password"
               
                {...register("password")}
                
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
            {/* <div className="mb-6">
              <input
            disabled={isPending}

              {...register("password")}
                type="password"
                placeholder="Confirm New Password"
               
              
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div> */}
          <FormError message={error} />
          <FormSuccess message={success} />
          <div className="flex justify-center mb-6">
          <button
            type="submit"
        
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
            disabled={isPending}
          >
            {isPending ? (
              <div className="flex items-center">
                <RingLoader color="#ffffff" size={20} className="mr-2" />
                Resetting...
              </div>
            ) : (
              'Reset Password'
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

export default ResetPasswordForm;