import React, { useReducer } from 'react';
import AgeContext from './ageContext';
import ageReducer from './ageReducer';
import {
    AGE_VERIFIED
} from '../types';

const AgeState = props => {
    const initialState = {
        ageVerified: null
    };

    const [state, dispatch] = useReducer(ageReducer, initialState)


    //isAgeVerified
    const isAgeVerified = () => dispatch({ type: AGE_VERIFIED})

    return (
        <AgeContext.Provider
            value={{
                ageVerified: state.ageVerified,
                isAgeVerified
            }}
        >
            {props.children}
        </AgeContext.Provider>
    )
}

export default AgeState;