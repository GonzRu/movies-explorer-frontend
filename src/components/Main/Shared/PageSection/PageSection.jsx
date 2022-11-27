import React from 'react';
import './PageSection.css';
import classNames from 'classnames';

const PageSection = (props) => {

    const {
        title,
        children,
        accent,
        className,
        contentClasses,
        titleClasses,
    } = props;

    return (
        <div className={classNames(
            'pageSection',
            className,
            accent && 'pageSection_accent'
        )}>
            <h2 className={classNames(
                'pageSection__title',
                titleClasses
            )}
            >
                {title}
            </h2>
            <div className='pageSection__delimiter'/>
            <div className={contentClasses}>
                {children}
            </div>
        </div>
    );
};

export default PageSection;
