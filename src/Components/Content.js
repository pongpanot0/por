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
                    <h2 className="social">สวัสดีครับ</h2>
                    <p className="social">
                          ชื่อ นายพงศ์ปณต สมัครการ
                          ชื่อเล่น แบงค์ <br/>
                          กำลังศึกษาต่อในส่วนของการเป็น Programmer <br/>
                          ส่วนใหญ่แล้วผลงานจะเก็บอยู่ใน Github นะครับ  <br/>สามารถดูได้ในหน้าของ <Link to="/contact">
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
