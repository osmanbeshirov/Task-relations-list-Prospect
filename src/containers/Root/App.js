import './App.css';

import { Row, Col } from 'antd'
import Header from '../Header/Header';
import Contacts from '../Contacts/Contacts';

import { Routes, Route, Navigate } from 'react-router-dom'
import NewContacts from '../NewContacts/NewContacts';
import EditContacts from '../EditContacts/EditContacts';
import ContactsLayout from '../Contacts/ContactsLayout';

import { ContactProvider } from '../../context/ContactContext';

function App() {

  return (
    <ContactProvider>
      <div className='app' >
        <div className='container'>
          <Row>
            <Col span={24}>
              <Header />
            </Col>
          </Row>

          <Row>
            <Col span={24}>

              <Routes>
                <Route path='/' element={<Navigate to={'/contacts'} />} />
                <Route path='/contacts' element={<ContactsLayout />} >

                  <Route index={true} element={<Contacts />} />

                  <Route path='new' element={<NewContacts />} />

                  <Route path='edit/:id' element={<EditContacts />} />
                </Route>

              </Routes>

            </Col>
          </Row>

        </div>
      </div>
    </ContactProvider>
  );
}

export default App;
