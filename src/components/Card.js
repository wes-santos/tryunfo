/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  createCardTrunfo(cardTrunfo) {
    if (cardTrunfo) {
      return <p data-testid="trunfo-card" className="card-trunfo">Super Trunfo</p>;
    }
    return '';
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <section className="card-infos">
        <div className="first-card-layer">
          <div className="second-card-layer">
            <p data-testid="name-card" className="card-name">{cardName}</p>
            <img
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
              className="card-image"
            />
            <p data-testid="description-card" className="card-description">
              {cardDescription}
            </p>
            <div className="card-attributes">
              <div>
                <span data-testid="attr1-card" className="card-attribute">
                  Attr01....................................
                </span>
                <span className="attribute-value">{cardAttr1}</span>
              </div>
              <div>
                <span
                  data-testid="attr2-card"
                  className="card-attribute"
                >
                  Attr02....................................
                </span>
                <span className="attribute-value">{cardAttr2}</span>
              </div>
              <div>
                <span data-testid="attr3-card" className="card-attribute">
                  Attr03....................................
                </span>
                <span className="attribute-value">{cardAttr3}</span>
              </div>
            </div>
            <p data-testid="rare-card" className="rarity">{cardRare}</p>
            {this.createCardTrunfo(cardTrunfo)}
          </div>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
