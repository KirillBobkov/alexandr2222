import { useEffect, useState } from 'react';
import styles from './CursorShadow.module.css';

const CursorShadow = () => {
    // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    // const [shadowPosition, setShadowPosition] = useState({ x: 0, y: 0 });

    // useEffect(() => {
    //     const handleMouseMove = (event) => {
    //         // Используем pageX и pageY для учета прокрутки
    //         setCursorPosition({ x: event.pageX, y: event.pageY });
    //     };

    //     window.addEventListener('mousemove', handleMouseMove);
    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);

    // useEffect(() => {
    //     const updateShadowPosition = () => {
    //         setShadowPosition((prev) => {
    //             const newX = prev.x + (cursorPosition.x - prev.x) * 0.3; // 0.1 - скорость "подползания"
    //             const newY = prev.y + (cursorPosition.y - prev.y) * 0.3;
    //             return { x: newX, y: newY };
    //         });
    //         requestAnimationFrame(updateShadowPosition);
    //     };

    //     requestAnimationFrame(updateShadowPosition);
    // }, [cursorPosition]);

    return (null
    );
};

export default CursorShadow;