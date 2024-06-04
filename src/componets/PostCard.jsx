import React from "react";

const PostCard = ({post})=> {

    return (
        <div className="post">
            <div>
                <h3>Post Number - {post.id }</h3>
            </div>
            <div>
                <h3>{post.title}</h3>
            </div>

            <div>
                <p>{post.body}</p>
            </div>

        </div>
    )

}


export default PostCard