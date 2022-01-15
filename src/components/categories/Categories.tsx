import React from 'react';
import { categories } from '../../data';
import CategoryItem from '../category-item';
import { Container } from './Categories.style';

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
