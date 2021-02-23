import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



function FormConnexion() {
    return (
        <div className="formulaire">
            <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                 <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div class="form-check">
                 <label class="form-check-label" for="exampleCheck1">Mot de passe oublié</label>
            </div>
    
        </form>
        </div>
    )
}

export default FormConnexion
