import {useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import { registerUser, loginUser } from '../../redux/actions/authActions';
import { Modal, Button, Input, Text, Row, Checkbox  } from '@nextui-org/react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { FormattedMessage  as T} from 'react-intl';
import ReCAPTCHA from "react-google-recaptcha";
import './Access.scss';

const INITIAL_STATE = {
    email: '',
    password: '',
    passwordRepeat: ''
}

const Access = ({dispatch, error, user, loginFailed, registerFailed}) =>{

    const [registeredError , setRegisteredError] = useState(false)

    const navigate = useNavigate();
    const [formRegisterData, setFormRegisterData] = useState(INITIAL_STATE);
    const [loginFormData, setLoginFormData] = useState(INITIAL_STATE);
    
    const [captchaValido, setCaptchaValido] = useState(null)
    // const [usuarioValido, setUsuarioValido] = useState(false)
    //REGISTER

    const submitRegisterForm = (ev) =>{
        ev.preventDefault();
        
        if(captcha.current.getValue()){
            dispatch(registerUser(formRegisterData));
        setFormRegisterData(INITIAL_STATE);
        navigate('/profile');
        setCaptchaValido(true)
        // setUsuarioValido(true)
        }else{
        // setUsuarioValido(false)
        setCaptchaValido(false)
            
        }
    }
    const handleInputRegister = (ev) =>{
        const {name, value} = ev.target;
        setFormRegisterData({ ...formRegisterData, [name]: value});
    }

    //LOGIN

    const submitLoginForm = (ev) =>{
        ev.preventDefault();
        const cb = () => navigate('/profile')
        dispatch(loginUser(loginFormData, cb));
    }

    const handleInputLogin = (ev) =>{
        const {name, value} = ev.target;
        setLoginFormData({ ...loginFormData, [name]: value});
    }
    const captcha=useRef(null)
    
    const keyCaptcha = process.env.keyCaptcha
        const onChangeCaptcha = ()=>{
            if(captcha.current.getValue()){
                console.log('el usuario no es un robot');
            }
        }

    return (

        <div className='access'>
            <div className='access__forms'>
                {(error !== false)
                ?
                <>
                <form onSubmit={submitLoginForm} className='access__forms-login'>
                    <h2><T id='navbar.item.login' /></h2>
                    { loginFailed && <p className='access__forms-login-error'><T id='Register.Credentials' /></p>}
                        <div className='access__forms-login-input'>
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                    <InputText id="email" name="email" type="email" value={loginFormData.email} onChange={handleInputLogin}></InputText>
                                <label htmlFor='email'>Email*</label>
                            </span>
                        </div>
                        <div className='access__forms-login-input'>
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-lock" />
                                    <InputText id="password" name="password" type="password" value={loginFormData.password} onChange={handleInputLogin}></InputText>
                                <label htmlFor="password"><T id='Register.Password' /></label>
                            </span>
                        </div>
                    <div>
                        <Button auto flat color="success" className='access__forms-login-btn'>
                            <T id='navbar.item.login' />
                        </Button>
                    </div>
                </form>
                </>
                :
                ''
            }
            <form onSubmit={submitRegisterForm} className="access__forms-register">
                <h2><T id='Register.Create' /></h2>
                <div className='access__forms-register-input'>
                    <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-envelope" />
                            <InputText id="email" name="email" type="email" value={formRegisterData.email} onChange={handleInputRegister}></InputText>
                        <label htmlFor="email">Email*</label>
                    </span>
                </div>
                <div className='access__forms-register-input'>
                    <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-lock" />
                            <InputText id="password" name="password" type="password" value={formRegisterData.password} onChange={handleInputRegister}></InputText>
                        <label htmlFor="password"><T id='Register.Password' /></label>
                    </span>
                </div>
                <div className='access__forms-register-input'>
                    <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-lock" />
                            <InputText id="password" name="passwordRepeat" type="password" value={formRegisterData.passwordRepeat} onChange={handleInputRegister}></InputText>
                            <label htmlFor="password"><T id='Register.RPassword' /></label>
                    </span>
                    {registerFailed && <p className='access__forms-login-error'>{error}</p>}
                </div>
                <ReCAPTCHA
                ref={captcha}
    sitekey='6LdkchMfAAAAANivlu4Xpc0Hj-sHRbQyV8cas_vP'
    onChange={onChangeCaptcha}
    />
    {captchaValido === false && <div className='messages'>Debes aceptar el captcha</div>}
                <div>
                    {/* <button className="register__form-btn">Registrar</button> */}
                    <Button auto flat color="primary" className="access__forms-register-btn">
                    <T id='Register.Register' />
                    </Button>
                </div>
                <div className='register__form-line'></div>
                <div className='register__form-footer'>
                    <p><T id='Register.terms1' /> <a href="https://www.amazon.es/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=200545940"><T id='Register.terms2' /></a><T id='Register.thanks' /></p>
                </div>
            </form>
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>({
    user: state.auth.user,
    error: state.auth.error,
    loginFailed: state.auth.loginFailed,
    registerFailed: state.auth.registerFailed
})
export default connect(mapStateToProps)(Access);