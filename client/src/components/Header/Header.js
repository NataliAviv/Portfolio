import React,{Component,Fragment} from 'react';
import "./Header.css"
import CVNataliAviv from '../../files/CVNataliAviv.pdf'

class Header extends Component{
     menuItems = require('../../menuItems.json')
    render(){

        return(
            <div className="header-container">
               {this.renderButtonsContainer()}
            </div>
        );
    }


    renderButtonsContainer(){
      return  <div className="item-buttons">
        {this.menuItems.map((menuItem,index)=>{
            const {title,path,id} = menuItem
            return(
            <Fragment key={index}>
            {this.renderButton(title,path,id) }
            </Fragment>
            
       )})}
       </div>
    }


    renderButton = (title,path,id) =>{
        
        return (
        id==='resume-container'? this.openResume(title) : <div onClick={()=> this.handlePathClick(id)} className="menu-item-button">{title}</div>
        )
    }

    handlePathClick = (id)=>{
    let element = document.getElementById(id)
    let y;
    if(element){
        y=element.getBoundingClientRect().y
    }
    if(id==='resume-container'){
        return;
    }
    if(element)
     element.scrollIntoView(true)
    window.scrollBy(0, y -50);

    }

    openResume(title){
        return(
        <a href={CVNataliAviv} className="menu-item-button" download="CVNataliAviv.pdf">{title}</a>
        )
    }
}

export default (Header);