import React from "react";
import EmailVerification from "@/components/Email-verification";
import { Suspense } from "react";

const VerifyEmailPage = () => {
  return (
    <Suspense>
      <EmailVerification />;
    </Suspense>
  );
};

export default VerifyEmailPage;
