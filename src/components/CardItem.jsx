import React from 'react';
import PropTypes from 'prop-types';

function CardItem({ card, handleChoice }) {
    
    const handleClick = (e) => {
        handleChoice(card)
        e.currentTarget.classList.toggle('green')
    }
  return (
    <div onClick={handleClick} className={card.matched ? 'card flipped' : 'card'}>
      <div >{card.word}</div>
    </div>
  );
}

export default CardItem;

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
  handleChoice: PropTypes.func.isRequired, 
//   flipped: PropTypes.bool.isRequired,
};
