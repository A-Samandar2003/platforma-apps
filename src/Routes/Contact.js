

import React, { Component } from 'react'
import '../scss/contact.scss'
class Contact extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="img-box">
                        <img src="https://static.wixstatic.com/media/bfdf85_bb32704cfdf641b78b2207124c945fc8.png/v1/fill/w_288,h_158,al_c,lg_1,q_85,enc_auto/bfdf85_bb32704cfdf641b78b2207124c945fc8.png" alt="" />
                    </div>
                    <div className="text">
                        <h2>
                            Свяжитесь мо мной
                        </h2>
                        <p>
                            info@mysite.com | Телефон: +7 (945) 000-00-00
                        </p>

                        <form action="">
                            <input type="text" placeholder='Name' />
                            <input type="emil" placeholder='email' />
                            <input type="number" placeholder='Telefon' />
                            <textarea name="commit" id="" cols="30" rows="10"></textarea>

                            <a href="#">Submit</a>
                        </form>
                        <p>© 2023 Олег Марков. Сайт создан на Wix.com.</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact
