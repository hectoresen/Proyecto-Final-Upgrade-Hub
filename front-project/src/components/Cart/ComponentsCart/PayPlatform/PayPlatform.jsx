import './PayPlatform.scss'
import { FormattedMessage  as T} from 'react-intl';

//MUI
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { connect } from 'react-redux';
import { cleanCartRedux } from '../../../../redux/actions/cartActions';
import { ModalPaid } from './Components-Pay/ModalPaid';
import { editStockToApi } from '../../../../redux/actions/apiActions';
import { useNavigate } from 'react-router-dom';

const PayPlatform = ({price, cart, dispatch, setGoToPay}) => {
    const navigate = useNavigate();
    const [payType, setPayType] = React.useState('');
    const [totalPrice] = React.useState(price);
    const [payDone, setPayDone] = React.useState(false);
    const [orderSent, setOrderSent] = React.useState(false);

    const handleChange = (event) => {
        setPayType(event.target.value);
    };

    const payFunction = () => {
        setOrderSent(true)
        dispatch(editStockToApi(cart))
    } 

    const closeAll = () => {
        navigate('/')
        setOrderSent(false);
        setGoToPay(false);
        dispatch(cleanCartRedux())
    }    

    var timeToSend = 1; 

    const timeToSendP = cart.map((element)=>{
        
        if(element.shoppingFrom === "España"){
            return timeToSend = 2;  
        }
        if(element.shoppingFrom === "Francia"){
            return timeToSend = 3;
        }
        if(element.shoppingFrom === "Italia"){
            return timeToSend = 4;
        }
        if(element.shoppingFrom === "Alemania"){
            return timeToSend = 5;
        }else{
            return timeToSend = 5;
        }
    })

    return (<>
        <div className="c-platform">
            <div className="c-platform__modal">
                <div className="c-platform__modal__div">
                    <h4><T id='PlayPlatform.adress' /></h4>
                    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                            required
                            id="name"
                            label="Nombre"
                            variant="filled"
                            />
                            <TextField
                            required
                            id="surname"
                            variant="filled"
                            label="Apellidos"
                            />
                        </div>
                        <div>
                            <TextField
                            required
                            id="adress"
                            label="Dirección"
                            variant="filled"
                            />
                        </div>
                    </Box>
                </div>
                <div className="c-platform__modal__div">
                    <h4><T id='PlayPlatform.payment' /></h4>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Método de pago</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={payType}
                            label="Método de pago"
                            onChange={handleChange}
                            >
                            <MenuItem value={1}><T id='PlayPlatform.CreditCard' /></MenuItem>
                            <MenuItem value={2}>PayPal</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    {payType === 1 && <div>
                        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}}
                        noValidate
                        autoComplete="off">
                            <TextField
                            required
                            id="telephone"
                            label="Número de tarjeta"
                            variant="filled"
                            onChange={()=>{setPayDone(true)}}
                            />
                        </Box>
                    </div>}
                    {payType === 2 && <div>
                        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },}}
                        noValidate
                        autoComplete="off">
                            <TextField
                            required
                            id="telephone"
                            label="Teléfono"
                            variant="filled"
                            onChange={()=>{setPayDone(true)}}
                            />
                        </Box>
                    </div>}
                </div>
                <div className="c-platform__modal__div">
                    <h4><T id="PlayPlatform.pay.paymentConfirmed" /></h4>
                    <div className="c-platform__modal__images">
                        <div>
                            {cart.map(element =><img key={element.id} src={element.image} alt="miniatura"></img>)}
                        </div>
                        <div className="c-platform__modal__images__price">
                            <h3>Total: {totalPrice} €</h3> 
                        </div>
                    </div>       
                </div>
                <div className="c-platform__buttons">
                    <button className="c-platform__buttons__button" onClick={()=>{setGoToPay(false)}}><T id='PlayPlatform.pay.Cancel' /></button>
                    {payDone && <button className="c-platform__buttons__button" onClick={payFunction}><T id='PlayPlatform.pay.Buy' /></button> }
                    {/* <button className="c-platform__buttons__button" onClick={payFunction}><T id='PlayPlatform.pay.Buy' /></button> */}
                </div>
            </div>
            { orderSent && <div className="c-platform__order"><ModalPaid timeToSend={timeToSend} closeAll={closeAll} /></div>} 
        </div>
    </>)
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(PayPlatform)

