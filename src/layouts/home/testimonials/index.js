import { useCallback, useState } from 'react';
import { ScreenReaderText } from 'styles/typography';
import {MainTitle, Title, Copy, Slider, SliderInner, Slide, SlideInner, Container, Thumb, Content, ArrowLeftBtn, ArrowLeft, ArrowRightBtn, ArrowRight} from './style';
// import somethingSrc from '../new-episodes/dude';

const items = [
  <Slide key={0}>
    <SlideInner>
      <Thumb />
      <Content>
        <Title>Bart Simpson</Title>
        <Copy>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.</Copy>
      </Content>
    </SlideInner>
  </Slide>,
  <Slide key={1}>
    <SlideInner>
      <Thumb />
      <Content>
        <Title>Groundskeeper Will</Title>
        <Copy>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</Copy>
      </Content>
    </SlideInner>
  </Slide>,
  <Slide key={2}>
    <SlideInner>
      <Thumb />
      <Content>
        <Title>Mister Burns</Title>
        <Copy>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of.</Copy>
      </Content>
    </SlideInner>
  </Slide>
];

const Podcasts = () => {
  const [slide, setSlide] = useState(0);

  const onPrev = useCallback(() => {
    if(slide > 0) {
      setSlide(slide - 1);
    }
  }, [slide, setSlide]);

  const onNext = useCallback(() => {
    if(slide < (items.length - 1)) {
      setSlide(slide+1);
    }
  }, [slide, setSlide]);

  return (
    <Container>
      <MainTitle>Media Training Testimonials</MainTitle>
      <Slider>
        <SliderInner>
          {items.map((el, i) => {
            if(i === slide) {
              return el;
            }
          })}
          {slide > 0 &&
            <ArrowLeftBtn type='button' onClick={onPrev}>
              <ArrowLeft />
              <ScreenReaderText>Previous</ScreenReaderText>
            </ArrowLeftBtn>}
          {slide < (items.length - 1) && 
            <ArrowRightBtn type='button' onClick={onNext}>
              <ArrowRight />
              <ScreenReaderText>Next</ScreenReaderText>
            </ArrowRightBtn>}
        </SliderInner>
      </Slider>
    </Container>
  )
}

export default Podcasts;