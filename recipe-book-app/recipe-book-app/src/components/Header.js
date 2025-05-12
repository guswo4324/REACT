import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header className="header">
            <h1>RecipeBook</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> 홈 </Link>
                        <Link to="/recipeList"> 레시피 목록 </Link>
                        <Link to="/about"> 소개 </Link>
                    </li>
                </ul>
            </nav>
      </header>
    )
}

export default Header;