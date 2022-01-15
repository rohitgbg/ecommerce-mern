import React from 'react';
import { Category } from '../../interface';
import { Container } from './CategoryItem.style';
interface ICategoryItem {
  item: Category;
}
const CategoryItem = ({ item }: ICategoryItem) => {
  return <Container>CategoryItem {item.id}</Container>;
};

export default CategoryItem;
