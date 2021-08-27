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

    const editPage = (id) =>{
        history.push(`edit/${id}`)
    }

    const handleDelete = async (postId) => {
        const data = await postService.delete(postId);
    
        if (data.count > 0) {
          setPosts(posts.filter(({ id }) => id !== postId));
        }
      };
     
    
      return (
        <div>
            <h2>All Posts</h2>
            <ul className="card-container">
                {posts.map((post)=>(
                    <li key={post.id}
                        id={post.id}
                        className="card-box"
                    >
                        <div className="card-inner">
                        <p className="add-title">{post.title}</p>
                        <button className="yellow" onClick={() => singlePage(post.id)}>View</button>
                        <button className="green" onClick={() => editPage(post.id)}>Edit</button>
                        <button className="red" onClick={() => handleDelete(post.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      )

}





export default AppPosts;