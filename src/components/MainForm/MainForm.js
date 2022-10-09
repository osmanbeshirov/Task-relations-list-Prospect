import React, { useContext } from 'react'

import { Button, Form, Input, Select, Radio, Switch } from 'antd';

import '../MainForm/mainForm.css'

import ContactContext, { openNotificationWithIcon } from '../../context/ContactContext';


import { useNavigate } from 'react-router-dom';

const layout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 24,
    },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
};
/* eslint-enable no-template-curly-in-string */

export default function MainForm({ userDatas }) {

    const { addToTable, editContact } = useContext(ContactContext)

    const navigate = useNavigate()

    const onFinish = (values) => {

        if (typeof userDatas === 'undefined') {
            addToTable(values.user);

            navigate('/contacts', { replace: true })
        }

        else {

            const editedContact = Object.assign(values.user, { id: userDatas.id, key: userDatas.key })

            if (userDatas.name === editedContact.name && userDatas.surname === editedContact.surname &&
                userDatas.dadname === editedContact.dadname && userDatas.email === editedContact.email &&
                userDatas.gender === editedContact.gender && userDatas.specality === editedContact.specality &&
                userDatas.updates === editedContact.updates) {

                openNotificationWithIcon('error', 'Uğursuz əməliyyat', 'Heç bir məlumatda dəyişiklik olunmadı...', '')
            }
            else {
                editContact(editedContact);
                openNotificationWithIcon('info', 'Uğurlu əməliyyat', 'redaktə olundu', `${editedContact.name}  ${editedContact.surname}`)
                navigate('/contacts', { replace: true })
            }
        }

    };

    return (
        <Form  {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <div className='left-form'>
                <Form.Item
                    initialValue={userDatas ? userDatas.name : null}

                    name={['user', 'name']}
                    label="Ad"
                    rules={[
                        {
                            required: userDatas ? false : true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    initialValue={userDatas ? userDatas.surname : null}

                    name={['user', 'surname']}
                    label="Soyad"
                    rules={[
                        {
                            required: userDatas ? false : true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item

                    initialValue={userDatas ? userDatas.dadname : null}

                    name={['user', 'dadname']}
                    label="Ata adı"
                    rules={[
                        {
                            required: userDatas ? false : true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    initialValue={userDatas ? userDatas.email : null}

                    name={['user', 'email']}
                    label="E-poçt"
                    rules={[
                        {
                            type: 'email', required: userDatas ? false : true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

            </div>

            <div>

                <Form.Item
                    initialValue={userDatas ? userDatas.details : null}

                    name={['user', 'details']}
                    label="Əlavə məlumat"
                    rules={[
                        {
                            required: userDatas ? false : true,
                        },
                    ]}>

                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    initialValue={userDatas ? userDatas.specality : 'IT mühəndis'}

                    name={['user', 'specality']}
                    label="Vəzifə"
                    rules={[
                        {
                            type: 'select', required: userDatas ? false : true,
                        },
                    ]}>
                    {/* defaultActiveFirstOption={userDatas ? userDatas.specality : null} */}
                    <Select  >
                        <Select.Option value="IT mühəndis">IT mühəndis</Select.Option>
                        <Select.Option value="Proyekt meneceri">Proyekt meneceri</Select.Option>
                        <Select.Option value="Data analitik">Data analitik</Select.Option>
                        <Select.Option value="Marketinq direktoru">Marketinq direktoru</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    initialValue={userDatas ? userDatas.gender : null}
                    name={['user', 'gender']}
                    label="Cins"
                    rules={[
                        {
                            required: userDatas ? false : true
                        },
                    ]}>
                    <Radio.Group >
                        <Radio value="man">Kişi</Radio>
                        <Radio value="woman"> Qadın </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item valuePropName="checked"
                    initialValue={userDatas ? userDatas.updates : false}
                    name={['user', 'updates']}
                    label="Yeniliklər"
                    rules={[
                        {
                            type: 'switch'
                        },
                    ]}>
                    <Switch />

                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        {userDatas ? 'Dəyişiklikləri yadda saxla' : 'Əlaqəni yarat'}
                    </Button>
                </Form.Item>

            </div>
        </Form >
    )
}
