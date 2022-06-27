export const getMessages = state => { 
    const { messageReducer } = state;
    return messageReducer.messages
}