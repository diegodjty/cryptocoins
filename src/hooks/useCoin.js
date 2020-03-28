import React,{Fragment, useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block; 
`;

const SelectINP = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCoin = (label,initialState,options) => {

    const [state, updateState] = useState(initialState);
    const Select = () => (
        <Fragment>
            <Label>{label}</Label> 
            <SelectINP
                onChange={ e => updateState(e.target.value)}
                value={state}
            >
            <option value=''>-- Select an option --</option>
                {options.map(option=>(
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </SelectINP>
        </Fragment>
    );

    return [state, Select, updateState];
    
}

export default useCoin;
