import React from 'react';
import { categories } from '../../data';
import CategoryItem from '../category-item';
import { Container } from './Categories.style';

const Categories = (): JSX.Element => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
