import React,{Component} from 'react';
class Resume extends Component{
    render(){

        return(
            <div className="resume-container" >
                {this.openResume}
            </div>
        );
    }
    openResume(){
    }
}


export default Resume;