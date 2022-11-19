import React from 'react';
import './PageSection.css';

const PageSection = (props) => {

    const {
        title,
        children,
        accent,
        contentClasses
    } = props;

    const rootClasses = accent ? 'pageSection pageSection_accent' : 'pageSection';

    return (
        <div className={rootClasses}>
            <h2 className='pageSection__title'>{title}</h2>
            <div className='pageSection__delimiter'/>
            <div className={contentClasses}>
                {children}
            </div>
        </div>
    );
};

export default PageSection;
