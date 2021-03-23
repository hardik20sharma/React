import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import ParentComponent from './components/ParentComponent';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline'
import './components/appStyles.css'
import styles from './components/appStyles.module.css'
import Demo from './components/Demo'
import Table from './components/Table';
import Form from './components/Form';

function App() {
  return (
    <div className="App">

      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is a paragrah. Comes under props children.</p>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman">
        <button>This is a button. Comes under props children</button>
      </Greet>
      <Greet name="Tony" heroName="Iron Man">
      </Greet>

      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Diana" heroName="Wonder Woman" />
      <Welcome name="Tony" heroName="Iron Man" />

      <Message />

      <Counter />

      <ParentComponent />

      <FunctionClick />

      <ClassClick />

      <EventBind /> */}

      {/* <UserGreeting /> */}

      {/* <NameList /> */}

      {/* <Stylesheet primary={true} />
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* <Demo />
      <Table /> */}

      <Form />

    </div>
  );
}

export default App;