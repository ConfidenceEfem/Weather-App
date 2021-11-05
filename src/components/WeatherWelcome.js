import React from 'react'
import styled from "styled-components"
import background from "./image.jpg"
import {Link} from "react-router-dom"

const WeatherWelcome = () => {
    return (
        <Container>
            <Wrapper>
                <Background src={background}/>
                <Opacity></Opacity>
                <TextButton>
                    <Text>Welcome to Impact Weather App</Text>
                    <Welcome to="/home">Get Started</Welcome>
                </TextButton>
            </Wrapper>
        </Container>
    )
}

export default WeatherWelcome

const Text = styled.div`
font-size: 40px;
margin-bottom: 50px;
color: white;
font-weight: bold;
font-family: arial;
text-align: center;
@media screen and (max-width:650px) and (min-width: 500px){
    font-size: 30px;
    margin-bottom: 40px;
}
@media screen and (max-width:760px) and (min-width: 650px){
    font-size: 35px;
    margin-bottom: 40px;
}
@media screen and (max-width:810px) and (min-width: 760px){
    font-size: 38px;
    margin-bottom: 45px;
}

@media screen and (min-width: 2560px){
    font-size: 70px;
}
@media screen and (max-width:428px) and (min-width: 320px){
    font-size: 32px;
    margin-bottom: 40px;
}
`

const TextButton = styled.div`
display: flex;
flex-direction: column;
position: absolute;
/* top: 320px;
left: 450px; */
top: 50%;
left: 30%;
align-items: center;
justify-content: center;

@media screen and (min-width: 2560px){
    left: 32%;
}

@media screen and (max-width: 1200px) and (min-width: 1000px){
    left: 25%;
    background-color: red;
}

@media screen and (max-width: 999px) and (min-width: 810px){
    left: 16%;
    top: 45%;
    /* background-color: purple; */
}

@media screen and (max-width:809px) and (min-width: 760px){
    /* background-color: green; */
    left: 15%;
    top: 45%;
}
@media screen and (max-width:760px) and (min-width: 650px){
    /* background-color: red; */
    left: 12%;
    top: 45%;
}
@media screen and (max-width:650px) and (min-width: 520px){
    /* background-color: purple; */
    left: 9%;
    top: 45%;
}
@media screen and (max-width:520px) and (min-width: 428px){
    /* background-color: green; */
    left: 6%;
    top: 42%;
}
@media screen and (max-width:428px) and (min-width: 320px){
    /* background-color: green; */
    left: 6%;
    top: 38%;
}

`
const Welcome = styled(Link)`
width: 200px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
color: whitesmoke;
background-color: blue;
font-weight: bold;
font-size: 20px;
border-radius: 5px;
transform: scale(1);
letter-spacing: 0.6px;
transition: all 350ms;
text-decoration: none;

:hover{
    transform: scale(0.95);
    cursor: pointer;
}

@media screen and (min-width: 2560px){
 width:300px;
 height: 70px; 
 font-size: 25px;
}

@media screen and (max-width:809px) and (min-width: 750px){
    width:150px;
 height: 40px; 
 font-size: 18px;
}
@media screen and (max-width:760px) and (min-width: 650px){
    width:140px;
 height: 35px; 
 font-size: 16px;
 
}
@media screen and (max-width:650px) and (min-width: 520px){
    width:130px;
 height: 30px; 
 font-size: 14px;
}
@media screen and (max-width:520px) and (min-width: 428px){
    width:120px;
 height: 28px; 
 font-size: 13px;
}
@media screen and (max-width:428px) and (min-width: 320px){
    width:110px;
 height: 25px; 
 font-size: 12px;
}
`

const Opacity = styled.div`
width: 100%;
height: 100vh;
background-color:blue;
position: absolute;
top: 0px;
opacity: 0.5;

`

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: lightblue;
opacity: 0.5;
display: flex;
`

const Wrapper = styled.div`
width: 100%;
height: 100%;
`

const Background = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
