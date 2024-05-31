import Link from "next/link";
import prisma from "@/app/db";

export default async function PostLists(){
    
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // const response = await fetch('https://dummyjson.com/posts?limit=10');
    // const data = await response.json();

    //fetch data from db
    const posts = await prisma.post.findMany();
    return(
         <ul>
            {
                    posts.map((post)=> (
                        <li key={post.id} className="mb-5">
                            <Link href={`/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    ) )
                }
         </ul>
    )
}