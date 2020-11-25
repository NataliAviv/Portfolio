import React from 'react';
import './ProgressBar.css';
import PropTypes from 'prop-types';

const ProgressBar=({title,color,percent,level})=>{
ProgressBar.propTypes={
    title:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
    percent:PropTypes.number.isRequired,
    level:PropTypes.oneOf(['expert','pro','medium'])
}
return(
    <div className="progress-bar-container">
        {renderTitleAndLevel()}
        {renderProgress()}

    </div>
)
function renderTitle(){
return(
    <span className="progress-bar-title">{title}</span>
    )
}

function renderLevel(){
    return(
        <span className="progress-level">{level}</span>
    )
}

function renderTitleAndLevel(){
return(
    <div className="title-level">
        {renderTitle()}
        {renderLevel()}
    </div>
)
}

function renderProgress(){
    const backgroundColor=color;
    const width=percent+"%";
    return(
        <div className="background-bar">
            <div className="level-bar" style={{width,backgroundColor}}>

            </div>
        </div>
    )
}

}

export default ProgressBar;