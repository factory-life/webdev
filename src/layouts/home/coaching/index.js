import {Title, MobileHide, Paragraph, SplitContainer, ImgContainer, ContentContainer, Img, Button, ButtonRow, Download} from './style';
import pressSrc from './coaching.png';
import mobileSrc from './coaching-mobile.png';
import { useContext } from 'react';
import { DeviceContext } from 'contexts/device';

const Coaching = () => {
  const {isMobile} = useContext(DeviceContext);

  return (
    <SplitContainer id="media-training">
      <ImgContainer>
        <Img src={ isMobile ? mobileSrc.src : pressSrc.src } />
      </ImgContainer>
      <ContentContainer>
        <Title><MobileHide>Jane Dutton</MobileHide> Coaching &amp; Media Training</Title>
        <Paragraph>
        Become the Trusted voice for your organisation or just grow your public speaking confidence.In a highly competitive field, Jane Dutton shares her insights and expertise learnt in the newsroom and on the field, across the globe and over many decades on authentic and controlled presentation. Facing the media or delivered information to a room full of people can be petrifying, but not if you have the presentation and delivery skills necessary. Jane will teach you how to present yourself, to control the narrative when facing the media, how to look and sound convincing and turn every situation into a winning one.
        </Paragraph>
        <ButtonRow>
          <Button href={'#contact'}>Contact Us</Button>
          <Download style="background: #B21B6D 0% 0% no-repeat padding-box;" href={'/Jane-Dutton.docx'}>Download Testimonial</Download>
        </ButtonRow>
      </ContentContainer>
    </SplitContainer>
  )
}

export default Coaching;