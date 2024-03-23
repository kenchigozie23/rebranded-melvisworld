'use server'
import * as z from 'zod'
import { RegisterSchema } from '@/lib/schema'
import {revalidatePath, revalidateTag} from 'next/cache'


export const registerServe = async (values: z.infer<typeof RegisterSchema>) => {
     const validatedField = RegisterSchema.safeParse(values)
     if(!validatedField.success){
        return {error: "Invalid fields!"}
     }
     return {success: "Email sent!"}
}