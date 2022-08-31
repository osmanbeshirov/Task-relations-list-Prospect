import './App.css';

import { useReducer } from 'react'

import { Row, Col } from 'antd'
import Header from './containers/Header/Header';
import Contacts from './containers/Contacts/Contacts';

import { Routes, Route, Navigate } from 'react-router-dom'
import NewContacts from './containers/NewContacts/NewContacts';
import EditContacts from './containers/EditContacts/EditContacts';
import ContactsLayout from './containers/Contacts/ContactsLayout';

import State from '../src/context/State'

function App() {
  return (
    <div className='app' >
      <div className='container'>
        <Row>
          <Col span={24}>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <State>
              <Routes>
                <Route path='/' element={<Navigate to={'/contacts'} />} />
                <Route path='/contacts' element={<ContactsLayout />} >

                  <Route index={true} element={<Contacts />} />

                  <Route path='new' element={<NewContacts />} />

                  <Route path='edit/:id' element={<EditContacts />} />
                </Route>

              </Routes>

            </State>

          </Col>
        </Row>




      </div>
    </div>
  );
}

export default App;
