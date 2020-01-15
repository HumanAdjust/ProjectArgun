import React from 'react';
import './Main.css';

function MainPage() {
    const title='아 건';

    return (
        <>
        <div class="title">{title}</div>
        <div class="account">
            <a href="#">Login</a> | <a href="#">Sign Up</a> | <a href="#">My Page</a>
        </div>
        <br />
        <div class="main">
        </div>
        </>
    );
}

export default MainPage;