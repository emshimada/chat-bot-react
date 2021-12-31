import DogPicture from "./components/DogPicture/DogPicture.jsx";

// ActionProvider starter code
class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  greet = () => {
    const message = this.createChatBotMessage(
      "Olá, eu sou seu atendente virtual."
    );
    this.addMessageToState(message);
  };

  handleDog = () => {
    const message = this.createChatBotMessage(
      "Aqui está uma foto de um cachorro.",
      {
        widget: 'dogPicture',
      },
    );
    this.addMessageToState(message)
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
