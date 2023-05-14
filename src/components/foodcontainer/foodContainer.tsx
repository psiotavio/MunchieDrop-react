import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { ButtonComponent } from '../buttonComponent/button.tsx';
import './foodContainer.scss'

interface FoodContainerProps {
  image: string;
  onButtonClick: () => void;
  children: string;
}

export const FoodContainer: React.FC<FoodContainerProps> = ({
  image,
  onButtonClick,
  children,
}) => {
  return (
    <Card className='cards-component' sx={{ maxWidth: 345 , maxHeight: 345}} style={{ backgroundImage: `url(${image})`, borderRadius: '20px'}}>
      <CardActionArea className='all'>
        <div className='button'>
        <ButtonComponent type={'primary'} onClick={function (): void {
          throw new Error('Function not implemented.');
        } } children={children} size={2} id={''} />
        </div>
      </CardActionArea>
    </Card>
  );
};

