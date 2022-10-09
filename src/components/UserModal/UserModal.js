import React, { useState } from 'react'
import { Modal } from 'antd';

import '../UserModal/userModal.css'

export default function UserModal({ children, currentUserDatas }) {

    const [modal1Open, setModal1Open] = useState(false);

    const myKeysInfoObj = Object.keys(currentUserDatas).splice(0, 8);
    const myValuesInfoObj = Object.values(currentUserDatas).splice(0, 8)

    const myOwnKeys = ['Ad', 'Soyad', 'Ata adı', 'E-poçt', 'Detallar', 'Vəzifə', 'Cins', 'Yeniliklər barədə bildiriş']

    const newKeys = myKeysInfoObj.map((item, index) => {
        if (item === myKeysInfoObj[index]) {
            return myOwnKeys[index]
        }

        return item;
    })

    const newValues = myValuesInfoObj.map((item, index) => {
        switch (item) {
            case 'man':
                return 'Kişi'

            case 'woman':
                return 'Qadın'

            case true:
                return 'Razıdır'

            case false:
                return 'Razı deyil'

            default:
                break;
        }

        return item;
    })

    return (
        <div>
            <span onClick={() => setModal1Open(true)}>
                {children}
            </span>

            <Modal
                title={`${currentUserDatas.name} ${currentUserDatas.surname} detalları ilə...`}
                style={{
                    top: 100,
                }}
                visible={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
            >
               
                {newKeys.map((item, index) => (
                    <div key={index}>
                        <ul className='list-info'>
                            <li className='list-info_item'> <strong>{item}</strong> : {newValues[index]}</li>
                        </ul>

                    </div>
                ))}

            </Modal>
        </div>
    )
}
