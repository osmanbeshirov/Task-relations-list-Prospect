import React, { useContext } from 'react'

import { Button, Form, Input, Select, Radio, Switch } from 'antd';

import '../MainForm/mainForm.css'

import ContactContext from '../../context/ContactContext';

import useLocalStorage from '../../hooks/useLocalStorage';
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

export default function MainForm() {


    const { addToTable } = useContext(ContactContext)

    const navigate = useNavigate()

    // const [id, setId] = useLocalStorage('id', 0)

    // const handleSubmit = () => {
    //     setId(id + 1);

    // }

    const onFinish = (values) => {

        addToTable(values)

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
                    <Input />
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
                    <Input />
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
                    <Input />
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
                    <Input />
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

                    <Input.TextArea />
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

                    <Select >
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
                    <Radio.Group>
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
                    <Switch />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Əlaqəni yarat
                    </Button>
                </Form.Item>

            </div>
        </Form >
    )
}
