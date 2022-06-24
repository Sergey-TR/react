import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounter } from "../../redux/reducers/countReducer/counterSelector";
import { incrementCount, decrementCount } from "../../redux/actions/actions";
import { Box, Typography } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const Counter = (props) => {

    const count = useSelector(getCounter);

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
                    <Typography sx={{ minWidth: '200px', minHeight: '200px', borderRadius: '50%',
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