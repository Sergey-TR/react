import React, { useState } from "react";

const Chat = () => {

    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'JavaScript'
        },
        {
            id: 2,
            name: 'Vue.js'
        },
        {
            id: 3,
            name: 'React.js'
        }
    ]);

const [name, setName] = useState('');

const deleteChat = (id) => {
    const filteredChat = chats.filter((chat) => chat.id !== id);
    setChats(filteredChat);
};

const addChat = () => {
    let randomId = Math.random()
    const newChat = {
        id: randomId,
        name: name
    }
    setChats(prevState => [...prevState, newChat])
};
    return (
        <div>
            {
                chats.map((chat) => (
                    <div key={chat.id}>
                        <h4>{ chat.name }</h4>
                        <i className="bi bi-trash3 cursor" onClick={() => deleteChat(chat.id)}></i>
                    </div>
                ))
            }

            <div>
                    <p>Add chat</p>
                <div>
                <input value={name} onChange={(e) => setName(e.target.value)}/>
                <i className="bi bi-plus-square cursor" onClick={addChat}></i>
                </div>
            </div>
            
        </div>
    );
};

export default Chat;