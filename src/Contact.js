import React from 'react';
import "./Contact.css";
import instaImg from "./img/instagram.png"
import githubImg from "./img/github.png"
import fbImg from "./img/facebook.png"
import twitterImg from "./img/twitter.png"
import linkedinImg from "./img/linkedin.png"
import contactImg from "./img/about-9.jpg"



function submitForm(e){
    e.preventDefault()
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwPeteTqJ1MaFs8vvsFJkRIfkyag-bloOO_yKRUIAd-PciI1BDrCN9wC5cZaXxqU4vP/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = 'Be patient, I will connect with you shortly....!'
        setTimeout(function(){
            msg.innerHTML = ''
        }, 5000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
}


function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me...</h1>
                            <p className="hire__text white">I am available for work. Connect with me via phone:</p>
                            <p className="hire__text white"><strong>+91 7028813613</strong> or email <strong>ghoneniranjan@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                            <form name="submit-to-google-sheet" onSubmit={submitForm}>
                                <input type="text" name="Name" placeholder="Enter Your Name" required/>
                                <input type="email" name="Email" placeholder="Enter Your Email" required/>
                                <div className="col-md-6"><textarea name="Message" rows="6" fixed placeholder="Enter Your Message"></textarea></div>
                                <button className="btn contact pointer" type="submit">Submit</button>
                            </form>
                            <span id="msg"></span>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                    <div class="social-icons">
                            <a target="_blank" href="https://www.facebook.com/NJKT1105/">
                               <img src={fbImg}/>
                            </a>
                            <a target="_blank" href="https://twitter.com/Skydive4998">
                                <img src={twitterImg}/>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/the.sky.er/">
                                <img src={instaImg}/>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/theskyer4998/">
                                <img src={linkedinImg}/>   
                            </a>
                            <a target="_blank" href="https://github.com/TheSkyEr4998">
                                <img src={githubImg}/>
                            </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Contact



