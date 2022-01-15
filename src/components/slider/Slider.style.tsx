import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: var(--coral); */
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div<{ direction: string }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--white-1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ direction }) => direction === 'left' && '10px'};
  right: ${({ direction }) => direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

export const StyledArrowLeftIcon = styled(ArrowLeftOutlined)`
  font-size: 2rem !important;
`;

export const StyledArrowRightIcon = styled(ArrowRightOutlined)`
  font-size: 2rem !important;
`;

export const Wrapper = styled.div<{ slideIndex: number }>`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
`;

export const SlideContainer = styled.div<{ bg: string }>`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ bg }) => `#${bg}`};
`;

export const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Image = styled.img`
  height: 80%;
  margin-left: 25%;
  margin-top: 30px;
`;

export const Title = styled.h1`
  font-size: 7rem;
`;

export const Description = styled.p`
  margin: 50px 0px;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 2rem;
  background-color: transparent;
  cursor: pointer;
`;
