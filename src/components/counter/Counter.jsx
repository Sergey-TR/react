import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount, decrementCount } from "../../redux/actions";
import { Box, Typography } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const Counter = (props) => {

    const count = useSelector(state => {
        const { counterReducer } = state;
        return counterReducer.count;
    });

    const dispatch = useDispatch();

    return (
        <div className="wrapper">
            <div className="wrapperBox">
                <Box sx={{
                    width: '100%', height: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography onClick={ () => dispatch(decrementCount)}>
                        <RemoveCircleOutlineIcon sx={{ fontSize: '100px', color: '#008000', cursor: 'pointer'}}
                        className="activeRm"/>
                    </Typography>
                    <Typography sx={{ width: '200px', height: '200px', borderRadius: '50%',
                        border: '5px solid #728FCE', color: '#728FCE', fontSize: '120px'
                }}>
                       { count }
                    </Typography>
                    <Typography onClick={ () => dispatch(incrementCount)}>
                        <ControlPointIcon sx={{ fontSize: '100px', color: '#FF0000', cursor: 'pointer'}}
                        className="activePlus"/>
                    </Typography>
                </Box>
            </div>
        </div>
    );
}

export default Counter;