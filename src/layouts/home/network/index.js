import { Title, Paragraph, SplitContainer, ImgContainer, ContentContainer, Img, Button } from './style';
import networkSrc from './press@2x.jpg';
import mobileSrc from './network-mobile.png';
import { DeviceContext } from 'contexts/device';
import { useContext } from 'react';

const Coaching = () => {
  const {isMobile} = useContext(DeviceContext);

  return (
    <SplitContainer id="services">
      <ImgContainer>
        <Img src={isMobile ? mobileSrc.src : networkSrc.src} />
      </ImgContainer>
      <ContentContainer>
        <Title>The Jane Dutton Network</Title>
        <Paragraph>
          Jane Dutton has anchored on the worlds biggest news broadcast agencies, like CNN (USA), Aljazeera (Middle East) BBC World, CNBC (UK) and South Africa's ENCA. She's back in South Africa and launching a platform that breaks the mould. Giving a fresh perspective to various topics from finance
          to serious social issues facing South Africa. Joined by local and international change makers and connecting with you on various media platforms. We invite you to join the conversation.
        </Paragraph>
      </ContentContainer>
    </SplitContainer>
  )
}

export default Coaching;