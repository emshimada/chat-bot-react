import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit';
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import 'react-chatbot-kit/build/main.css';

function App() {
  return (
    <div className="App">
      <div style = {{maxWidth:"300px"}}>
          <Chatbot
          config ={config}
          actionProvider ={ActionProvider}
          messageParser = {MessageParser}
         />
      </div>

    </div>
  );
}

export default App;
