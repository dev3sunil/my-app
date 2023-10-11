import React,{ useState } from "react";

const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeFirstName = (e) =>{
        setFirstName(e.target.value)
    }
    const changeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const changePassword = (e) =>{
        setPassword(e.target.value)
    }

    return(
        <div className="form-heading">
            <form>
                <div>
                    <a><b>Username </b></a>
                <input type="text" placeholder="enter your name" name="firstname" value={firstName} onChange={changeFirstName} />
                </div>
                <div className="email">
                <input
                type="text" placeholder="enter your email" value={email} onChange={changeEmail} />
                </div>
                <div className="password">
                <input
                type="text" placeholder="enter your password" value={password} onChange={changePassword} />
                </div>
            </form>
        </div>
    );

};

export default Form;