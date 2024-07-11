import "./Login.css";
import {FaUser, FaLock} from 'react-icons/fa';

const Login = () => {
    const submitForm = (event) =>{
        event.preventDefault();
    }
    return(
        <div className="container"> 
                <form onSubmit={submitForm}>
                <h1>Acesse o sistema</h1>
                <div className="input-form">
                    <input type="email" placeholder="E-mail"/>
                    <FaUser className="icon"/>

                </div>
                <div className="input-form">
                    <input type="password" placeholder="Senha"/>
                    <FaLock className="icon"/>
            </div>
            <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
            <button>Entrar</button>

            <div className="signup-link">
                <p>
                    Não tem uma conta?
                    <a href="#">Registrar</a>
                </p>
            </div>
            </form>
        </div>
       

    )
}

export default Login