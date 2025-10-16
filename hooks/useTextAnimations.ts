import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useTextAnimations = () => {
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  const addTextRef = (el: HTMLDivElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    const animateText = (element: HTMLDivElement) => {
      // Check if already animated (has spans)
      if (element.querySelector("span")) {
        // Make sure existing spans are visible
        const existingSpans = element.querySelectorAll("span");
        gsap.set(existingSpans, { opacity: 1, y: 0 });
        return;
      }

      const text = element.textContent || "";
      const words = text.split(" ");

      // Clear the element
      element.innerHTML = "";

      // Create spans for each word
      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(100px)";
        span.style.marginRight = "0.25em"; // Add space between words
        element.appendChild(span);
      });

      // Animate each word with ScrollTrigger
      const wordSpans = element.querySelectorAll("span");
      gsap.to(wordSpans, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.15,
        delay: 0.2,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    };

    // Animate all text elements
    textRefs.current.forEach((element) => {
      if (element) {
        animateText(element);
      }
    });

    return () => {
      textRefs.current = [];
    };
  }, []);

  return { addTextRef };
};
