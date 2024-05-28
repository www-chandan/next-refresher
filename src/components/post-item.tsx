import UpvotedBtn from "./upvote-btn";

export default async function PostItem ({params}:{params: {id:string}}){

    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const post = await response.json();

    return(
        <div>            
            <h1 className="inline text-3xl font-semibold mb-7">{post.id}</h1>
            <h1 className="text-3xl font-semibold mb-7">{post.title}</h1>
            <p className="max-w-[700px] mx-auto">{post.body}</p>
            <UpvotedBtn />
        </div>
    )
}