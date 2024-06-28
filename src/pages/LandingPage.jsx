import React, { useEffect } from 'react';
import BackgroundImages from '../components/BackgroundImages';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Overview from '../components/Overview';
import HowToGetStarted from '../components/HowToGetStarted';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import '../App.css';

function LandingPage() {
    useEffect(() => {
        // Trigger page load animations
        document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-down, .fade-in-up').forEach(el => {
            el.classList.add('opacity-100');
        });

        // Observer for scroll animations
        const observerOptions = {
            threshold: 0.1
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        document.querySelectorAll('.fade-in-scroll, .fade-in-left-scroll, .fade-in-right-scroll, .fade-in-down-scroll, .fade-in-up-scroll').forEach(el => {
            observer.observe(el);
        });

        // Clean up function (optional, but recommended)
        return () => {
            // Disconnect the observer to prevent memory leaks
            observer.disconnect();
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <>
            <BackgroundImages />
            <Header />
            <main className="backdrop-blur-lg bg-gray-900 bg-opacity-10 flex flex-col gap-10 h-auto items-center justify-center pb-40 w-screen">
                <Hero />
                <Features />
                <Overview />
                <HowToGetStarted />
                <CTA />
            </main>
            <Footer />
        </>
    );
}

export default LandingPage;
