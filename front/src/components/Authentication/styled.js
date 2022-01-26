import styled from 'styled-components'

const fluidTypography = (vMin, vMax, fMin, fMax) => {
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
    }
    & > * {
        margin-top: .5rem;
    }
`

export const Text = styled.span`
    &{
        text-transform: uppercase;
        font-weight: 800;
        
        font-size: ${fluidTypography(320, 1920, 30, 22)};
    }
`

export const UsernameArea = styled.input`
    &{
        color: white;
        box-sizing: border-box;
        font-size: ${fluidTypography(320, 1920, 22, 12)};
        padding: 5px 10px;
        border: 2px solid #58751b;
        background-color: #131a06;
        border-radius: 12px;
        opacity: 1;
        transition: 0.3s ease;
    }
    &::placeholder{
        text-align: center;
        text-transform: uppercase;
        color: #404040;
    }
    &:focus{
        outline: none;
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
        cursor: pointer;
        background: #131a06;
        text-transform: uppercase;
        font-weight: 800;
        border: 2px solid #58751b;
        margin: 12px 0px ;
        padding: 0.5rem 1rem;
        transition: .3s;
        border-radius: 12px;
    }
    &:hover{
        background-color: yellowgreen;
        border-color: yellowgreen;
        box-shadow: 0px 0px 15px yellowgreen;
        color: black;
    }
`

export const RememberMe = styled.div`
    &{
        align-self: flex-start;
        margin-left: 1rem;
    }

    &>input{

    }
    
    &>span{
        text-transform: uppercase;
    }
`
//border idle #9e8318
//border+BG hovered #f7ce2a