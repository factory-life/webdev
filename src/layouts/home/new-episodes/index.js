import {
  Container, Blocks, Big, MainTitle, BlockTitleShrink, Block, BlockInner, BlockTitle, VideoIcon, SmallTitle, MedTitle, Thin
} from './style';
import landscapeSrc from './landscape.png';
import coinsSrc from '../podcasts/coins.png';

import data from 'data/episodes';

const Episodes = ({ setCurrentVideo }) => {
  return (
    <Container>
      <Blocks>
        <Block href={data.pickingUp[0].url} onClick={() => setCurrentVideo(data.pickingUp[0])}>
          <BlockInner src={landscapeSrc.src}>
            <BlockTitle as='h4'>
              <Big>
                Picking up
              </Big>
               <SmallTitle>South Africa</SmallTitle>
            </BlockTitle>
            <VideoIcon />
          </BlockInner>
        </Block>
        <Block href={data.money[0].url} onClick={() => setCurrentVideo(data.money[0])}>
          <BlockInner src={coinsSrc.src}>
            <BlockTitleShrink>
              <MedTitle>Biz News</MedTitle>
              <Big>MON€¥ <Thin>101</Thin></Big>
            </BlockTitleShrink>
            <VideoIcon />
          </BlockInner>
        </Block>
      </Blocks>
    </Container>
  )
}

export default Episodes;