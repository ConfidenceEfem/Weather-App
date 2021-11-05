import React from 'react'
import styled from "styled-components"
import axios from "axios"
import img from "./image.jpg"
import moment from "moment"
import sun from "./sun.gif"
import rain from "./rain.gif"
import cold from "./cold.gif"

const WeatherHome = () => {

    const [city, setCity] = React.useState("Lagos")
    const [text, setText] = React.useState(city)
    const [data, setData] = React.useState([])

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c56dc5e4dfd47aa7fa1665568e9233e`;

    const axiosData = async ()=>{
        const data = await axios.get(url)
        if(data){
            setData(data.data)
            console.log(data)
        }else{
            console.log("No data")    

        }
    }

    React.useEffect(()=>{
        axiosData()
    },[])
    return (
        <Container>
            <Wrapper>
              <Background>
                  

                  <SearchButton>
                  <Search placeholder="Enter your city"
                  value={city}
                  onChange={(e)=>{
                      setCity(e.target.value)
                  }} />
                  <Button
                  onClick={()=>{
                      setText(city)
                      axiosData()
                        
                      setCity("")
                  }}>Search</Button>
                  </SearchButton>
                  <City>{data.name} {""}</City>
                  <Cloudy></Cloudy>
                  {Math.ceil(data?.main?.temp -273.15) >= 28 ? (
            <Image src={sun} />
          ) : Math.ceil(data?.main?.temp -273.15) < 28 ||
            Math.ceil(data?.main?.temp - 273.15) < 19 ? (
            <Image src={cold} />
          ) : Math.ceil(data?.main?.temp - 273.15) < 18 ? (
            <Image src={rain} />
          ) : null}
                  {/* <Image/> */}
                  <Degree>{Math.ceil(data?.main?.temp -273.15) } °C{""}</Degree>
                  <Dates>{moment(Date.now()).format(" D MMMM YYYY, h:mm a")}</Dates>
                  {/* <Left></Left>
                  <Right></Right> */}
              </Background>
              <Opacity></Opacity>
            </Wrapper>
        </Container>
    )
}

export default WeatherHome

const Cloudy = styled.div`
font-size: bold;
font-size: 18px;
margin-bottom: 5px;
z-index: 10;
font-weight: bold;
`
const Dates = styled.div`
font-size: 20px;
color: white;
z-index:5;

`

const Degree = styled.div`
font-size: 30px;
color: black;
font-weight: bold;
z-index: 10;

margin-bottom: 10px;
`
const Image = styled.img`
margin-bottom: 50px;
width: 300px;
height: 300px;
background-color: white;
border-radius: 20px;
object-fit: cover;
display: flex;
justify-content: center;
align-items: center;

`

const City = styled.div`
margin-bottom: 50px;
font-size: 40px;
z-index: 100;
color: white;
letter-spacing: 0.4px;
font-weight: bold;
`

const Button = styled.div`
width: 90px;
height: 32px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 3px; 
background-color: white;
border: none;
color: black;
font-weight: bold;
transform: scale(1);
transition: all 350ms;
:hover{
    transform: scale(1.03);
    cursor: pointer;
}
@media screen and (min-width: 320px) and (max-width: 430px){
    width: 25%;
    height: 90%;
    font-size: 14px;
}
`

const SearchButton = styled.div`
display: flex;
justify-content: center;
z-index: 10;
width: 600px;
height: 35px;
align-items: center;
margin-top: 20px;
margin-bottom: 70px;
flex-wrap: wrap;
@media screen and (min-width: 320px) and (max-width: 430px){
    width: 90%;
    height: 40px;
}
`
const Search = styled.input`
margin-right: 10px;
width: 350px;
height: 35px;
color: black;
z-index: 10;
background-color: skyblue;
border-radius: 20px;
border: none;
padding-left: 20px;
@media screen and (min-width: 320px) and (max-width: 430px){
    /* width: 55%; */
    height: 35px;
    font-size: 16px;
    margin-bottom: 10px;
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
const Background = styled.div`
width: 100%;
height: 100%;
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;
position: relative;
display: flex;
align-items: center;
flex-direction: column;
@media screen and (min-width: 320px) and (max-width: 375px){
    width: 100%;
    height: 100%;
}
`
const Container = styled.div`
width: 100%;
height: 100vh;
background-color: lightblue;
opacity: 0.5;
display: flex;
@media screen and (min-width: 320px) and (max-width: 375px){
    width: 100%;
    height: 100vh;
}
`
const Wrapper = styled.div`
width: 100%;
height: 100%;
@media screen and (min-width: 320px) and (max-width: 375px){
    width: 100%;
    height: 100vh;
}
`
