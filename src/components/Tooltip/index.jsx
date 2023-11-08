import React, { useState } from 'react';
import classes from './ToolTip.module.scss'

const ToolTip = ({children, text}) => {
    const [toolTipStatus, setToolTipStatus] = useState(false);

    const toltipHandler = () => {
        setToolTipStatus((toolTipStatus)=>!toolTipStatus);
    };
  
    return (
        <div className={classes.container} onClick={toltipHandler}>
            {children}
            {toolTipStatus && <div className={classes.tooltip}>{text}</div>}
        </div>
    );
  };

export default ToolTip;
