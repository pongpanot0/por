import React from 'react'
import { Link } from 'react-router-dom'
import "./Content.css"
function Content() {
    return (
        
        <div className="container">
            <section className="content-con">
                <div className="content-l">
                    <img src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=711&q=80" alt=""/>
                </div>
                <div className="content-r">
                    <h2 className="social">Hello</h2>
                    <p className="social">
                         MyName is Bank
                         NickName Bamk <br/>
                         Currently are study in  Programmer <br/>
                         <br/>You can see in the <Link to="/contact">
                          Contact
                          </Link>
                          &nbsp; ได้เลยนะครับ
                    </p>
                </div>
            </section>
     
        </div>
    )
}

export default Content
