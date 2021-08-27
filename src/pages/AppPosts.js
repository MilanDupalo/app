import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import postService from '../services/postService';



function AppPosts(){
    const [posts,setPosts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchPosts = async () => {
          const data = await postService.getAll();
          setPosts(data);
        };
        fetchPosts();
      }, []);

      const singlePage = (id) => {
        history.push(`post/${id}`)
    }
     
    
      return (
        <div>
            <h2>All Posts</h2>
            <ul>
                {posts.map((post)=>(
                    <li key={post.id}
                        id={post.id}
                    >
                        <p>{post.title}</p>
                        <button onClick={() => singlePage(post.id)}>View Post</button>
                    </li>
                ))}
            </ul>
        </div>
      )

}





export default AppPosts;