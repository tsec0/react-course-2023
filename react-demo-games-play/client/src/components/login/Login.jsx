import useForm from "../../hooks/useForm";

export default function Login(){ 

    // onChange = changeHandler ; onSubmit = submitHandler
    // values is object
    const {values, changeHandler, submitHandler} = useForm({
        email: '',
        password: '',
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
                        name="email" 
                        placeholder="Sokka@gmail.com"
                        onChange={changeHandler}
                        value={values['email']}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input 
                        type="password" 
                        id="login-password" 
                        name="password"
                        onChange={changeHandler}
                        value={values['password']}
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