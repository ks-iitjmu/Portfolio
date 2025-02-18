import { Twitter, Linkedin, Github } from 'lucide-react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-sections">
                        <div className="footer-section">
                            <h3 className="footer-title">Projects</h3>
                            <ul className="footer-list">
                                <li><a href="#">Project 1</a></li>
                                <li><a href="#">Project 2</a></li>
                                <li><a href="#">Project 3</a></li>
                                <li><a href="#">Project 4</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h3 className="footer-title">Profiles</h3>
                            <ul className="footer-list">
                                <li><a href="https://leetcode.com/u/ks_iitjmu/" target='0'>LeetCode</a></li>
                                <li><a href="https://codeforces.com/profile/kunal.iit.jmu" target='0'>Codeforces</a></li>
                                <li><a href="https://www.hackerrank.com/profile/2023uma0221" target='0'>Hackerrank</a></li>
                                <li><a href="https://www.geeksforgeeks.org/user/2023umilt8/" target='0'>Geeks for Geeks</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h3 className="footer-title">Certifications</h3>
                            <ul className="footer-list">
                                <li><a href="https://drive.google.com/file/d/1TiizMD-67iJVow7jYRpKy6z4dzK84uO_/view?usp=drive_link" target='_blank'>Data Associate</a></li>
                                <li><a href="https://drive.google.com/file/d/19kBZyh-PoApPZem98hYVUr2h9RVqgfuG/view?usp=sharing" target='_blank'>Numpy</a></li>
                                <li><a href="https://drive.google.com/file/d/1Tt5mScjs6xqNAPQRBVFnOAk7VGw5l3pX/view?usp=drive_link" target='_blank'>Pandas</a></li>
                                <li><a href="https://drive.google.com/file/d/1zYY3DJnbTg2wtmmfTPEY1dBySFTYIj2v/view?usp=sharing" target='_blank'>Matplotlib</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-social">
                            <a href="https://x.com/KUNALSHARM59786" target='_blank' className="social-link">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/ks-iitjmu" target='_blank' className="social-link">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/ks-iitjmu" target='_blank' className="social-link">
                                <Github size={20} />
                            </a>
                        </div>
                        <div className="footer-legal">
                            <span className="copyright">© 2025 Kunal Sharma. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;