import React from "react";
import { useSelector } from "react-redux";
import { getMessages } from "../../redux/reducers/messageReducer/messageSelector";

const Messages= () => {

    const messages = useSelector(getMessages)

    return (
        <div className="wrapper">
            <div className="wrapperBox">
                <h1>MESSAGE</h1>
                { 
                    messages.map((message) => (
                        <div key={message.id}>
                            {message.body}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Messages;