import {Container, SocialLinks, AltLinks, Item, SmallHeading, Icon} from './style';
import Link from "layouts/elements/link";

import FbSrc from './fb.svg';
import YtSrc from './yt.svg';
import LinkedInSrc from './linkedin.svg';
import InstaSrc from './insta.svg';
import { useRouter } from 'next/router';


const Follow = () => {
  const { push } = useRouter();

  const scrollTo = (href) => e => {
    e.preventDefault();
    const anchor = document.querySelector(href);
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    push(href, href, {shallow: true});
  }

  return (
    <Container>
      <SmallHeading>Follow Our Channels</SmallHeading>
      <SocialLinks>
        <Item><Icon target="_blank" href={'https://www.facebook.com/jane.dutton.756'} src={FbSrc} title={'JDN on Facebook'} /></Item>
        <Item><Icon target="_blank" href={'https://www.instagram.com/janedutton/?hl=en'} src={InstaSrc} title={'JDN on Instagram'} /></Item>
        <Item><Icon target="_blank" href={'https://www.youtube.com/channel/UCANWPuZxPoPRAQRCOPo7eFg'} src={YtSrc} title={'JDN on YouTube'} /></Item>
        <Item><Icon target="_blank" href={'https://za.linkedin.com/in/jane-dutton-64400334'} src={LinkedInSrc} title={'JDN on LinkedIn'} /></Item>
      </SocialLinks>
    </Container>
  )
}


export default Follow;