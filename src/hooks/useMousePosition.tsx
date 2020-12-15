import { useEffect, useState } from 'react';

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('mousemove', updateMouse)
        return () => {
            console.log('b')
        };
    }, []);
    return position
}

export default useMousePosition