import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const LayoutMenu = () => {
    return (
        <div>
            <header>
                <NavLink style={({ isActive }) => ({ color: isActive ? '#0000FF' : '#737CA1' })} to={'/'}
                    className="linkMenu">Home</NavLink>
                <NavLink style={({ isActive }) => ({ color: isActive ? '#0000FF' : '#737CA1' })} to={'/chats'}
                    className="linkMenu">Chats</NavLink>
                <NavLink style={({ isActive }) => ({ color: isActive ? '#0000FF' : '#737CA1' })} to={'/profile'}
                    className="linkMenu">Profile</NavLink>  
                <NavLink style={({ isActive }) => ({ color: isActive ? '#0000FF' : '#737CA1' })} to={'/counter'}
                    className="linkMenu">Counter</NavLink>   
                <NavLink style={({ isActive }) => ({ color: isActive ? '#0000FF' : '#737CA1' })} to={'/comments'}
                    className="linkMenu">Comments</NavLink>     
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default LayoutMenu;