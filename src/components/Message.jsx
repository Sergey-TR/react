import React from "react";
import styles from './styles/style.css'


function Message ({message, isPrimary}) {
    //console.log(isPrimary);
    // const currentStyle = 
    //     isPrimary ? styles.primary : styles.secondary
    // console.log(currentStyle);
    if(isPrimary) {
        return (
        
            <div className="primary contentBody">
                
            <small>{message.author}</small>
                <p className={styles.messageText}>
                   {message.text}
                </p>
            </div>
        )
    } else {
        return (
        
            <div className="secondary contentBody">
                
            <small>{message.author}</small>
                <p className={styles.messageText}>
                   {message.text}
                </p>
            </div>
        )
    }
    
}

export default Message;