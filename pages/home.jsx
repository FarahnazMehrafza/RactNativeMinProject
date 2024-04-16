
import React, { Component } from 'react'
import { Text,View } from 'react-native'
import { Header } from '../components/header'
import Main from './main'
import { Footer } from '../components/footer'
class Home extends Component {
    render() {
        return(
            <View>
                <Header/>
                <Main/>
                <Footer/>
            </View>
        )
    }
} 