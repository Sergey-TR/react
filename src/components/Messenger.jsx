import React, {useState, useEffect} from "react";
import MessengerList from "./MessengerList";

const MESSAGE_BOT = 'Это сообщение от бота';
const USER_NAME = 'author: user';
const BOT_NAME = 'bot-message';
const TIMEOUT = 1500;
let timeoutId = null; 

function Messenger() {

    const [messageList, setMessageList] = useState([]);
    const [messageText, setMessageText] = useState('');

    const sendMessage = () => {

        if (messageText.trim().length === 0) {
            alert('Вы пытаетесь отправить пустое сообщение!!! Оно не будет отправлено.');
            return;
        }

        setMessageList([...messageList, {
            text: messageText,
            author: USER_NAME
        }]);

        setMessageText('');

    };

    const sendMessageBot = () => {

        setMessageList([...messageList, {
            text: MESSAGE_BOT,
            author: BOT_NAME
        }]);
    };

    useEffect(() => {
        if (messageList.length === 0) return;
        if (messageList[messageList.length - 1].author === 'bot-message') return;

        timeoutId = setTimeout(sendMessageBot, TIMEOUT);

        return () => clearTimeout(timeoutId);
    }, [messageList]);

    const inputMessageHandler = ({target}) => {setMessageText(target.value)};

    return (
        <div className="wrapper">
            <MessengerList messages={messageList} userName={USER_NAME}/>
            <div className="messageForm">
                <textarea className="txt-area" value={messageText} onChange={inputMessageHandler}></textarea>
                <button onClick={sendMessage} className="btn btn-outline-primary">SEND</button>
            </div>
        </div>
    );

}

export default Messenger;