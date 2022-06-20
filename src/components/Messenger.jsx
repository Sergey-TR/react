import React, { useState, useEffect, useRef } from "react";
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
import SendIcon from '@mui/icons-material/Send';

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

    const inputRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            botAnswer(messageList)
        }, 1500);
        inputTextField(inputRef.current)
    }, [author, messageList])

    const buttonClick = (event) => {
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

    function inputTextField(input) {
        if(input) {
            input.focus();
        }
    }

    return (
        <div className="wrapper">

            <div className="wrapper-box">
                {/* <div className="chat-box"> */}
                <Box sx={{
                    width: '50%', margin: '10px', padding: '10px', backgroundColor: '#FFFFFF'
                }}>
                    <Typography variant="h5" component="div" color="primary">CHATS</Typography>
                    <List>
                        {list.map(item => {
                            return (
                                <ChatList name={item.name} key={item.id} />
                            );
                        })}
                    </List>
                </Box>

                {/* </div> */}
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
                    {/* <form onSubmit={submitHandler}>
                        <input value={content} onChange={(event) => setContent(event.target.value)} />
                        <input value={author} onChange={(event) => setAuthor(event.target.value)} />
                        <Button type="submit" variant="contained">SEND</Button>
                    </form> */}
                    <Box 
                        component="form"
                        noValidate
                        autoComplete = "off"
                    >

                        <TextField sx={{ backgroundColor: '#eaeaea', margin: '10px 0 0 0' }}
                            required
                            fullWidth
                            id='outlined-multiline-flexible'
                            multiline
                            maxRows={4}
                            label='Message text'
                            inputRef={inputRef}
                            value={content} onChange={(event) => setContent(event.target.value)}
                        />
                        <TextField sx={{ backgroundColor: '#eaeaea', margin: '10px 0 0 0' }}
                            required
                            fullWidth
                            id='outlined-required'
                            label='Author name'
                            value={author} onChange={(event) => setAuthor(event.target.value)}
                        />
                        <Button sx={{ margin: '10px 0 0 0' }} 
                            variant="contained"
                            endIcon={<SendIcon />}
                            onClick={buttonClick}
                            >
                                SEND
                        </Button>
                    </Box>
                </div>
            </div>

        </div>
    )

}

export default Messenger;