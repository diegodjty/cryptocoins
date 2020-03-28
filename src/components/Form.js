import React from 'react'
import styled from '@emotion/styled'

import useCoin from '../hooks/useCoin'
import useCryptoCoin from '../hooks/useCryptoCoin'

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover{
        background-color:#326AC0;
        cursor: pointer
    }
`;

const Form = () => {

    const COINS = [
        {code: 'USD', name: 'US dollar'},
        {code: 'MXN', name: 'Mexican Pesos'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'pound'},
    ]

    const [coin, Select,] = useCoin('Choose a coin','',COINS);
    const [cryptocoin, SelectCripto] = useCryptoCoin('Choose your crypto coin','')
    return (
        <form>
            <Select/>
            <SelectCripto />
            <Button 
                type="submit"
                value="Calculate"
            />
        </form>
    )
}

export default Form
