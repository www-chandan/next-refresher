import PostLists from "@/components/posts-list";
import Link from "next/link";
import { Suspense } from "react";

export default async function Posts () {
   
    return (
        <main className="text-center pt-16 px-3">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
            <Suspense fallback="Loading...">
                <PostLists />
            </Suspense>
            
        </main>
    )
}