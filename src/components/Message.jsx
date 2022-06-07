import React from "react";

function Message( {props_message} ) {
    
    return(
        <div className="wrapper">
            <div className="message-box">
                <h1 className="message-h1"> {props_message} </h1>
            </div>
        </div>
    );

}

export default Message;