import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
`

export const Slider = styled.div`
    height: 12.5rem;
    width: 80vw;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color:transparent;
`

export const scroll = keyframes`
    0%{transform: translateX(0)}
    100%{transform: translateX(-20vw)}
`

export const SliderTrack = styled.div`
    display:flex;
    align-items: center;
    width:calc(25rem*4);
    background-color: transparent;
    animation: ${scroll} 6s linear infinite
`

export const ImageContainer = styled.div`
    width: 20vw;
    padding:0;
    display: flex;
    align-items: center;
    width:25rem;

    img{
        width:100%
    }

    p{
        color: white
    }
`