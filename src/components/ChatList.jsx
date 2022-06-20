import React from "react";
import {
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListItemButton,
    Avatar
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";


const ChatList = ({ name }) => {

    return (
        <><ListItem>
            <ListItemButton>
                <ListItemAvatar><Avatar><FolderIcon /></Avatar></ListItemAvatar>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem></>
    );
}

export default ChatList;