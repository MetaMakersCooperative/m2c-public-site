import { useState, useEffect } from 'react';

export interface ScrollY {
  scrollYDirection: Direction;
  scrollYPosition: number;
}
export type Direction = "down" | "up";

const useScrollY = (initialDirection?: Direction, initialPosition = 0, minScrollPixels = 20) => {
  const [direction, setDirection] = useState<Direction | undefined>(initialDirection);
  const [position, setPosition] = useState(initialPosition);

  const updateDirection = () => {
    const scrollY = window.pageYOffset;
    // Set a threshold for when to update the direction (e.g., 10px) to prevent
    // frequent, jittery updates with minor scrolls.
    if (Math.abs(scrollY - position) > minScrollPixels) { 
        setDirection(scrollY > position ? "down" : "up");
        setPosition(scrollY);
    }
  };

  useEffect(() => {
    // Add event listener
    window.addEventListener("scroll", updateDirection); 

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", updateDirection);
    };
  }, [position]); // Add position as a dependency to access its current value in updatedirection

  return {scrollYDirection:direction, scrollYPosition: position};
};

export default useScrollY;