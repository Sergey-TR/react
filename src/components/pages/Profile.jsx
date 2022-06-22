import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';

const Profile = () => {
    return (
        <div className="wrapper">
            <div className="wrapperBox">
                <Box sx={{ background: '#eaeaea', width: '500px', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ background: '#728FCE', width: '100%', padding: '10px', borderRadius: '10px' }}>
                        <Typography variant="p" component="div"
                            sx={{
                                color: '#ffffff', fontSize: '20px', fontWeight: 'bold', display: 'flex',
                                alignItems: 'center', justifyContent: 'start', marginBottom: '10px'
                            }}
                        >
                            <Avatar sx={{ marginRight: '20px' }}>UN</Avatar>
                            User name
                        </Typography>
                        <Typography sx={{ color: '#ffffff', fontSize: '20px', fontWeight: 'bold', textAlign: 'start' }}>
                            +7(xxx)xxx-xx-xx
                        </Typography>
                        <Typography sx={{ color: '#ffffff', fontSize: '20px', fontWeight: 'bold', textAlign: 'start' }}>
                            mail@mail.mail
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid black',
                        background: '#eaeaea', marginTop: '10px', display: 'flex', flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}>
                        <Typography variant="p" component="div"
                            sx={{
                                color: '#728FCE', fontSize: '20px', fontWeight: 'bold', display: 'flex',
                                alignItems: 'center', justifyContent: 'start', padding: '10px'
                            }}
                        >
                            <PeopleAltIcon sx={{ fontSize: '30px', marginRight: '10px' }}></PeopleAltIcon>
                            add group
                        </Typography>
                        <Typography variant="p" component="div"
                            sx={{
                                color: '#728FCE', fontSize: '20px', fontWeight: 'bold', display: 'flex',
                                alignItems: 'center', justifyContent: 'start', padding: '10px'
                            }}
                        >
                            <PersonAddIcon sx={{ fontSize: '30px', marginRight: '10px' }}></PersonAddIcon>
                            add contact
                        </Typography>
                        <Typography variant="p" component="div"
                            sx={{
                                color: '#728FCE', fontSize: '20px', fontWeight: 'bold', display: 'flex',
                                alignItems: 'center', justifyContent: 'start', padding: '10px'
                            }}
                        >
                            <PersonIcon sx={{ fontSize: '30px', marginRight: '10px' }}></PersonIcon>
                            contacts
                        </Typography>
                    </Box>
                </Box>
            </div>
        </div>
    );
};

export default Profile;