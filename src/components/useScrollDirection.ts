import { useState, useEffect } from 'react';

const useScrollDirection = (defaultScroll: "down" | "up" | null, minScrollPixels = 20) => {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(defaultScroll);
  const [lastScrollY, setLastScrollY] = useState(0);

  const updateScrollDirection = () => {
    const scrollY = window.pageYOffset;
    // Set a threshold for when to update the direction (e.g., 10px) to prevent
    // frequent, jittery updates with minor scrolls.
    if (Math.abs(scrollY - lastScrollY) > minScrollPixels) { 
        setScrollDirection(scrollY > lastScrollY ? "down" : "up");
        setLastScrollY(scrollY);
    }
  };

  useEffect(() => {
    // Add event listener
    window.addEventListener("scroll", updateScrollDirection); 

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [lastScrollY]); // Add lastScrollY as a dependency to access its current value in updateScrollDirection

  return scrollDirection;
};

export default useScrollDirection;