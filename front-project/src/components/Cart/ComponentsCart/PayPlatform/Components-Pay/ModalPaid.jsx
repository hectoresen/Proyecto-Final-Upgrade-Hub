import React, { useState } from 'react'
import { FormattedMessage  as T} from 'react-intl';
import './ModalPaid.scss'
import { Rating } from 'primereact/rating';
export const ModalPaid = ({timeToSend, closeAll}) => {

    const [value, setValue] = useState(null);

    return (
        <div className="c-modalPaid__container">
            <div className="c-modalPaid">
                <h3><T id='ModalPaid.order.register' /></h3>
                <h4> El tiempo estimado de entrega será de: {timeToSend} días</h4>
                <h5> <T id='ModalPaid.order.Rating' /></h5>
                <Rating value={value} cancel={false} onChange={(e) => setValue(e.value)} />
                <button className='c-modalPaid__button' onClick={closeAll}>OK</button>
            </div>
        </div>
    )
}

    //     <Modal closeButton preventClose aria-labelledby="modal-title" open={visible}
    //     onClose={()=>{closeAll()}}>
    //     <Modal.Header>
    //         <Text id="modal-title" size={18}>
    //         <Text b size={18}>
    //             <T id='ModalPaid.order.register' />
    //         </Text>
    //         </Text>
    //     </Modal.Header>
    //     <Modal.Body>
    //     <Row justify="center">
    //         <Text justify="center" size={16}>
    //             El tiempo estimado de entrega será de: {timeToSend} días
    //         </Text>
    //     </Row>
    //     <Row justify="center">
    //         <Text size={18}>
    //         <T id='ModalPaid.order.Rating' />
    //         </Text>
    //     </Row>
    //     <Row justify="center">
    //         <Rating
    //                 name="simple-controlled"
    //                 value={value}
    //                 onChange={(event, newValue) => {
    //                 setValue(newValue);
    //                 }}
    //         />   
    //     </Row>
    //     </Modal.Body>
    //     <Modal.Footer>
    //         <Button auto flat onClick={closeAll}>
    //         <T id='ModalPaid.order.CLose' />
    //         </Button>
    //     </Modal.Footer>
    // </Modal>

// <Modal.Dialog>
//         <Modal.Header >
//             <Modal.Title>Tu pedido se ha registrado correctamente</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//             <p>El tiempo de entrega serán {props.timeToSend} días </p>
//             <h5>Valore su experiencia con ZARANDO</h5>
//                     <Rating
//                         name="simple-controlled"
//                         value={value}
//                         onChange={(event, newValue) => {
//                         setValue(newValue);
//                         }}
//                     />
//         </Modal.Body>

//         <Modal.Footer>
//             <Button onClick={props.closeAll} variant="primary">Cerrar</Button>
//         </Modal.Footer>
//     </Modal.Dialog> 