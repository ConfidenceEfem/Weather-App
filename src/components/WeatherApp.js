import React from 'react'
import styled from 'styled-components'
import WeatherHome from './WeatherHome'
import WeatherWelcome from './WeatherWelcome'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

const WeatherApp = () => {
    return (
        <Container>
            <Wrapper>
               <Router>
                   <Switch>
                       <Route exact path="/" component = {WeatherWelcome}/>
                       <Route exact path="/home" component = {WeatherHome}/>
                   </Switch>
               </Router>
            </Wrapper>
        </Container>
    )
}

export default WeatherApp

const Container = styled.div``
const Wrapper = styled.div``
