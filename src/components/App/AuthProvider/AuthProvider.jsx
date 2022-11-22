import React, {useState} from 'react';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

    return (
        <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
            {children}
        </CurrentUserContext.Provider>
    );
};

export default AuthProvider;
