



"use client";
import React from "react";

import ParticlesComponent from "../../../components/particle";
import SigningUp from "@/components/sign-up";




const SignUp = () => {
 
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
    <div >
      <SigningUp/>
      <div className="top-0 left-0  ">
        <ParticlesComponent />
      </div>
    </div>
  );
};

export default SignUp;
