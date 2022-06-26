import React, { useEffect, useContext } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import RevenuesContext from '../context/RevenuesContext';
import HeaderRevenue from '../components/HeaderRevenue';
import ShowDetailsRevenues from '../components/ShowDetailsRevenues';
import VideoRevenues from '../components/VideoRevenues';
import Button from '../components/Button';
import CarouselRevenues from '../components/CarouselRevenues';
import '../styles/FoodAndDrinkDetails.css';

function FoodAndDrinkDetail() {
  const { id } = useParams();
  const history = useHistory();
  const {
    getDataById,
    exibitionDetails,
    getData,
    verifyRecipiesStorage,
    doneRecipes,
    progressRecipies,
    alertShare,
  } = useContext(RevenuesContext);
  const location = useLocation().pathname;
  const locationName = location.split('/')[1];
  const [revenueDetails] = exibitionDetails;

  useEffect(() => {
    if (locationName === 'foods') {
      getDataById('foods', id);
      getData('drinks');
      verifyRecipiesStorage(id, 'meals');
    } else {
      getDataById('drinks', id);
      getData('foods');
      verifyRecipiesStorage(id, 'cocktails');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div>
      {revenueDetails
      && (
        <div>
          <HeaderRevenue />
          {alertShare && <span>Link copied!</span>}
          <ShowDetailsRevenues />
          {revenueDetails.strYoutube
          && <VideoRevenues
            video={ revenueDetails.strYoutube }
          />}
          <CarouselRevenues />
          {doneRecipes ? null
            : (
              <div className="container-recomendation">
                <Button
                  name={ progressRecipies ? 'Continue Recipe' : 'Start Recipe' }
                  dataTestId="start-recipe-btn"
                  disabled={ false }
                  onClick={ () => history.push(`${location}/in-progress`) }
                />
              </div>)}
        </div>
      )}
    </div>
  );
}

export default FoodAndDrinkDetail;
