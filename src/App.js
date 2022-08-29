import './App.css';

import { Row, Col } from 'antd'
import Header from './containers/Header/Header';
import NewRelation from './components/NewRelation/NewRelation';
import Contacts from './containers/Contacts/Contacts';

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
            <Contacts />
          </Col>
        </Row>

      </div>
    </div>
  );
}

export default App;
