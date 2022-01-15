import { ISliderItem } from '../../interface';
import {
  Button,
  Description,
  Image,
  ImageContainer,
  InfoContainer,
  SlideContainer,
  Title
} from './Slider.style';

const Slide = ({ slideItem }: { slideItem: ISliderItem }): JSX.Element => {
  return (
    <SlideContainer bg={slideItem.bg}>
      <ImageContainer>
        <Image src={slideItem.img} alt="slider" />
      </ImageContainer>
      <InfoContainer>
        <Title>{slideItem.title}</Title>
        <Description>{slideItem.desc}</Description>
        <Button>SHOP NOW</Button>
      </InfoContainer>
    </SlideContainer>
  );
};

export default Slide;
