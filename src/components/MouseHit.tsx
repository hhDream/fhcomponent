import { FC, useEffect, useState, useContext } from 'react';
import { ThemeContext } from './../App';

const MouseClick: FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const style = useContext(ThemeContext)
    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('click', updateMouse)
        return () => {
            console.log('b')
        };
    }, []);
    return <div style={style}>
        X: {position.x}Y:{position.y}
    </div>
}

export default MouseClick