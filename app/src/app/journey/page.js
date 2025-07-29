'use client';

import Application from "@/components/applixation/Application";
import { useEffect } from "react";

export default function Journey () {

    useEffect(() => {
        // Hide header and footer when component mounts
        const header = document.getElementById('header');
        const footer = document.getElementById('footer');
        
        if (header) header.style.display = 'none';
        if (footer) footer.style.display = 'none';
        
        // Show them back when component unmounts
        return () => {
            if (header) header.style.display = '';
            if (footer) footer.style.display = '';
        };
    }, []);

    return (
        <div>
           <Application />
           
            <section id="journey-cta">
                <div className="container">
                    <div className="journey-cta-intro" style={{marginBottom:'40px'}}>
                        <h2 className="primary-heading text-center">Your Dream Home is Just a Click Away!</h2>
                        <p style={{width:'100%',maxWidth:'600px', margin:'20px auto 0 auto'}} className="text text-center">Take the next step toward homeownership with confidence. Our mortgage specialists will guide you through every detail and ensure you get the best financing option in Dubai.</p>
                    </div>
                    <div className="row g-3">
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="buy-card" style={{padding:'15px', minHeight:'80px'}}>
                                    <h3 className="text"><strong>✅ Lowest Mortgage Rates</strong></h3>
                                    <ul>
                                        <li className="text-sm">Access the most competitive rates in the UAE.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="buy-card" style={{padding:'15px', minHeight:'80px'}}>
                                    <h3 className="text"><strong>✅ Quick & Hassle-Free Process</strong></h3>
                                    <ul>
                                        <li className="text-sm">Get pre-approval faster with our experts.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <div className="buy-card" style={{padding:'15px', minHeight:'80px'}}>
                                    <h3 className="text"><strong>✅ Tailored Mortgage Solutions</strong></h3>
                                    <ul>
                                        <li className="text-sm">Personalized options for residents & non-residents.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3" >
                                <div className="buy-card" style={{padding:'15px', minHeight:'80px'}}>
                                    <h3 className="text"><strong>✅ Trusted Mortgage Advisors</strong></h3>
                                    <ul>
                                        <li className="text-sm">Decades of experience in UAE home financing.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    )
}