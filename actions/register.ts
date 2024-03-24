'use server'
import * as z from 'zod'
import { RegisterSchema } from '@/lib/schema'
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";



import {revalidatePath, revalidateTag} from 'next/cache'


export const registerServe = async (values: z.infer<typeof RegisterSchema>) => {
     const validatedField = RegisterSchema.safeParse(values)
     if(!validatedField.success){
        return {error: "Invalid fields!"}
     }

     const { email, password, name } = validatedField.data;
     const hashedPassword = await bcrypt.hash(password, 10);
   
     const existingUser = await getUserByEmail(email);

   
     if (existingUser) {
       return { error: "Email already in use!" };
     }
   
     await db.user.create({
       data: {
         name,
         email,
         password: hashedPassword,
       },
     });



     // sent verification token
   
     return {success: "Email sent!"}
}