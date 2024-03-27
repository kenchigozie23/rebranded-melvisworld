// components/EmailVerification.jsx
'use client'
import React, { useCallback, useEffect, useState } from 'react';
import {  BeatLoader } from 'react-spinners';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from "next/navigation";
import { FormError } from './form-error';
import { FormSuccess } from './form-success';
import { newVerification } from '@/actions/new-verification';


const EmailVerification = () => {
  // const [isLoading, setIsLoading] = useState(false);

  // const handleVerifyEmail = () => {
  //   setIsLoading(true);
  //   // Simulate email verification process
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // };
  // //new


  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      })
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl font-bold text-gray-800">Email Verification</h1>
          <p className="text-gray-600">Confirming your verification</p>
        </motion.div>
        <div className="mb-6">
        <div className="flex justify-center item-center w-full">
        {!success && !error && (
          <BeatLoader />
        )}
        <FormSuccess message={success} />
        {!success && (
          <FormError message={error} />
        )}
            </div>
        </div>
        <div className="flex justify-center">
          <Link href="/login">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
              // disabled={isLoading}
            >
              Go to Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;