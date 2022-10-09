import React, { useContext } from 'react'
import { Button, Modal } from 'antd';


export default function UserModal({ showModalNow, handleOk, handleCancel, isModalOpen }) {

    return (
        <div>
            <Button type="primary" onClick={showModalNow}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}
