import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Chat from './components/pages/Chat';
import Profile from './components/pages/Profile';
import NotFound from './components/pages/NotFound';
import LayoutMenu from './components/layouts/LayoutMenu';
import Counter from './components/counter/Counter';
import Comments from './components/pages/Comments';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<LayoutMenu />}>
          <Route index element={<Home />} />
          <Route path={'/chats'} element={<Chat />} />
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/counter'} element={<Counter />} />
          <Route path={'/comments'} element={<Comments />} />
        </Route>
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
