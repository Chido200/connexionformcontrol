import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



function FormConnexion(props) {
    return (
        <div className="formulaire">
            <form>
            <div className="form-group">
                <label htmlor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                 <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-check">
                 <label classna="form-check-label" htmlFor="exampleCheck1">Mot de passe oublié</label>
            </div>
        </form>
        </div>
    )
}

export default FormConnexion
