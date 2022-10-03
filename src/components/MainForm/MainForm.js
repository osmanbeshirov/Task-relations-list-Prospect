import React, { useContext } from 'react'

import { Button, Form, Input, Select, Radio, Switch } from 'antd';

import '../MainForm/mainForm.css'

import ContactContext from '../../context/ContactContext';


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

    console.log(userDatas)

    const navigate = useNavigate()

    const onFinish = (values) => {

        if (!userDatas) {
            addToTable(values.user);
        }
        else {
            editContact(values.user)
        }


        navigate('/contacts', { replace: true })
    };

    return (
        <Form  {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <div className='left-form'>
                <Form.Item
                    name={['user', 'name']}
                    label="Ad"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input defaultValue={userDatas ? userDatas.name : null} />
                </Form.Item>
                <Form.Item
                    name={['user', 'surname']}
                    label="Soyad"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input defaultValue={userDatas ? userDatas.surname : null} />
                </Form.Item>
                <Form.Item
                    name={['user', 'dadname']}
                    label="Ata adı"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input defaultValue={userDatas ? userDatas.dadname : null} />
                </Form.Item>

                <Form.Item
                    name={['user', 'email']}
                    label="E-poçt"
                    rules={[
                        {
                            type: 'email', required: true
                        },
                    ]}
                >
                    <Input defaultValue={userDatas ? userDatas.email : null} />
                </Form.Item>

            </div>

            <div>

                <Form.Item
                    name={['user', 'details']}
                    label="Əlavə məlumat"
                    rules={[
                        {
                            required: true
                        },
                    ]}>

                    <Input.TextArea defaultValue={userDatas ? userDatas.details : null} />
                </Form.Item>
                <Form.Item
                    initialValue={'IT mühəndis'}

                    name={['user', 'specality']}
                    label="Vəzifə"
                    rules={[
                        {
                            type: 'select', required: true
                        },
                    ]}>

                    <Select defaultActiveFirstOption={userDatas ? userDatas.specality : null}>
                        <Select.Option value="IT mühəndis">IT mühəndis</Select.Option>
                        <Select.Option value="Proyekt meneceri">Proyekt meneceri</Select.Option>
                        <Select.Option value="Data analitik">Data analitik</Select.Option>
                        <Select.Option value="Marketinq direktoru">Marketinq direktoru</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name={['user', 'gender']}
                    label="Cins"
                    rules={[
                        {
                            type: 'radio', required: true
                        },
                    ]}>
                    <Radio.Group defaultValue={userDatas ? userDatas.gender : null}>
                        <Radio value="man"> Man </Radio>
                        <Radio value="woman"> Woman </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item valuePropName="checked"
                    name={['user', 'updates']}
                    label="Yeniliklər"
                    rules={[
                        {
                            type: 'switch'
                        },
                    ]}>
                    <Switch defaultChecked={userDatas ? userDatas.updates : null} />
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
