import React, { useContext, useState } from 'react';
import { Row, Text, Input, Button, Modal, Checkbox, Avatar } from '@nextui-org/react';
import { AdminContext } from '../../../Contexts/AdminContext';
import { FormattedMessage  as T} from 'react-intl';

const AdmingModalSettings = () => {
    const [visible, setVisible] = useState(true);
    const closeHandler = () => setVisible(false);
    const [handleModal, setHandleModal] = useContext(AdminContext);

    const deleteProduct = () => {
        setHandleModal(!handleModal)
        setVisible(false);
    };

    return (
    <div>
    <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
    >
        <Modal.Header>
            <Text id="modal-title" size={18}>
            <Text b size={18}>
                <T id="AdminSettings.Stock.Delete" />
            </Text>
            </Text>
        </Modal.Header>
        <Modal.Body>
            <Row justify="space-between">
            <Text color="error" size={14}>
            <T id="Admin.Delete.Warning" />
            </Text>
            </Row>
        </Modal.Body>
        <Modal.Footer>
            <Button auto onClick={(deleteProduct)}>
            <T id="Admin.delete.product" />
            </Button>
        </Modal.Footer>
    </Modal>
</div>
)
}

export default AdmingModalSettings