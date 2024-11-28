import { useState, useEffect } from 'react';

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    return mousePosition;
}
