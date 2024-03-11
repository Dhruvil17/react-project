import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="lists-container">
                <div className="list-item">About Us</div>
                <div className="list-item">Useful Reads</div>
                <div className="list-item">Connect with Us</div>
                <div className="list-item">Download App</div>
            </div>
            <div className="copyright">
                (©) Copyright 2024. All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;
