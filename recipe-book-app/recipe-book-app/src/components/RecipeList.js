import React, { useState } from 'react';
import RecipeItem from './RecipeItem';
import AddRecipeForm from './AddRecipeForm';
import { CATEGORIES, FILTERS } from '../constants/categories';
import classNames from 'classnames';

function RecipeList() {
    
    const [recipes, setRecipe] = useState([
        {
            id: 1,
            category: 'maindish',
            name: '김치찌개',
            text: '김치 500g, 돼지고기 200g, 두부 1모, 대파 1대, 고춧가루 1큰술, 다진마늘 1큰술',
            method: '1. 냄비에 김치와 돼지고기를 볶습니다.\n 2. 물을 넣고 끓입니다.\n 3. 두부와 대파를 넣고 더 끓입니다.\n 4. 간을 맞추고 완성합니다.',
            time: 30,
            level: 'normal',
            important: false,
        },
        {
            id: 2,
            category: 'dessert',
            name: '초코칩 쿠키',
            text: '밀가루 200g, 설탕 100g, 버터 100g, 계란 1개, 초콜릿칩 100g, 베이킹소다 1작은술',
            method: '1. 버터와 설탕을 섞습니다.\n 2. 계란을 넣고 더 섞습니다.\n 3. 밀가루와 베이킹소다를 넣고 반죽합니다.\n 4. 초콜릿칩을 섞어 넣고 오븐에 굽습니다.',
            time:20,
            level: 'easy',
            important: true,
        },
        {
            id: 3,
            category: 'appetizer',
            name: '카프레제 샐러드',
            text: '토마토 2개, 모짜렐라 치즈 200g, 바질 및 10장, 올리브오일 2큰술, 발사믹 식초 1큰술, 소금, 후추',
            method : '1. 토마토와 모짜렐라 치즈를 슬라이스합니다.\n 2. 접시에 토마토와 치즈를 번갈아 배치합니다.\n 3. 바질 잎을 올리고 올리브오일과 발사믹 식초를 뿌립니다.\n 4. 소금과 후추로 간을 합니다.',
            time:10,
            level: 'easy',
            important: false,
        },
    ]);

    const [selectedCategory, setSelectedCategory] = useState('maindish');

    //레시피 추가
    const addRecipe = ( {name, text, method, time, level} ) => {
        const newRecipe = {
            id: Date.now(),
            name: name,
            text: text,
            method: method,
            level: level,
            time: time,
            important: false,
            category: selectedCategory,
        };
        setRecipe([...recipes, newRecipe]);
    };

    //레시피 삭제
    const deleteRecipe = (id, e) => {
        e.stopPropagation();
        setRecipe(recipes.filter((recipe) => recipe.id !== id));
    };

    const [filter, setFilter] = useState('all');

    const filteredRecipe = recipes.filter((recipe) => {
        if (filter === 'all') return true;
        else if (filter === 'important') return recipe.important;
        else return recipe.level === filter;
    });
    
    //카테고리선택
    const handleSelectedCategory= (id) => {
        setSelectedCategory(id);
    }

    //즐겨찾기
    const toggleFavoriate = (id) => {
        setRecipe(
            recipes.map((recipe) =>
                recipe.id === id ? { ...recipe, important: !recipe.important } : recipe
            )
        );
    };

    return (
        <div className="container">
            <div className="recipe-content">
                <div className="recipe-header">
                    <h3>레시피 목록</h3>
                </div>
                <div className="category-selector">
                    {CATEGORIES.map((category) => (
                    <button
                        key={category.id}
                        className={`category-btn ${
                            selectedCategory === category.id ? 'selected' : ''
                        }`}
                        onClick={() => handleSelectedCategory(category.id)}
                    >   
                        {category.icon}
                        <span>{category.name}</span>
                    </button>
                    ))}
                </div>
                <AddRecipeForm onAdd={addRecipe} />
                <div className="filters">
                    {FILTERS.map((filterType) => (
                        <button
                            key={filterType}
                            className={classNames({ active: filter === filterType })}
                            onClick={() => setFilter(filterType)}
                        >
                            {
                                filterType === 'all' ? '전체' : 
                                filterType === 'important' ? '즐겨찾기' : 
                                filterType === 'easy' ? '쉬움' : 
                                filterType === 'normal' ? '보통' : '어려움'

                            }
                        </button>
                    ))}
                </div>


                <ul className="recipe-list">
                {filteredRecipe.map((recipe) => (
                    <RecipeItem
                        key={recipe.id}
                        recipe={recipe}
                        onDelete={deleteRecipe}
                        onImportant={toggleFavoriate}
                    />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RecipeList;