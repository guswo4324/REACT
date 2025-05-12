import React from "react";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaBirthdayCake, FaCarrot, FaWineGlass } from 'react-icons/fa';

import maindishBg from '../images/backgrounds/main-dish-bg.png'
import dessertBg from '../images/backgrounds/dessert-bg.png'
import appetizerBg from '../images/backgrounds/appetizer-bg.png'
import drinkBg from '../images/backgrounds/drink-bg.png'

export const CATEGORIES = [
    { id: 'maindish', name: '메인요리', icon: <PiForkKnifeFill /> },
    { id: 'dessert', name: '디저트', icon: <FaBirthdayCake /> },
    { id: 'appetizer', name: '에피타이저', icon: <FaCarrot /> },
    { id: 'drink', name: '음료', icon: <FaWineGlass /> },
];

export const BACKGROUND_IMAGES = {
    maindish: maindishBg,
    dessert: dessertBg,
    appetizer: appetizerBg,
    drink: drinkBg,
}

export const FILTERS = ['all', 'important', 'easy', 'normal', 'hard'];


