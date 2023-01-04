import {
  Container, Heading, SubHeading, Graphic, ContainerInner,
  Content, Overlay, Follow, Label, ShareLinks, ShareLink, Icon,
  DownBtn, DownArrow
} from './style';

import FbSrc from "layouts/base/simple/follow/fb.svg";
import InstaSrc from "layouts/base/simple/follow/insta.svg";
import YtSrc from "layouts/base/simple/follow/yt.svg";
import LinkedInSrc from "layouts/base/simple/follow/linkedin.svg";

const Podcasts = () => {
  return (
    <Container id="about">
      <Overlay />
      <ContainerInner>
        {/* <Graphic/> */}
        <Follow>
          <Label>Follow Us</Label>
          <ShareLinks>
            <ShareLink target="_blank" href={'https://www.facebook.com/jane.dutton.756'}><Icon src={FbSrc.src} title={'JDN on Facebook'} /></ShareLink>
            <ShareLink target="_blank" href={'https://www.instagram.com/janedutton/?hl=en'}><Icon src={InstaSrc.src} title={'JDN on Instagram'} /></ShareLink>
            <ShareLink target="_blank" href={'https://www.youtube.com/channel/UCANWPuZxPoPRAQRCOPo7eFg'}><Icon src={YtSrc.src} title={'JDN on YouTube'} /></ShareLink>
            <ShareLink target="_blank" href={'https://za.linkedin.com/in/jane-dutton-64400334'}><Icon src={LinkedInSrc.src} title={'JDN on LinkedIn'} /></ShareLink>
          </ShareLinks>
        </Follow>
        <Content>
          <SubHeading>Jane Dutton Network</SubHeading>
          <Heading>
            Content.<br/>
            Community.<br/>
            Coaching.<br/>
          </Heading>
          <DownBtn type='button' onClick={() => {}}><DownArrow /></DownBtn>
        </Content>
      </ContainerInner>
    </Container>
  )
}

export default Podcasts;