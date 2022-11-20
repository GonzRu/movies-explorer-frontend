import React, {memo} from 'react';
import Input from '../Input/Input';
import './InputWithLabel.css';

const InputWithLabel = (props) => {

    const {
        id,
        label,
        value,
        onValueChanged,
        ...otherProps
    } = props;

    return (
        <div className='inputWithLabel'>
            <label
                className='inputWithLabel__label'
                id={id}
            >
                {label}
            </label>
            <Input
                value={value}
                onValueChanged={onValueChanged}
                {...otherProps}
            />
        </div>
    );
};

export default memo(InputWithLabel);
