import React from "react";
import { Box, Typography } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const Counter = () => {
    return (
        <div className="wrapper">
            <div className="wrapperBox">
                <Box sx={{
                    width: '100%', height: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography>
                        <RemoveCircleOutlineIcon />
                    </Typography>
                    <Typography sx={{ width: '50px', height: '50px', borderRadius: '50%',
                        border: '2px solid #728FCE'
                }}>
                        10
                    </Typography>
                    <Typography>
                        <ControlPointIcon />
                    </Typography>
                </Box>
            </div>
        </div>
    );
}

export default Counter;