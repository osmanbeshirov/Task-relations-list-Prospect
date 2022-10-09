import { ExclamationCircleOutlined } from '@ant-design/icons';
import {  Modal } from 'antd';
import React, { useContext } from 'react';
import ContactContext from '../../context/ContactContext';
import '../ConfirmModal/confirmModal.css'
const { confirm } = Modal;

const ConfirmModal = ({ children, removedUser }) => {

    const { removeFromTable } = useContext(ContactContext)



    const showConfirm = () => {
        confirm({
            title: `${removedUser.name} ${removedUser.surname} adlı istifadəçini silməkdən əminsiniz?`,
            icon: <ExclamationCircleOutlined />,
            // content: 'Some descriptions',
            okText: 'Bəli',
            cancelText: 'Xeyr',

            onOk() {
                removeFromTable(removedUser)
            }
        });
    }

    return (
        <div>
            <span onClick={showConfirm}>{children}</span >
        </div>
    )
};


export default ConfirmModal;
