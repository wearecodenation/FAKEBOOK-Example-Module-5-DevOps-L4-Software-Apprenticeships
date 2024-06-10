import { useEffect, useState} from "react"; 
import PostCard from "./componets/PostCard";
import Date from "./componets/DisplayDate";
import './App.css'

const API_URL = "https://jsonplaceholder.typicode.com/posts"

function App() {

  const [posts, setPosts] = useState([])

  useEffect (() => {
    getPosts()
  },[])

  const getPosts = async () => {
    const req = await fetch(`${API_URL}`)
    const res = await req.json()
    res.splice(10,99)
    setPosts(res)
  }

  return (
    
    <div>
      <h1>Fakebook</h1>
      <p>Welcome to Fakebook, the worlds best social media app.</p>

      <Date />

      <h2>Recent Posts</h2>
      {
        posts?.length > 0 
        ? 
        (
          <div className="container">
            {
              posts.map((post) =>(
                <div>
                  <p> --------------- </p>
                  <PostCard post={post} />
                </div>
              ))
            }
          </div>
        ): (
          <div className="empty">
            <h2>No posts found</h2>
          </div>
        )
      }
    </div>
 
  )
}

export default App
