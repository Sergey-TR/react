import './App.css';
import Message from './components/Message';

function App() {

  const message = 'Первое ДЗ по курсу React.js';

  return (
    <div className="App">
      <Message props_message = {message} />
    </div>
  );
}

export default App;
