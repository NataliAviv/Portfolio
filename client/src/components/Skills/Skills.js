import React,{Component} from 'react';
import "./Skills.css"
import ProgressBar from '../ProgressBar/ProgressBar';

class Skills extends Component{
     skillsList=require('./Skills.json');
    render(){
        return(
            <div id="skills-container" className="skills-container">
                <div className="skills-title">My Skills</div><hr/>
                <div className="progress-skills">
                {this.skillsList.map((oneSkill)=>{
                    const { color,title,level,percent} = oneSkill
                    return <ProgressBar title={title} color={color} level={level} percent={percent} />})}
                </div>
            </div>
            
        );
    }
}

export default Skills;