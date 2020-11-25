import React from 'react';
import "./ProjectBox.css"
import PropTypes from 'prop-types'
import { FaGithub } from "react-icons/fa";

function ProjectBox({projectName,gif,programLang,link,algo}){
ProjectBox.propTypes={
    projectName: PropTypes.string.isRequired,
    programLang: PropTypes.string.isRequired,
    algo: PropTypes.string,
    gif: PropTypes.string,
    link: PropTypes.string.isRequired
}

return(
    <div className="project-box-container">
       {renderTitle()}
       {renderProgramLanguage()}
       {renderAlgo()}
       {renderGif()}
       {renderLink()}
    </div>
)

function renderTitle(){
    return(
        <span className="title-project-box">{projectName}</span>
    )
}

function renderProgramLanguage(){
    return(
        <span className="lang-project-box">{programLang}</span>
    )
}

function renderGif(){
    return(
        <img src={gif} alt='' className="lang-gif-box"/>
    )
}
function renderLink(){
    return(
        <a href={link}  className="lang-link-box"><FaGithub/></a>
    )
}
function renderAlgo(){
    return(
        <span className="lang-algo-box">{algo}</span>
    )
}

}



export default ProjectBox;




