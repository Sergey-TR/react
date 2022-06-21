import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Chat from './components/pages/Chat';
import Profile from './components/pages/Profile';
import NotFound from './components/pages/NotFound';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/chats'} element={<Chat />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
