import styled from 'styled-components'

const fluidTypography = (vMin, vMax, fMax, fMin) => {
    return `calc( ( 100vw - ${vMin}px ) / ( ${vMax} - ${vMin} ) * ( ${fMax} - ${fMin} ) + ${fMin}px )`
}


export const Background = styled.div`
    &{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background-color: #212121;
        color: white;
    }
`

export const LoginWindow = styled.div`
    &{
        padding: .5rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid yellowgreen;
        width: max-content;
        min-width: 300px;
        box-shadow: 0px 0px 15px yellowgreen;
        transition: 0.5s;
    }
    & > * {
        margin-top: .5rem;
    }
`

export const Text = styled.span`
    &{
        text-transform: uppercase;
        user-select: none;
        font-weight: 500;
        font-size:  ${props => {return props.textSize ? fluidTypography(320, 1920, props.textSize.min, props.textSize.max) : '16px' }};
    }
`

export const UsernameArea = styled.input`
    &{
        min-width: 290px;
        color: white;
        box-sizing: border-box;
        font-size: ${fluidTypography(320, 1920, 12, 22)};
        padding: 0.5rem 1rem;
        border: ${props => {return props.error ? '2px solid red' : '2px solid #58751b'}};
        box-shadow: ${props => {return props.error ? '0px 0px 10px red' : 'none'}};
        background-color: ${props => {return props.error ? '#2b090c' : '#131a06'}};
        border-radius: 12px;
        opacity: 1;
        transition: 0.3s ease;
    }
    &::placeholder{
        //20px
        //28px
        font-size: ${fluidTypography(320, 1920, 20, 28)};
        text-align: center;
        text-transform: uppercase;
        color: #404040;
    }
    &:focus{
        outline: none;
        border-color: yellowgreen;
        box-shadow: 0px 0px 10px yellowgreen;
        
    }
    &:focus::placeholder{
        transition: opacity 0.3s ease;
        opacity: 0;
    }
    &:-webkit-autofill{
        background-color: transparent;
    }
    
    `

export const LoginButton = styled.button`
    &{
        width: fit-content;
        color: #58751b;
        background: #131a06;
        text-transform: uppercase;
        font-weight: 800;
        border: 2px solid #58751b;
        margin: 12px 0px ;
        padding: 0.5rem 1rem;
        transition: .3s;
        border-radius: 12px;
    }
    &:hover, &:focus{
        background-color: yellowgreen;
        border-color: yellowgreen;
        box-shadow: 0px 0px 15px yellowgreen;
        color: black;
        outline: none;
        cursor: pointer;
    }
    &:disabled{
        background-color: gray;
        border: darkgray;
        cursor: default;
        box-shadow: none;
        color: black;
    }
`

export const RememberMe = styled.label`
    &{
        font-size: 1.2em;
        font-weight: normal;
        display: flex;
        align-items: center;
        margin-left: 0px;
        align-self: flex-start;
    }

    &>input{
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    &>span::before{
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        border: 1px solid white;
        margin-right: 6px;
    }

    &>input:checked + span::before {
        background-color: blue;
    }

    &>span{
        display: inline-flex;
        align-items: center;
        user-select: none;
        text-transform: uppercase;
    }
`

export const LinkedText = styled.span`
    &{
        color: snow;
        text-decoration: underline;
        cursor: pointer;
        user-select: none;
    }
    &:hover{
        text-decoration: none;
    }
    `

    export const AuthForm = styled.form`
        &{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(1fr);
            grid-gap: 1rem;
        }
    `