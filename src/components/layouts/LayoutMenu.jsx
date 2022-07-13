import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const LayoutMenu = () => {

    const user = false;

    return (
        <div>
            <header>
                <div className="header-left">
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
                </div>
                <div className="header-right">
                    {user ? 
                        <NavLink style={({ isActive }) => ({ color: isActive ? '#0000FF' : '#737CA1' })} to={'/'}
                        className="linkMenu">LOGOUT
                        </NavLink> :
                        <div>
                            <NavLink style={({ isActive }) => ({ color: isActive ? '#0000FF' : '#737CA1' })} to={'/login'}
                        className="linkMenu">LOGIN</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? '#0000FF' : '#737CA1' })} to={'/register'}
                        className="linkMenu">Register</NavLink>
                        </div>  
                    } 
                </div>   
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default LayoutMenu;