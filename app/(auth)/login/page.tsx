"use client";
import React from "react";

import SigningIn from "@/components/sign-in";
import ParticlesComponent from "../../../components/particle";

const SignIn = () => {
  // const [universityLevel, setUniversityLevel] = useState("");
  // const universityLevels = [
  //   "Freshman",
  //   "Sophomore",
  //   "Junior",
  //   "Senior",
  //   "Graduate",
  // ];
  // const [userType, setUserType] = useState('');
  // const userTypes = ['Student', 'Lecturer'];

  return (
    <div className=" text-black  ">
      <SigningIn />

      <div className="w-full h-screen  top-0 left-0  ">
        <ParticlesComponent />
      </div>
    </div>
  );
};

export default SignIn;
