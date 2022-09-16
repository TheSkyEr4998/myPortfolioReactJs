import React from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome";
import { faGithub } from "../node_modules/@fortawesome/free-brands-svg-icons";
import { faLink } from "../node_modules/@fortawesome/free-solid-svg-icons";
import "./Project.css";
import Project1 from './img/project-1.jpg';
import Project2 from './img/project-2.jpg';
import Project3 from './img/project-3.jpg';
import Project4 from './img/project-4.jpg';
import Project5 from './img/project-5.jpg';
import htmlImg from "./img/html.png"
import cssImg from "./img/CSS.png"
import jsImg from "./img/javascript.png"
import nodeImg from "./img/nodeJs.png"
import reactImg from "./img/react.png"
import githubImg from "./img/github.png"
import github1Img from "./img/github1.png"
import eyeImg from "./img/eye.png"
import netlifyImg from "./img/netlify.png"
import vsImg from "./img/vscode.png"
function Project() {
  return (
    <div className="project component__space" id="Projects">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
      </div>
      <div class="container">
            <div class="work-list">
                <div class="work">
                    <img src={Project1}alt=""/>
                    <div class="layer">
                        <h3>
                            Meanbuy Clone
                        </h3>
                        <p>
                            Meanbuy is an E-commerce platform where you can buy variety of lifestyle products of top brandings.
                        </p>
                        <div class="techstacks">
                            <div class="used">
                                <p>Tech Stacks :</p>
                            </div>
                            <div class="TechstackImage">
                                <img src={htmlImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={cssImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={jsImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={nodeImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={vsImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={githubImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={netlifyImg}alt=""/>
                            </div>
                        </div>
                        <div class="buttons">
                            <a target="_blank" href="https://github.com/TheSkyEr4998/Meanbuy_Clone">
                                <img src={github1Img}/>
                            </a>
                            <a target="_blank" href="https://papaya-syrniki-e61ae7.netlify.app/">
                                <img src={eyeImg}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="work">
                    <img src={Project2}alt=""/>
                    <div class="layer">
                        <h3>
                            Faballey Clone
                        </h3>
                        <p>
                            Faballey is an E-commerce platform for womens fashion where you can buy variety of products of top brandings.
                        </p>
                        <div class="techstacks">
                            <div class="used">
                                <p>Tech Stacks :</p>
                            </div>
                            <div class="TechstackImage">
                                <img src={htmlImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={cssImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={jsImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={nodeImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={vsImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={githubImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={netlifyImg}alt=""/>
                            </div>
                        </div>
                        <div class="buttons">
                            <a target="_blank" href="https://github.com/TheSkyEr4998/Faballey_Clone">
                            <img src={github1Img}/>
                            </a>
                            <a target="_blank" href="https://courageous-dasik-c6eb7e.netlify.app/">
                            <img src={eyeImg}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="work">
                    <img src={Project3}alt=""/>
                    <div class="layer">
                        <h3>
                            Aha Videos Clone
                        </h3>
                        <p>
                            Aha Videos is an South Indian OTT platform where only paid members can watch TV shows, movies and other related videos in selective south indian languages.
                        </p>
                        <div class="techstacks">
                            <div class="used">
                                <p>Tech Stacks :</p>
                            </div>
                            <div class="TechstackImage">
                                <img src={htmlImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={cssImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={jsImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={nodeImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={vsImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={githubImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={netlifyImg}alt=""/>
                            </div>
                        </div>
                        <div class="buttons">
                            <a target="_blank" href="https://github.com/TheSkyEr4998/ahaVideos_Clone">
                            <img src={github1Img}/>
                            </a>
                            <a target="_blank" href="https://moonlit-torte-890ac1.netlify.app/">
                            <img src={eyeImg}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="work">
                    <img src={Project4}alt=""/>
                    <div class="layer">
                        <h3>
                            Jiomart Clone
                        </h3>
                        <p>
                            Jiomart is a very popular E-commerce platform where you can buy variety of lifestyle products, groceries and many more in single platform.
                        </p>
                        <div class="techstacks">
                            <div class="used">
                                <p>Tech Stacks :</p>
                            </div>
                            <div class="TechstackImage">
                                <img src={htmlImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={cssImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={jsImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={nodeImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={vsImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={githubImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={netlifyImg}alt=""/>
                            </div>
                        </div>
                        <div class="buttons">
                            <a target="_blank" href="https://github.com/TheSkyEr4998/Jiomart_Clone">
                            <img src={github1Img}/>
                            </a>
                            <a target="_blank" href="https://github.com/TheSkyEr4998/Jiomart_Clone">
                            <img src={eyeImg}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="work">
                    <img src={Project5}alt=""/>
                    <div class="layer">
                        <h3>
                            Ideakart Clone
                        </h3>
                        <p>
                            Ideakart is a E-library platform to buy variety of books which is in collabration with amazon platform.
                        </p>
                        <div class="techstacks">
                            <div class="used">
                                <p>Tech Stacks :</p>
                            </div>
                            <div class="TechstackImage">
                                <img src={reactImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={cssImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={jsImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={nodeImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={vsImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={githubImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={netlifyImg}alt=""/>
                            </div>
                        </div>
                        <div class="buttons">
                            <a target="_blank" href="https://github.com/TheSkyEr4998/ideaKart_Clone">
                            <img src={github1Img}/>
                            </a>
                            <a target="_blank" href="https://ideakart-clone01.netlify.app/">
                            <img src={eyeImg}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Project;
{/* <FontAwesomeIcon src={faGithub}/> */}