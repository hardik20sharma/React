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

      <NameList />

    </div>
  );
}

export default App;