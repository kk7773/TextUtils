import React from 'react'
import { Link } from "react-router-dom";
import facebook from '../img/social_media/facebook.png';
import Instagram from '../img/social_media/Instagram.png';
import youtube from '../img/social_media/youtube.png';
import Github from '../img/social_media/Github.png';
import LinkedIn from '../img/social_media/LinkedIn.png';


export default function Footer(props) {
    return (
        <>
            <footer className={`bg-${props.mode} pt-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div className="container d-sm-flex gap-4">
                    <div className="col" style={{ height: "230px" }}>
                        <h5>Contact Us</h5>
                        <hr style={{ borderTop: "1.5px solid" }} />
                        <p>Address - Bhopal</p>
                        <p><i className="bi bi-telephone" style={{ color: "#00BFFF" }}></i><a href="tel:9128357773" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}> +91 9128357773</a></p>
                        <p><i className="bi bi-whatsapp" style={{ color: "#00BFFF" }}></i><a href="https://wa.me/919128357773" target="Blank" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}> +91 9128357773</a></p>
                        <p><i className="bi bi-envelope" style={{ color: "#00BFFF" }}></i><a href="mailto:krishankumarsvg@gmail.com" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}> krishankumarsvg@gmail.com</a></p>
                        <p> </p>
                    </div>
                    <div className="col">
                        <h5>Social Media</h5>
                        <hr style={{ borderTop: "1.5px solid" }} />
                        <div className="d-flex justify-content-start my-4 social-media">
                            <div className='mt-1'><Link to="/"><img src={youtube} alt="" width="35" /></Link></div>
                            <div><a href="https://www.facebook.com/krishan.kumarraj.587" target="_blank"><img src={facebook} alt="" width="35" /></a></div>
                            <div><a href="https://www.instagram.com/krishan_kumar_01/" target="_blank"><img src={Instagram} alt="" width="35" /></a></div>
                            <div><a href="https://github.com/kk7773" target="_blank"><img src={Github} alt="" width="35" /></a></div>
                            <div><a href="https://www.linkedin.com/in/krishan-kumar-961290219" target="_blank"><img src={LinkedIn} alt="" width="35" /></a></div>
                        </div>
                    </div>

                    <div className="col">
                        <h5>Menu</h5>
                        <hr style={{ borderTop: "1.5px solid" }} />
                        <p><Link to="/" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>Home</Link></p>
                        <p><Link to="/about" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>About Us</Link></p>
                        {/* <p><Link to="/" className={`text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>Contact Us</Link></p> */}
                    </div>
                </div>
                <div className="bg-secondary bg-dark text-white text-center p-2">
                    copyright TextUtils·com All right resverd (Developed By Krishan Kumar)
                </div>

            </footer>
        </>
    )
}
