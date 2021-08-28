import React from "react";
import "./Footer.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className="footer">
            <span className="name">
                Inshorts clone made by -{" "}
                <a href="https://www.linkedin.com/in/aman-silawat-9752b8115/" target="__blank">
                    Aman Silawat
                </a>
            </span>
            <hr style={{ width: "90%" }} />
            <div className="iconContainer">
                <a href="https://www.instagram.com/im.aman.silawat/" target="__blank">
                    <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/in/aman-silawat-9752b8115/" target="__blank">
                    <LinkedInIcon />
                </a>
                <a href="https://twitter.com/amansilawat" target="__blank">
                    <TwitterIcon />
                </a>
            </div>
        </div>
    );
};

export default Footer;