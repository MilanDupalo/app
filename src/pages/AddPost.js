import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import postService from '../services/postService';

function AddPost(){

    const history = useHistory();
    const { id } = useParams();

    const [newPost, setNewPost] = useState({
        title:'',
        text: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
          await postService.edit(id, newPost);
        } else {
          await postService.add(newPost);
        }
    
        history.push('/posts');
      };

      const handleReset = () => {
        setNewPost({
          title:'',
          text: '',
        });
      };

    


    return(
        <div>
            <h2 >{id ? 'Edit' : 'Add new'} your new post</h2>
            <form
            className="addform"
            onSubmit={handleSubmit}
            >
                <div className="form-input">
                <label>Title of your post : </label>
                <input required minLength="2" type="text"  value={newPost.title} onChange={({ target }) =>
                setNewPost({ ...newPost, title: target.value })
                }>  
                </input>
                </div>


                <div className="form-input">
                    <label>Enter your text : </label>
                    <input  required minLength="2" maxLength="300"  type="text" value={newPost.text} onChange={({ target }) =>
                    setNewPost({ ...newPost, text: target.value })
                    }></input>
                </div>

                <button className="yellow">{id ? 'Edit' : 'Add new'}</button>
                <button className="green" type='button' onClick={handleReset}>Reset this form/delete all</button>
            </form>
        </div>
    )
       

}

export default AddPost;