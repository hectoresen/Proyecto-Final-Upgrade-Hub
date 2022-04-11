import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import {Input} from '@nextui-org/react';
import './Register.scss';
import { registerUser } from '../../redux/actions/authActions';


const INITIAL_STATE = {
    email: '',
    password: ''
}

const Register = ({dispatch, error, ...restProps}) =>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [samePasswords, setSamePasswords] = useState(true);

    const submitForm = (ev) =>{
        ev.preventDefault();
        dispatch(registerUser(formData));
        setFormData(INITIAL_STATE);
        /* navigate('/profile'); */
        /* USUARIO REGISTRADO */
    }

    const changeInput = (ev) =>{
        const {name, value} = ev.target;
        const pass = document.getElementById('pass');
        const passRepeat = document.getElementById('passRepeat');

        setFormData({ ...formData, [name]: value});

        (pass.value === passRepeat.value) ? setSamePasswords(false) : setSamePasswords(true);
    }
    return (
        <div className='register'>
            <form onSubmit={submitForm} className="register__form">
                <h2>Crear cuenta</h2>
                <label>
                    <Input className="register__form-input" bordered labelPlaceholder="Correo electrónico" color="primary" type='email' name='email' id="email" value={formData.email} onChange={changeInput}/>
                </label>
                <label>
                    <Input className="register__form-input" bordered labelPlaceholder="Contraseña" color="primary" type='password' name='password' id="pass" value={formData.password} onChange={changeInput}/>
                </label>
                <label>
                    <Input className="register__form-input" bordered labelPlaceholder="Repetir contraseña" color="primary" type='password' name='passwordRepeat' id="passRepeat" value={formData.passwordRepeat} onChange={changeInput}/>
                </label>
                <div>
                    <button className="register__form-btn" disabled={samePasswords}>Registrar</button>
                </div>
                <div className='register__form-line'></div>
                <div className='register__form-footer'>
                    <p>Al registrarte aceptas nuestras <a href="https://www.amazon.es/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=200545940">condiciones de uso y venta.</a>Gracias</p>
                </div>
            </form>
        </div>
    )
}
const mapStateToProps = (state) =>({
    error: state.auth.error,
})
export default connect(mapStateToProps)(Register);