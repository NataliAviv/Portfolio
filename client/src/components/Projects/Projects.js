import React,{Component,Fragment} from 'react';
import './Project.css'
import ProjectBox from '../ProjectBox/ProjectBox';
import "../../img/otoGif.gif";
class Projects extends Component{
    projectsBoxs = require('./projectBox.json')
    render(){
        return(
            <div id="projects-container" className="projects-container">
                <div className="title">My Projects</div><hr/>
                {this.renderProjectsBoxs()}
            </div>
        );
    }
    renderBox(projectName,gif,programLang,algo,link){
        return(
        <ProjectBox projectName={projectName} gif={gif} programLang={programLang}algo={algo}link={link}/>
        )
    }
    renderProjectsBoxs(){
        return(
            <div className="projects-box">
                {this.projectsBoxs.map((oneprojectBox,index)=>{
                    const {projectName,gif,programLang,algo,link} = oneprojectBox
                    return(
                        <Fragment key={index}>
                            {this.renderBox(projectName,gif,programLang,algo,link) }
                        </Fragment>
                    )

                })}
            </div>
        )

    }


}

export default Projects;