import React from "react";
import { useSelector } from "react-redux";
import { getMessages } from "../../redux/reducers/messageReducer/messageSelector";
import { Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Messages = ({filteredMessage}) => {

    const messages = useSelector(getMessages);
    const messageFromChat = filteredMessage.length ? filteredMessage : messages;

    return (
        <div className="wrapper">

            <Typography variant="h5" component="div"
                sx={{ color: "#8B0000", marginBottom: '15px', textAlign: 'start' }}
            >
                Messages
            </Typography>
            {
                messageFromChat.map((message) => (
                    <div key={message.id} className="wrapper-box">
                        {message.body}
                        <DeleteIcon sx={{ color: '#797979', fontSize: 30, cursor: 'pointer' }}/>
                    </div>
                ))
            }

        </div>
    )
}

export default Messages;