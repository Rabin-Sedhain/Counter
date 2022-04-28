import React from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { Tooltip } from "@mui/material";

const Counter = ({increase, decrease, Reset, count}) => {

    const Increase = ()=>{
        increase();
    }

    const Decrease =()=>{
        decrease();
    }

    const reset =()=>{
        Reset();
    }

  return (
    <>
        <div className="main-div">
        <div className="center-div">
          <h1>{count}</h1>
          <div className="btn-div">
          <Tooltip title="Add">
            <Button onClick={Increase} className="btn-green"><AddIcon /> </Button>
            </Tooltip>

            <Tooltip title="Delete">
            <Button onClick={Decrease} className="btn-red"><Remove /></Button>
            </Tooltip>

          </div>
        <button onClick={reset} className="btn-reset">Reset</button>

        </div>

      </div>
    </>
  )
}

export default Counter