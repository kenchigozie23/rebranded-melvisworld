'use server'
import * as z from 'zod'
import { LoginSchema } from '@/lib/schema'
import {revalidatePath, revalidateTag} from 'next/cache'


export const login = async (values: z.infer<typeof LoginSchema>) => {
     const validatedField = LoginSchema.safeParse(values)
     if(!validatedField.success){
        return {error: "Invalid fields!"}
     }
     return {success: "Email sent!"}
}