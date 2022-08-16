
import React from "react";

function About() {
    return (
        <div className="container">

            <div className="img-block">
                <img className="pos-img" src="https://static.wixstatic.com/media/bfdf85_f840a5e6be20475e84e239a74834d295.jpg/v1/fill/w_399,h_399,al_c,lg_1,q_80,enc_auto/bfdf85_f840a5e6be20475e84e239a74834d295.jpg" alt="" />
                <img src="https://static.wixstatic.com/media/bfdf85_d9cb3c7fe4914e0cb7351cc01aa3c0fe.png/v1/fill/w_552,h_552,al_c,lg_1,q_85,enc_auto/bfdf85_d9cb3c7fe4914e0cb7351cc01aa3c0fe.png" alt="" />
            </div>
            <div className="text">
                <h2>Обо мне</h2>
                <p>Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Чтобы удалить этот текст, нажмите один раз и выберите значок «Корзина».

                </p>
            </div>
            <footer>
                <p>© 2023 Олег Марков. Сайт создан на Wix.com.</p>
            </footer>
        </div>

    )
}


export default About;