import React from "react";
import { useEffect, useState} from "react"; 

const IMAGE_API_URL = "https://picsum.photos/200"

const PostCard = ({post})=> {

    const [img, setImg] = useState([])

    useEffect (() => {
        getImage()
      },[])

    const getImage = async () => {
        const req = await fetch(`${IMAGE_API_URL}`)
        const res = await req
        setImg(res)
    }

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

            <div>
                <img src={img.url} alt="post image" />
            </div>

        </div>
    )

}


export default PostCard