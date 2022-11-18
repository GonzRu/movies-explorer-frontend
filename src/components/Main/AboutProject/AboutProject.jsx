import React from 'react';
import AboutProjectItem from './AboutProjectItem/AboutProjectItem';
import Durations from './Durations/Durations';
import './AboutProject.css';

const AboutProject = () => {
    return (
        <div className='aboutProject'>
            <h2 className='aboutProject__title'>О проекте</h2>
            <div className='aboutProject__delimiter'></div>
            <div className='aboutProject__wrapper'>
                <AboutProjectItem
                    title='Дипломный проект включал 5 этапов'
                    text='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'
                />
                <AboutProjectItem
                    title='На выполнение диплома ушло 5 недель'
                    text='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
                />
            </div>
            <Durations/>
        </div>
    );
};

export default AboutProject;
