import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import '../styles/CardRevenues.css';

function CardRevenues({ category, maxCard, nameCard }) {
  const { exibitionRevenues } = useContext(RevenuesContext);
  const location = useLocation().pathname.split('/')[1];
  const history = useHistory();
  const { id } = useParams();

  const handleClick = (idUrl) => {
    if (location === 'foods') {
      history.push(`/foods/${idUrl}`);
    }

    if (location === 'drinks') {
      history.push(`/drinks/${idUrl}`);
    }
  };

  return (
    <section className="carousel">
      {exibitionRevenues && (
        exibitionRevenues.map((revenue, index) => (
          index < maxCard ? (
            <button
              key={ revenue.idMeal || revenue.idDrink }
              onClick={ () => handleClick(revenue.idMeal || revenue.idDrink) }
              type="button"
              data-testid={ `${index}-${nameCard}` }
            >
              <div>
                {/* utilizar css para mudar o tamanho das imagens */}
                <img
                  width="153px"
                  height="150px"
                  src={ revenue.strDrinkThumb || revenue.strMealThumb }
                  alt={ `imagem-${revenue.strDrink || revenue.strMeal}` }
                  data-testid={ `${index}-card-img` }
                />
                <h3
                  data-testid={ id
                    ? `${index}-recomendation-title` : `${index}-card-name` }
                >
                  { revenue.strDrink || revenue.strMeal }
                </h3>
                {category && <p>{ revenue.strCategory }</p>}
              </div>
            </button>
          ) : null
        ))
      )}
    </section>
  );
}

CardRevenues.propTypes = {
  maxCard: PropTypes.number.isRequired,
  category: PropTypes.bool,
  nameCard: PropTypes.string.isRequired,
};

CardRevenues.defaultProps = {
  category: null,
};

export default CardRevenues;
