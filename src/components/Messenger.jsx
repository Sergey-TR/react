import React, {useState, useEffect} from "react";

function Messenger() {

    const [messageList, setMessageList] = useState([]);
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

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
        if(lastAuthor && lastAuthor.author) {
            setMessageList(prevState => [...prevState, {
                id: getLastId(prevState),
                content: `Сообщение автора ${lastAuthor.author} отправлено`
            }])
        }
    }

    return (
        <div>
            {messageList.map((message) => {
                return (
                    <div key={message.id}>
                        {message.author && <p>Автор: {message.author}</p>}
                        <p>{message.author && <span>Текст:</span>} {message.content}</p>
                    </div>
                )
            })}
            <form onSubmit={submitHandler}>
                <input value={content} onChange={(event) => setContent(event.target.value)}/>
                <input value={author} onChange={(event) => setAuthor(event.target.value)}/>
                <button type="submit">SEND</button>
            </form>
        </div>
    )

}

export default Messenger;