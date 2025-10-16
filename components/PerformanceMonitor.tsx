"use client";

import { useEffect } from "react";

export const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "largest-contentful-paint") {
          console.log("LCP:", entry.startTime);
        }
        if (entry.entryType === "first-input") {
          console.log(
            "FID:",
            (entry as PerformanceEventTiming).processingStart - entry.startTime
          );
        }
        if (entry.entryType === "layout-shift") {
          console.log(
            "CLS:",
            (entry as PerformanceEntry & { value: number }).value
          );
        }
      }
    });

    observer.observe({
      entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"],
    });

    // Monitor FCP
    const paintObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === "first-contentful-paint") {
          console.log("FCP:", entry.startTime);
        }
      }
    });

    paintObserver.observe({ entryTypes: ["paint"] });

    return () => {
      observer.disconnect();
      paintObserver.disconnect();
    };
  }, []);

  return null;
};
