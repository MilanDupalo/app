import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import postService from '../services/postService'
import AddComment from '../components/AddComment';
import useFormattedDate from '../hooks/useFormattedDate';


function SinglePost(){
   const history = useHistory();
   const {id} = useParams();

   const [post, setPost] = useState({
       title: '',
       text:'',
   })  

   const dateFormat = useFormattedDate(post.createdAt)

   const [comments, setComments] = useState([]);

   useEffect(() => {
    const fetchPost = async () => {
        const  singlePost  = await postService.getId(id)

        setPost({...singlePost})
        setComments([...singlePost.comments])
    }
    
    if (id) {
        fetchPost();
    }
},[id])

const setAllComments = (newComment) => {
    setComments([...comments,newComment])
}




    return(
        <div>
             <h2><i>Title: </i>{post.title}</h2>
             <p><i>Text: </i>{post.text}</p>

             <p className="date"> <i>created at: </i>{dateFormat}</p>


             <ul>Comments:
                {comments.map((comment) =>(
                    <li key={comment.id}>
                        <p>{comment.text}</p></li>
                ))}
            </ul>
            < AddComment
            postId={id}
            callBackComments={setAllComments}
             />
        </div>

        
    );



}
export default SinglePost;

