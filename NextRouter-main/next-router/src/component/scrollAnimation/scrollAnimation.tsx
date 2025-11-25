// components/HomeAnimations.tsx
'use client';

import { useEffect } from 'react';

export default function HomeAnimations() {
  useEffect(() => {
    console.log('HomeAnimations component mounted');
    
    const initScrollAnimations = () => {
      console.log('Initializing scroll animations...');
      
      const observer = new IntersectionObserver((entries) => {
        console.log('Intersection entries:', entries.length);
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('Element intersecting:', entry.target);
            setTimeout(() => {
              entry.target.classList.add('animated');
              console.log('Added animated class');
            }, 100);
          }
        });
      }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      const elements = document.querySelectorAll('.fade-in-up, .zoom-in, .slide-in-left, .slide-in-right');
      console.log('Elements found:', elements.length);
      
      elements.forEach(el => {
        console.log('Observing:', el);
        observer.observe(el);
      });

      return () => {
        console.log('Cleaning up observer...');
        elements.forEach(el => observer.unobserve(el));
      };
    };

    // اجرا با تاخیر
    const timer = setTimeout(initScrollAnimations, 300);

    // همچنین روی route change هم اجرا کن
    const handleRouteChange = () => {
      setTimeout(initScrollAnimations, 500);
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
}