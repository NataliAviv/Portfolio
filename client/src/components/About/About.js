import React,{Component} from 'react';
import picture from '../../img/cropImg.jpeg';
import './About.css'

class About extends Component{
    render(){

        return(
            <div id="about-container" className='about-container'>
                <div className="my-info">
                <div className="about-main-header">Natali Aviv</div>
                <img className="profile-img" src={picture} width="300" alt='profile' height="400"/>
                </div>
                <div className="paragraph">
                <div className="title">About Me</div><hr/><br/>
                    <p>
                        Software Developer with high interpersonal communication capabilities
                        and high self-learning skills.Currently working as a C Software Developer.
                        <br/>I have a lot of motivation and desire to face a new challenge and learn to
                         develop in different languages as well as acquire knowledge in new fields. 
                    </p>
                </div>
                <br/>
                <div className="icons">

]                </div>
            </div>
        );
    }
}

export default About;