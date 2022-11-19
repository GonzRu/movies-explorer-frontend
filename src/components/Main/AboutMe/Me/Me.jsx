import React from 'react';
import foto from '../../../../images/foto.png';
import './Me.css';

const Me = () => {
    return (
        <div className='me'>
            <div className='me__aboutWrapper'>
                <h3 className='me__title'>Денис</h3>
                <p className='me__announce'>Фронтенд-разработчик, 30 лет</p>
                <p className='me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <a className='me__github' href='https://github.com' about='_blank'>Github</a>
            </div>
            <img className='me__image' src={foto} alt='Фотография студента'/>
        </div>
    );
};

export default Me;
