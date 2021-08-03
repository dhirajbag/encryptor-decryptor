
import {React, Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Encryption from './encrypt-interface';
import Decryption from './decrypt-interface';
class Main extends Component{

    render(){
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/encryptor-decryptor/encrypt" component={Encryption}/>
                    <Route exact path="/encryptor-decryptor/decrypt" component={Decryption}/>
                    <Redirect to="/encryptor-decryptor/encrypt"/>
                </Switch>
                <Footer/>
                
            </div>
        )
    }
}

export default Main;