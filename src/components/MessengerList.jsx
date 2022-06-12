import React from "react";
import Message from "./Message";

function MessengerList ({messages, userName}) {
    return (
        <div className="content">
            <h2>Домашнее задание урок № 2</h2>
            {messages.map((message, idx) =>
                <Message message={message} isPrimary={message.author === userName} key={idx}/>
            )}
        </div>
    );
}
 
export default MessengerList;