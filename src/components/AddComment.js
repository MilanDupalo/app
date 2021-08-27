import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import postService from '../services/postService';

function AddComment ({
    postId,
    callBackComments   
}) {

    const [comment, setComment] = useState({
        text: ''
    })

    const handleComment = async (e) => {
        e.preventDefault();
        await postService.addComment(comment , postId);

        setComment({
            text:''
        })
        callBackComments(comment)
    }

    return (
        <div>
            <form on onSubmit={handleComment}>
                <input required value={comment.text} onChange={({target}) =>setComment({...comment,text:target.value})}></input>
                <button>Comment !</button>
            </form>
        </div>
    )
}

export default AddComment;