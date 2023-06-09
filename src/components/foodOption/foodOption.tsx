import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './foodOption.scss';
import { ButtonComponent } from '../buttonComponent/button';

interface FoodOptionProps {
  image: string;
  title: string;
  price: string;
  cartButtonText?: string;
  showButton?: boolean;
  onCartButtonClick: () => void;
}

const FoodOption: React.FC<FoodOptionProps> = ({
  image,
  title,
  price,
  cartButtonText,
  showButton = true,
  onCartButtonClick,
}) => {
  return (
    <Card className="food-option-card">
      <CardMedia className="food-photo" component="img" alt="Food" image={image} />
      <CardContent className="food-content">
        <Typography className="food-name" gutterBottom variant="h4" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions className="food-buy" >
      <Typography className="food-price" variant="body2" color="text.secondary">
          {price}
        </Typography>
        {showButton &&(
        <ButtonComponent type={'secondary'} onClick={onCartButtonClick} children="Add to Cart" size={3} id={''} />
  )}
      </CardActions>
    </Card>
  );
};

export default FoodOption;
