import React from 'react';
import './Link.css'

const Link = (props) => {

    const {
        link,
        children,
        className
    } = props;

    const rootClasses = className ? `link ${className}` : 'link';

    return (
        <a
            className={rootClasses}
            href={link}
        >
            {children}
        </a>
    );
};

export default Link;
