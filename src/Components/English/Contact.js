import React from 'react'
import "./Content.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import Tooltip from '@material-ui/core/Tooltip';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Header from './Header';

 
  

function Contact() {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
      setOpen(false);
    };
  
    const handleTooltipOpen = () => {
      setOpen(true);}
    return (
        <>
        <Header/>
        <div className="container">
            <section className="content-con">
                <div className="content-l">
                    <img src="https://images.unsplash.com/photo-1587151586740-db2f16dafa38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt=""/>
                </div>
                <div className="content-rr">
                <h1 className="social">address</h1>
                    <p>
                    78/5 serithai 41 Klongkum Bungkum Bangkok 10240<br />
                    </p>
                    <h1 className="social">  Mobile <br />  </h1>
                    <p> 098-549-6936</p>
                    <h1 className="social">My Social</h1>
                    <Tooltip   title="Fackbook">
                    <a href=" https://www.facebook.com/pongpanot.samarkkarn " className="aa"><FacebookIcon/></a> 
          </Tooltip>
          <Tooltip   title="Line">
          <a href=" https://line.me/ti/p/KUyxPaBI2L"className="aa" >
           <img src="https://img.icons8.com/ios-glyphs/30/000000/line-me.png"/>
           </a>
          </Tooltip>          
          <Tooltip   title="Github">
          <a href=" https://github.com/pongpanot0"className="aa"><GitHubIcon/></a> 
          </Tooltip>
          <Tooltip   title="React">
          <a href=" https://qpmt51.web.app"className="aa"><WebIcon/></a>
          </Tooltip>
        
       
                          
                </div>
            </section>
     
        </div>
        </>
    )
}

export default Contact
