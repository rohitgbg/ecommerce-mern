import { Category } from '../../interface';
import { Button, Container, Image, Info, Title } from './CategoryItem.style';

interface ICategoryItem {
  item: Category;
}
const CategoryItem = ({ item }: ICategoryItem): JSX.Element => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
