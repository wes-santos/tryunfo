import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      onKeyUpChange,
      hasTrunfo,
    } = this.props;
    return (
      <form className="create-card-form">
        <label htmlFor="card-name">
          <div>Nome</div>
          <input
            type="text"
            name="cardName"
            id="card-name"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            className="name-input"
            placeholder="Digite o nome da carta aqui"
          />
        </label>
        <label htmlFor="card-description">
          <div>Descrição</div>
          <input
            type="textarea"
            name="cardDescription"
            id="card-description"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            className="description-input"
          />
        </label>
        <div className="attributes">
          <label htmlFor="first-card-attribute">
            Attr01
            <input
              type="number"
              name="cardAttr1"
              id="first-card-attribute"
              onKeyUp={ onKeyUpChange }
              value={ cardAttr1 }
              onChange={ onInputChange }
              max={ 90 }
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="second-card-attribute">
            Attr02
            <input
              type="number"
              name="cardAttr2"
              id="second-card-attribute"
              onKeyUp={ onKeyUpChange }
              value={ cardAttr2 }
              onChange={ onInputChange }
              max={ 90 }
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="third-card-attribute">
            Attr03
            <input
              type="number"
              name="cardAttr3"
              id="third-card-attribute"
              onKeyUp={ onKeyUpChange }
              value={ cardAttr3 }
              onChange={ onInputChange }
              max={ 90 }
              data-testid="attr3-input"
            />
          </label>
        </div>
        <label htmlFor="card-image">
          Imagem
          <input
            type="text"
            name="cardImage"
            id="card-image"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            className="image-input"
          />
        </label>
        <label htmlFor="rarity-card">
          <div>Raridade</div>
          <select
            name="cardRare"
            id="rarity-card"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            className="card-rare"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="super-trunfo">
          <div className="trybe-trunfo">
            {hasTrunfo === false ? (
              <>
                <p>Super Trybe Trunfo</p>
                <input
                  type="checkbox"
                  name="cardTrunfo"
                  id="super-trunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  data-testid="trunfo-input"
                />
              </>
            ) : (
              <p>Você já tem um Super Trunfo em seu baralho</p>
            )}
          </div>
        </label>
        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
          className="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onKeyUpChange: PropTypes.func.isRequired,
};

export default Form;
