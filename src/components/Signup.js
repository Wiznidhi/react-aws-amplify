import React, { useState } from "react";
import UserPool from "../UserPool";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.error(err);
            }
            console.log(data);
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <br></br>
                <br></br>
                <input value={email} onChange={(event) => setEmail(event.target.value)}></input>
                <br></br>
                <br></br>
                <label htmlFor="password">Password</label>
                <br></br>
                <br></br>
                <input value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <br></br>
                <p>Require numbers</p>
                <p>Require special character</p>
                <p>Require uppercase letters</p>
                <p>Require lowercase letters</p>
                <br></br>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}
  
  export default Signup;