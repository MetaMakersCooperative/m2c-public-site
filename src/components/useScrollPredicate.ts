import { useState, useEffect } from 'react';

const useScrollPredicate = (predicate: (scrollY:number) => boolean, defaultValue = false, minScrollPixels = 20) => {
  const [predicateResult, setPredicateResult] = useState(defaultValue);
  const [lastScrollY, setLastScrollY] = useState(0);

  const updateScrollDirection = () => {
    const scrollY = window.pageYOffset;
    // Set a threshold for when to update the direction (e.g., 10px) to prevent
    // frequent, jittery updates with minor scrolls.
    if (Math.abs(scrollY - lastScrollY) > minScrollPixels) { 
        setPredicateResult(predicate(scrollY));
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

  return predicateResult;
};

export default useScrollPredicate;