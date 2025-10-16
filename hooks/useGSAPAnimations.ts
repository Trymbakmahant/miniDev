import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const leaderboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      try {
        // Hero section animations
        if (heroRef.current) {
          // Reset initial position to ensure proper centering
          gsap.set(heroRef.current, { yPercent: 0 });

          // Animate floating elements
          gsap.to(".hero-float-1", {
            y: -20,
            rotation: -10,
            duration: 3,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
          });

          gsap.to(".hero-float-2", {
            y: -15,
            rotation: 10,
            duration: 4,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
            delay: 0.5,
          });

          // Animate hero content
          gsap.from(".hero-content", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          });

          gsap.from(".hero-title", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2,
          });

          gsap.from(".hero-subtitle", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.4,
          });

          gsap.from(".hero-form", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.6,
          });

          gsap.from(".hero-chips", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            delay: 0.8,
          });
        }

        // How It Works section animations
        if (howItWorksRef.current) {
          gsap.to(".how-it-works-float", {
            y: -25,
            rotation: -43,
            duration: 5,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
          });

          // How It Works content scroll animations
          gsap.from(".how-it-works-content", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: howItWorksRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          });

          gsap.from(".how-it-works-title", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".how-it-works-title",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          });

          gsap.from(".how-it-works-cards", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".how-it-works-cards",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          });

          // Animate step cards individually
          gsap.from(".step-card", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".how-it-works-cards",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }

        // Leaderboard section animations
        if (leaderboardRef.current) {
          gsap.to(".leaderboard-float", {
            y: -20,
            rotation: 47,
            duration: 4,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
          });

          // Leaderboard content scroll animations
          gsap.from(".leaderboard-content", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leaderboardRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          });

          gsap.from(".leaderboard-title", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".leaderboard-title",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          });

          gsap.from(".leaderboard-table", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".leaderboard-table",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          });

          gsap.from(".table-row", {
            x: -20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".table-row",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          });
        }

        // Navbar animation
        gsap.from(".navbar", {
          y: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        // Footer animation
        gsap.from(".footer", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      } catch (error) {
        console.log("GSAP animation error:", error);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return {
    heroRef,
    howItWorksRef,
    leaderboardRef,
  };
};
