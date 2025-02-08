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
                                <li><a href="#">certificate1</a></li>
                                <li><a href="#">certificate2</a></li>
                                <li><a href="#">certificate3</a></li>
                                <li><a href="#">certificate4</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-social">
                            <a href="https://x.com/KUNALSHARM59786" className="social-link">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/ks-iitjmu" className="social-link">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/ks-iitjmu" className="social-link">
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