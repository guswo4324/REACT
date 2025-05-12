import React from 'react';
import classNames from 'classnames';
import { CATEGORIES, BACKGROUND_IMAGES } from '../constants/categories';

function RecipeItem({ recipe, onDelete, onImportant }) {

    const getMainColor = (id) => {
        // console.log(`level:${level}`);
        switch (id) {
        case 'maindish':
            return '#ff5252';
        case 'dessert':
            return '#ffb74d';
        case 'appetizer':
            return '#81c784';
        default:
            return '#ffb74d';
        }
    };

    const getLevelColor = (level) => {

        switch (level) {
        case 'hard':
            return '#e74c3c';
        case 'normal':
            return '#f39c12';
        case 'easy':
            return '#2ecc71';
        default:
            return '#ffb74d';
        }
    };


    const handleImportantChange = (id, e) => {
        e.stopPropagation();
        onImportant(id);
    };

    const getCategoryId = (categoryId) => {
        return (
            CATEGORIES.find((category) => category.id === categoryId) || CATEGORIES[0]
        );
    };

    const curCategory = getCategoryId(recipe.category);


    // 배경 이미지 스타일
    const backgroundStyle = {
        backgroundImage:`url(${BACKGROUND_IMAGES[recipe.category]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        opacity: '0.9'
    };
    
    // 배경 오버레이 스타일
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        zIndex: 1,
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 2,
    };

    return (
        <div 
            className="recipe-item"
            style={ backgroundStyle || overlayStyle || contentStyle}    
        >
            <div className="recipe-content">
                <div className="recipe-header">
                    <h3>{curCategory.icon} {recipe.name}</h3>
                    
                    <button
                        className={classNames('favorite-btn', { active: recipe.important })}
                        onClick={(e) => handleImportantChange(recipe.id, e)}
                    >
                        ★
                    </button>
                </div>  
                <div className="recipe-info">
                    <span
                        className="category-label"
                        style={{ backgroundColor: getMainColor(recipe.category)}}
                    >   
                        {
                            recipe.category === 'maindish'
                            ? '메인요리'
                            : recipe.category === 'dessert'
                            ? '디저트'
                            : recipe.category === 'appetizer'
                            ? '에피타이저'
                            : '음료'
                        }

                    </span>
                    <span
                        className="difficulty-badge"
                        style={{ backgroundColor: getLevelColor(recipe.level) }}
                    >
                        {
                            recipe.level === 'hard'
                            ? '어려움'
                            : recipe.level === 'normal'
                            ? '보통'
                            : '쉬움'
                        }
                    </span>
                    <span
                        className="cooking-time"
                    >
                        {recipe.time}
                    </span>
                </div>
                <div className="recipe-section">
                    <h4>재료</h4>
                    <p>{recipe.text}</p>
                    <h4>조리 방법</h4>
                    <p>{recipe.method}</p>
                </div>

                <div className="recipe-actions">
                    <button className="delete-btn" onClick={(e) => onDelete(recipe.id, e)}>
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RecipeItem;
