import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound">
            <p>
                Страница не найдена, ошибка 404.
            </p>
            <p>
                Вернуться на главную 
            </p>
            <p>
                <Link to={'/'}>
                    Home
                </Link>
            </p>
        </div>
    );
};

export default NotFound;