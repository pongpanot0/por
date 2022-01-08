import React from 'react'
import "./Banner.css"
import Typical from 'react-typical'

let bannerData = {
    title: "Hello everyone!",
   
}
function Banner() {
    return (
        <div>
            <div className="banner-bg">
                <div className="container">
                    <div className="banner-con">
                        <div className="banner-text "> 
                       
                            <h1 className="animate__slideInLeft">{bannerData.title}</h1>
                            <Typical className="cla"
                            steps={['My name is : Pongpanot Samarkkarn', 4000, "NickName : Bank", 2500]}
                            loop={Infinity}
                            wrapper="p"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
