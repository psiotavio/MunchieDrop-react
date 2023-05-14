import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './foodOption.scss';
import { ButtonComponent } from '../buttonComponent/button.tsx';

interface FoodOptionProps {
  image: string;
  title: string;
  price: string;
  cartButtonText: string;
  onCartButtonClick: () => void;
}

const FoodOption: React.FC<FoodOptionProps> = ({
  image,
  title,
  price,
  cartButtonText,
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
        <ButtonComponent type={'secondary'} onClick={function (): void {
                  throw new Error('Function not implemented.');
              } } children="Add to Cart" size={3} id={''} />
      </CardActions>
    </Card>
  );
};

export default FoodOption;
