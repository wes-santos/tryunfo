import React from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      inputValues: [],
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const param = target.value.length;
    const limitNumber = 90;
    if (
      param <= 0
      || value > limitNumber
      || value < 0
    ) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
    this.setState({
      [name]: value,
    });
  }

  handleKeyUp = () => {
    const limit = 210;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    if (cardAttr1 !== ''
      && cardAttr2 !== ''
      && cardAttr3 !== ''
      && parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10)
      > limit) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    const cardName = document.getElementById('card-name');
    const cardDescription = document.getElementById('card-description');
    const cardImage = document.getElementById('card-image');
    const attr1 = document.getElementById('first-card-attribute');
    const attr2 = document.getElementById('second-card-attribute');
    const attr3 = document.getElementById('third-card-attribute');
    const cardRare = document.getElementById('rarity-card');
    const cleanInputs = () => {
      cardName.value = '';
      cardDescription.value = '';
      cardImage.value = '';
      attr1.value = 0;
      attr2.value = 0;
      attr3.value = 0;
      cardRare.value = 'normal';
      this.setState({
        cardName: '',
        cardImage: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardRare: '',
      });
    };
    const saveInputs = (prevState) => ({
      cardName: prevState.cardName,
      cardDescription: prevState.cardDescription,
      cardAttr1: (prevState.cardAttr1).toString(),
      cardAttr2: (prevState.cardAttr2).toString(),
      cardAttr3: (prevState.cardAttr3).toString(),
      cardImage: prevState.cardImage,
      cardRare: prevState.cardRare,
      cardTrunfo: prevState.cardTrunfo,
    });
    // Limpa os inputs
    this.setState((prevState) => ({
      inputValues: [...prevState.inputValues, saveInputs(prevState)],
    }));
    cleanInputs();
  }

  // Consultei o repositório do Higor Anjos para compreender onde eu estava errando nesta
  // parte para não passar em dois testes do requisito 09:
  // https://github.com/tryber/sd-018-b-project-tryunfo/blob/higor-anjos-project-tryunfo/src/App.js
  handleClick2 = ({ target: { name } }) => {
    const { inputValues } = this.state;
    const copyValues = [...inputValues];
    let hasTrunfo = false;
    inputValues.forEach((obj, index) => {
      if (obj.cardName === name) {
        copyValues.splice(index, 1);
      }
      if (obj.hasTrunfo === true) {
        hasTrunfo = true;
      } else {
        hasTrunfo = false;
      }
    });
    this.setState({
      inputValues: copyValues,
      cardTrunfo: hasTrunfo,
    });
  }

  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      inputValues,
    } = this.state;
    return (
      <main>
        <div className="apresentation">
          <img src="https://i.imgur.com/GTLE6PW.png" alt="tryunfo-logo" />
        </div>
        <div className="main-container">
          <Form
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1.toString() }
            cardAttr2={ cardAttr2.toString() }
            cardAttr3={ cardAttr3.toString() }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.handleClick }
            onInputChange={ this.handleChange }
            onKeyUpChange={ this.handleKeyUp }
            hasTrunfo={ cardTrunfo }
          />
          <Card
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1.toString() }
            cardAttr2={ cardAttr2.toString() }
            cardAttr3={ cardAttr3.toString() }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        {/* Créditos a Asafe Diniz por dar a dica do nanoid como key no Slack da turma:
            https://github.com/ai/nanoid/ */}
        <div className="created-cards-section">
          {
            inputValues.map(
              (obj) => (
                <div key={ nanoid() } className="created-cards-container">
                  <Card
                    key={ nanoid() }
                    cardName={ obj.cardName }
                    cardImage={ obj.cardImage }
                    cardDescription={ obj.cardDescription }
                    cardAttr1={ obj.cardAttr1.toString() }
                    cardAttr2={ obj.cardAttr2.toString() }
                    cardAttr3={ obj.cardAttr3.toString() }
                    cardRare={ obj.cardRare }
                    cardTrunfo={ obj.cardTrunfo }
                  />
                  <button
                    name={ obj.cardName }
                    data-testid="delete-button"
                    className="delete-button"
                    type="button"
                    onClick={ this.handleClick2 }
                  >
                    Excluir
                  </button>
                </div>),
            )
          }
        </div>
      </main>
    );
  }
}

export default App;
