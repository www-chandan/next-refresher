import PostItem from "@/components/post-item";
import { Suspense } from "react";

export default function page({params}:{params: {id:string}}){
    return (
        <main className="text-center pt-16 px-3">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Post</h1>
            <Suspense fallback="Loading...">
                <PostItem params={{ id: params.id }} />
            </Suspense>            
        </main>
    )
}