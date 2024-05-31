'use server'

import prisma from "@/app/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData){
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
    console.log(title, body);
    
    //update data- data mutation
    await prisma.post.create({
        data: {
            title,
            body,
        },
    })

    //revalidate -cache- re render the specific path
    revalidatePath('/posts');
}