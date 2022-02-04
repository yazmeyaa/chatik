import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
    return(
        <>
            <div>Привет!</div>
            <Link to='/auth'>Авторизация!</Link>
        </>
        );
}
