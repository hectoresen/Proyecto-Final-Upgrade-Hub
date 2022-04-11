import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import {connect} from 'react-redux';
import { loginUser,logoutUser } from "../../../redux/actions/authActions";
import { Modal, Button, Input, Text, Row, Checkbox  } from '@nextui-org/react';
import GoogleLogin from 'react-google-login';
import { InputSwitch } from 'primereact/inputswitch';
import { ThemeContext } from "../../../Contexts/ThemeContext";
import { FormattedMessage  as T} from 'react-intl';
import LanguageSelector from "../../LanguageSelector/LanguageSelector";
import './Navbar.scss';


const INITIAL_STATE = {
    email: '',
    password: ''
}

const Navbar = ({dispatch, error, user}) => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [{theme, isDark }, toggleTheme] = useContext(ThemeContext)
    const [sesionGoogle, setSesionGoogle] = useState(false)

    // const client_id=process.env.GOOGLE_CLIENT_ID

    const local_Storage= localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : null

    const [loginData,setLoginData]=useState(local_Storage)

    const needToRegister = () =>{
        setVisible(false);
        navigate('/access');
    };

    const closeHandler = () => {
        setVisible(false);
    };

    const responseGoogle=(response)=>{
        localStorage.setItem('loginData',JSON.stringify(response))
        setLoginData(response)
        setVisible(false)
        setSesionGoogle(true)
    }


    const handleLogout=()=>{
        localStorage.removeItem('loginData')
        setSesionGoogle(false)
    } 
//////////////////////////////////////////////


    const submitLogin = (ev) =>{
        ev.preventDefault();
        dispatch(loginUser(formData));
        setVisible(false);
        navigate('/profile');
    };

    const changeInput = (ev) =>{
        const {name, value} = ev.target;
        setFormData({...formData, [name]: value});
    };

    const items = [

        // {
        //     label:sesionGoogle===true || user ? user.email || loginData.profileObj.givenName : '',
        // },

        {
        label: <T id="navbar.item.man" />,

        items: [
            {
            label: <T id="navbar.item.clothes" />,
            command: () => {
                navigate("/man");
            },
            },
            {
            label: <T id="navbar.item.sneakers" />,
            command: () => {
                navigate("/manshoes");
            },
            },
            // {
            //     separator: true
            // },
        ],
        },
        {
        label: <T id="navbar.item.woman" />,
        items: [
            {
            label: <T id="navbar.item.clothes" />,
            command: () => {
                navigate("/women");
            },
            },
            {
            label: <T id="navbar.item.sneakers" />,
            command: () => {
                navigate("/womenshoes");
            },
            },
            {
            label: <T id="navbar.item.accessories" />,
            command: () => {
                navigate("/accessories");
            },
            },
        ],
        },
        {
        label: <T id="navbar.item.cart" />,
        icon: "pi pi-fw pi-shopping-cart",
        command: () => {
            navigate("/cart");
        },
        },
        {
        label: <T id="navbar.item.account"/>,
        icon: "pi pi-fw pi-power-off",
        items: [
            {
            label:  < T id="navbar.item.logout" /> ,
            icon: "pi pi-fw pi-cog",
            className: !user && sesionGoogle===false  ? 'hiddenItem' : 'showItem',
            command: () => {
                handleLogout()
                dispatch(logoutUser())
                navigate('/');
            }
            },
            { label: <T id="navbar.item.login" />,
            icon: "pi pi-fw pi-power-off",
            className: user ? 'hiddenItem' : 'showItem',
            command: () =>{
                setVisible(true);
            }
            },
            {
                label: <p>Perfil</p>,
                icon: "pi pi-user",
                className: (!user) ? 'hiddenItem' : 'showItem',
                command: ()=>{navigate('/profile')}
            }
        ],
        },
        {
            label: <T id="navbar.item.settings"/>,
            icon: "pi pi-fw pi-cog",
            items: [
                {
                label: <InputSwitch name='darkMode' checked={isDark} onChange={toggleTheme}/>,
                icon: "pi pi-fw pi-palette",
                },
                {
                label: <LanguageSelector/>,
                icon: "pi pi-fw pi-globe",
                },
            ],
        },
        // {
        //     label:     <Search/>

        // }
    ];

    const end = (
        <div className="__swicth">
            {/* AÑADIR IMAGEN? */}
        </div>
    )
    const start = [
        (loginData &&   <img
            style={{borderRadius:'100%'}}
            alt="logo"
            // src=''
            src={'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
            onError={(e) =>
                (e.target.src =
                    "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
                }
                height="40"
                className="mr-2"
                />)
    ];

    return (
        <div className="nnavbar">
        <div className="nnavbar">
            <Menubar model={items} style={{background:'transparent',border:'none',fontWeight:'bolder',}} />
        </div>
        <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
    >
        <Modal.Header>
            <Text id="modal-title" size={18}>
                {/* Texto alternativo */}
            <Text b size={18} >
                <T id="navbar.item.login"/>
            </Text>
            </Text>
        </Modal.Header>
        <Modal.Body>
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                labelPlaceholder="Email"
                type='email'
                name="email"
                value={formData.email}
                onChange={changeInput}
            />
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                name="password"
                type="password"
                value={formData.password}
                onChange={changeInput}
                labelPlaceholder="Contraseña"
            />
            <Row justify="space-between">
            <Checkbox>
                <Text size={14}>
                <T id="navbar.item.session" />
                {/* COOKIES */}
                </Text>
            </Checkbox>
            <Button auto onClick={submitLogin}>
            <T id="navbar.item.login" />
            </Button>
            </Row>
            <Row justify="center" >
            <GoogleLogin
    clientId="966171888634-u11jhbnktfnhd6uto6ojn3se5s3eof14.apps.googleusercontent.com"
    buttonText="Iniciar sesion con Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    // onClick={registerUserForGoogl}
/>
    </Row>
        </Modal.Body>
        <Modal.Footer justify="center">
            <Button auto flat color="success" onClick={needToRegister}>
            <T id="navbar.item.registerRequired" />
            </Button>
        </Modal.Footer>
    </Modal>
        </div>
    );
};

const mapStateToProps = (state) =>({
    user: state.auth.user,
    error: state.auth.error,
});

export default connect(mapStateToProps)(Navbar);
