import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import postService from '../services/postService'



function SinglePost(){
   const history = useHistory();
   const {id} = useParams();

   const [post, setPost] = useState({
       title: '',
       text:'',
   })   

   useEffect(() => {
    const fetchPost = async () => {
        const  postId  = await postService.get(id)
        console.log(postId);
        setPost({...postId})
    }
    if (id) {
        fetchPost();
    }
},[id])


    return(
        <div>
            <h2>Title: {post.title}</h2>
            <p>Text: {post.text}</p>
        </div>
    )


}
export default SinglePost;

