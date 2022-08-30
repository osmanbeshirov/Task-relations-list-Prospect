import './App.css';

import { Row, Col } from 'antd'
import Header from './containers/Header/Header';
import NewRelation from './components/NewRelation/NewRelation';
import Contacts from './containers/Contacts/Contacts';

import { Routes, Route } from 'react-router-dom'
import NewContacts from './containers/NewContacts/NewContacts';

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
            <Routes>
              <Route path='/' element={<Contacts />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/contacts/new' element={<NewContacts />} />
            </Routes>

          </Col>
        </Row>




      </div>
    </div>
  );
}

export default App;
