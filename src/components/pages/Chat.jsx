import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxOutlined from "@mui/icons-material/AddBoxOutlined";
import { Box, TextField, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getChats } from "../../redux/reducers/chatReducer/chatSelector";
import { ADD_CHAT, DELETE_CHAT } from "../../redux/types";

const Chat = () => {

    const chats = useSelector(getChats);
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const deleteChat = (id) => {
        dispatch({
            type: DELETE_CHAT,
            payload: id
        })
    };

    const addChat = () => {
        let randomId = Math.random();
        const newChat = {
            id: randomId,
            name: name
        }
        dispatch({
            type: ADD_CHAT,
            payload: newChat
        })
    };
    return (
        <div className="wrapper">
            <div className="chat-box">
                <Box>
                    <Typography variant="h5" component="div"
                        sx={{ color: "#8B0000", marginBottom: '15px', textAlign: 'start' }}
                    >
                        Chats
                    </Typography>
                    {
                        chats.map((chat) => (
                            <div key={chat.id} className="wrapper-box"> 
                                <Typography variant="h5" component="div"
                                    sx={{ color: "#8B0000" }}
                                >
                                    {chat.name}
                                </Typography>
                                <DeleteIcon sx={{ color: '#797979', fontSize: 30, cursor: 'pointer' }}
                                    onClick={() => deleteChat(chat.id)}
                                />
                            </div>
                        ))
                    }
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'self-start', width: 500 }}
                    component="div"
                >
                    <Typography variant="h5" component="div"
                        sx={{ color: "#8B0000", marginBottom: '15px' }}
                    >
                        Add chat
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}
                        component="form"
                        noValidate
                        autoComplete="off"
                    >

                        <TextField sx={{ display: 'flex' }}
                            id='outlined-required'
                            label='Add chat'
                            value={name} onChange={(e) => setName(e.target.value)}

                        />

                        <AddBoxOutlined sx={{ color: '#797979', fontSize: '70px', cursor: 'pointer' }}
                            onClick={addChat}
                        />
                    </Box>
                </Box>
            </div>
        </div>
    );
};

export default Chat;