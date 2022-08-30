import React from 'react'

import '../NewRelation/newRelation.css'
import { Link } from 'react-router-dom'

import { UserAddOutlined } from '@ant-design/icons';

export default function NewRelation() {
    return (
        <div className='new-relation-wrapper'>
            <Link to={'/contacts/new'}><UserAddOutlined /></Link>
        </div>
    )
}
