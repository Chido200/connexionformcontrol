import React from 'react';
import FormConnexion from "./FormConnexion"


function Login(props){
    return (
        <div className='forms'>
             <FormConnexion />
              <button type="submit" className="btn btn-primary" onClick={props.onClick}>Connexion</button>
        </div>
          

    )
    
}


function Logout (props){
    return <button onClick={props.onClick}>Deconnexion</button>
}

class FormControl extends React.Component{
    constructor(props){
        super(props);
        this.state = ({isConnect : false})
        this.handLogin = this.handLogin.bind(this) 
        this.handLogout = this.handLogin.bind(this)
    }
handLogin(e){
    e.preventDefault();
    this.setState(
        {
            isConnect : !this.state.isConnect
        }
    )
}

handLogout(e){
    e.preventDefault();
    this.setState(
        {
            isConnect : this.state.isConnect
        }
    )
}
render(){
    let result 
    if(this.state.isConnect){
        result = <Login onClick={this.handLogin} />
    }
    else{
       
        result = <Logout onClick ={this.handLogout} />
    }
    return(
        <>
         {result}
        </>

        )
}

}

export default FormControl
