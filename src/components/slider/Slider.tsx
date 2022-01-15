import { useState } from 'react';
import { sliderItems } from '../../data';
import { ISliderItem } from '../../interface';
import Slide from './Slide';

import {
  Container,
  Arrow,
  StyledArrowLeftIcon,
  StyledArrowRightIcon,
  Wrapper
} from './Slider.style';

const Slider = (): JSX.Element => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideClick = (direction: string): void => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleSlideClick('left')}>
        <StyledArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item: ISliderItem) => {
          return <Slide key={item.id} slideItem={item} />;
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleSlideClick('right')}>
        <StyledArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
