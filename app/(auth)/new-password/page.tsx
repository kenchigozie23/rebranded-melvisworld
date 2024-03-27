"use client";
import ResetPasswordForm from "@/components/Password-Verification";
import React from "react";
import { Suspense } from "react";

function ResetPasswordForms() {
  return (
    <div>
      <Suspense>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}

export default ResetPasswordForms;
