import React from 'react';


function Login(props){
    return (
        <div>
            <p>Je suis connecté</p>
            <button onClick={props.onClick}>Connexion</button>
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
    var result 
    if(this.state.isConnect){
        result = <Login onClick={this.handLogin} />
    }
    else{
        result = <Logout onClick ={this.handLogout} />
    }
    

    return(
        <div>
        {result}
        </div>

        )
}

}

export default FormControl
