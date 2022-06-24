export const getCounter = state => {
    const { counterReducer } = state;
    return counterReducer.count;
}