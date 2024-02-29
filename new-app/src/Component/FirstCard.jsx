import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://d3qdc2zh3mwabb.cloudfront.net/assets/blog/dinocorn-a5ffe0428e2f79bc08930c2053e7317802d514d00f2cf381168f5501116d36b0.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Easy to Use
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
