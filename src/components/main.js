
import {React, Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { encrypt } from '../algorithms/encryption';
import { decrypt } from '../algorithms/decryption';
import Encryption from './encrypt-interface';
import Decryption from './decrypt-interface';
class Main extends Component{

    render(){
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/encrypt" component={Encryption}/>
                    <Route path="/decrypt" component={Decryption}/>
                    <Redirect to="/encrypt"/>
                </Switch>
                <Footer/>
                
            </div>
        )
    }
}

export default Main;