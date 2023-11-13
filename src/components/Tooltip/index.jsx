import React, { useState } from 'react';
import classes from './ToolTip.module.scss'

const ToolTip = ({children, text, isTaskTooltip}) => {
    const [toolTipStatus, setToolTipStatus] = useState(false);

    const tooltipHandler = () => {
        setToolTipStatus((toolTipStatus)=>!toolTipStatus);
    };
  
    return (
        <div className={`${classes.container} ${isTaskTooltip ? classes['task-tooltip-container'] : ''}`} onClick={tooltipHandler}>
            {children}
            {toolTipStatus && <div className={`${classes.tooltip} ${isTaskTooltip ? classes['task-tooltip'] : ''}`}>{text}</div>}
        </div>
    );
  };

export default ToolTip;
