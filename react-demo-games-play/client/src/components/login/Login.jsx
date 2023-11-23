/* eslint-disable react/prop-types */
import useForm from "../../hooks/useForm";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
}

export default function Login({
    loginSubmitHandler,
}){

    // onChange = changeHandler ; onSubmit = submitHandler
    // values is object
    const {values, changeHandler, submitHandler} = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={submitHandler}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name={LoginFormKeys.Email}
                        placeholder="Sokka@gmail.com"
                        onChange={changeHandler}
                        value={values[LoginFormKeys.Email]}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input 
                        type="password" 
                        id="login-password" 
                        name={LoginFormKeys.Password}
                        onChange={changeHandler}
                        value={values[LoginFormKeys.Password]}
                    />
                    <input type="submit" className="btn submit" value="Login"/>
                    <p className="field">
                        <span>If you do not have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    )
}