// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./components/DogPicture/DogPicture.jsx";

const config = {
  botName: "Atendente",
  initialMessages: [createChatBotMessage("Olá eu sou Atendente.")],
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />
    },
  ],
};

export default config;
