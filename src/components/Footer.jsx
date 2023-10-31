import React from 'react';
import { useEffect, useState } from 'react';
import CountUp from "react-countup";


const Footer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);
    return (
        <div>
            <footer>
                <div class="footer-section">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="count1">
                                <h2 class="count-heading"> <CountUp end={97} /></h2>
                                <span class="count-span">%</span>
                                <p class="sub-heading mt-2">Successful operations</p>

                            </div>
                            <div class="count2">
                                <h2 class="count-heading mt-5"> <CountUp end={3000} /></h2>
                                <span class="count-span">+</span>
                                <p class="sub-heading mt-2">Certified Doctors</p>

                            </div>
                            <div class="count3">
                                <h2 class="count-heading mt-5">  <CountUp end={8} /></h2>
                                <p class="sub-heading mt-2">Hospitals</p>

                            </div>
                            <div class="count4">
                                <h2 class="count-heading mt-5">  <CountUp end={650} /></h2>
                                <p class="sub-heading mt-2">Trainees</p>

                            </div>
                        </div>

                        <div class="col-lg-4">
                            <h3 class="text-white heading-section" >FIND US ON</h3>
                            <div class="tweet mt-4"><i class="fa-brands fa-twitter"></i></div>
                            <div class="tweet mt-4"><i class="fa-brands fa-whatsapp"></i></div>
                            <div class="tweet mt-4"><i class="fa-brands fa-facebook"></i></div>

                        </div>
                        <div class="col-lg-5">
                            <h4 class="text-white heading-section">ABOUT US</h4>
                            <p class="sub-heading mt-3">Since 1990, our college provides students with high-quality professional
                                education. Together with us,
                                you will have deeper knowledge of the subjects important for your future profession.</p>
                            <h4 class="text-white heading-section mt-5">NEWSLETTER</h4>
                            <p class="sub-heading mt-3">Keep up with our weekly news and updates on education. Enter your e-mail
                                and
                                subscribe to our
                                newsletter.
                            </p>
                            <div class="mail">
                                <div class="e-mail">
                                    <input type="text" placeholder="Enter your e-mail" />
                                </div>
                                <div class="mail-btn">
                                    <i class="fa-solid fa-envelope"></i>

                                </div>
                            </div>
                        </div>
                        <div class="copyright mt-5">
                            <div class="copyright-left text-muted">©2023 All Rights Reserved. Terms of Use and Privacy Policy.
                            </div>
                            <div class="copyright-right text-muted">Designed by Riya.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer