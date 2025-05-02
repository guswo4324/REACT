import React from "react";
import { FaHome, FaBriefcase, FaRunning, FaUser } from 'react-icons/fa';
import generalBg from '../images/backgrounds/general-bg.png'
import workBg from '../images/backgrounds/general-bg.png'
import exerciseBg from '../images/backgrounds/general-bg.png'
import personalBg from '../images/backgrounds/general-bg.png'

//다른데서도 가져다 쓸수있게 하는 기능(export : 내보내기)
export const CATEGORIES = [
    { id: 'general', name: '일반', icon: <FaHome /> },
    { id: 'work', name: '업무', icon: <FaBriefcase /> },
    { id: 'exercise', name: '운동', icon: <FaRunning /> },
    { id: 'personal', name: '개인', icon: <FaUser /> },
];

export const BACKGROUND_IMAGES = {
    general: generalBg,
    work: workBg,
    exercise: exerciseBg,
    personal:personalBg,
}

