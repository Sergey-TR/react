import React, { useEffect } from "react";
//import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentSelector } from "../../redux/reducers/commentsReducer/commentsSelector";
import { getComments } from "../../redux/actions/actions";
import Spin from "../spinner/Spin";

const Comments = () => {
    
    //const [comments, setComments] = useState([])
    const comments = useSelector(commentSelector);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComments());
    }, [])

    return (
        <div className="wrapper">
            
            <div className="wrapperBox">
                
            <Spin/>
            {
                comments.map((comment) => (
                    <div key={comment.id} className="wrapper-box">
                        <div className="comment-body">
                            {comment.body}
                        </div>
                        <div className="delete-comment">
                            <i className="bi bi-x-circle cursor"></i>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Comments;