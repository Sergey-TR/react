import Counter from "./components/counter/Counter";
import Chat from "./components/pages/Chat";
import Comments from "./components/pages/Comments";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";

export const publicRoutes = [
    {
        path: '/counter',
        Component: Counter
    },
    {
        path: '/',
        Component: Home
    }
]

export const privateRoutes = [
    {
        path: '/chat',
        Component: Chat
    },
    {
        path: '/comments',
        Component: Comments
    },
    {
        path: '/profile',
        Component: Profile
    }
]
