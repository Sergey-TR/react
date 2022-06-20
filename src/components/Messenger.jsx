import React, { useState, useEffect } from "react";
import ChatList from "./ChatList";
import {
    Button,
    Box,
    TextField,
    List,
    Typography,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import { blue } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: blue[100],
        }
    },
});

function Messenger() {

    const [messageList, setMessageList] = useState([]);
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [list] = useState([
        { name: 'Vue', id: '1' },
        { name: 'React', id: '2' },
        { name: 'Nodejs', id: '3' }
    ]);

    useEffect(() => {
        setTimeout(() => {
            botAnswer(messageList)
        }, 1500)
    }, [messageList])

    const submitHandler = (event) => {
        event.preventDefault();

        setMessageList(prevState => [...prevState, {

            id: getLastId(prevState),
            content,
            author

        }])
    }

    function getLastId(arr) {
        return arr.length ? arr[arr.length - 1].id + 1 : 0;
    }

    function botAnswer() {
        const lastAuthor = messageList[messageList.length - 1];
        if (lastAuthor && lastAuthor.author) {
            setMessageList(prevState => [...prevState, {
                id: getLastId(prevState),
                content: `Сообщение автора ${lastAuthor.author} отправлено`
            }])
        }
    }

    return (
        <div className="wrapper">

            <div className="wrapper-box">
                <div className="chat-box">
                    <Typography variant="h5" component="div" color="primary">CHATS</Typography>
                    <ChatList>

                    </ChatList>
                </div>
                <div className="messenger-box">
                   <div className="messenger-content">
                   {messageList.map((message) => {
                        return (
                            <div key={message.id}>
                                {message.author && <p>Автор: {message.author}</p>}
                                <p>{message.author && <span>Текст:</span>} {message.content}</p>
                            </div>
                        )
                    })}
                   </div>
                    <form onSubmit={submitHandler}>
                        <input value={content} onChange={(event) => setContent(event.target.value)} />
                        <input value={author} onChange={(event) => setAuthor(event.target.value)} />
                        <Button type="submit" variant="contained">SEND</Button>
                    </form>
                </div>
            </div>

        </div>
    )

}

export default Messenger;