import {CloseButton, EpisodesTop, EpisodesBottom, List, ListItem, ListLink, Title, MedTitle, Thin, Big, VideoIcon, SmallTitle, PodcastMedTitle, BlockTitleShrink, BlockTitleBottom, Container, Blocks, Block, Icon, Bottom, BlockInner, BlockTitle, BlockComingSoon, EpisodeListContainer} from './style';

import coinsSrc from './coins.png';
import dudeSrc from './dude@2x.png';
import deskSrc from './desk.png';
import data from 'data/episodes';

import { BsX } from 'react-icons/bs';

import React, { useState } from 'react';
import { ScreenReaderText } from 'styles/typography';

const EpisodeList = ({ episodes, setCurrentVideo }) => {
  console.log('asd', episodes);

    return (
      <EpisodeListContainer>
        <List>
          {!!episodes && episodes.map((ep, i) => {
            return (
              <ListItem key={i}>
                <ListLink
                  href={ep.url}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentVideo(ep);
                  }}
                >Episode {i + 1}</ListLink>
              </ListItem>
            );
          })}
        </List>
      </EpisodeListContainer>
    )
};

const BlockManaged = ({ children, episodes, setCurrentVideo }) => {
  const [isOpen, setOpen] = useState(false);

  const onClick = () => setOpen(!isOpen);
  const onClose = () => setOpen(false);

  return (
    <Block>
      {isOpen && <CloseButton onClick={onClose}><BsX /><ScreenReaderText>Close</ScreenReaderText></CloseButton>}
      {children({ onClick })}
      {isOpen && <EpisodeList setCurrentVideo={setCurrentVideo} episodes={episodes} />}
    </Block>
  )
}

const PickingUp = ({ setCurrentVideo }) => {
  return (
    <BlockManaged episodes={data.pickingUp} setCurrentVideo={setCurrentVideo}>
      {({ onClick }) => (
        <BlockInner src={dudeSrc.src}>
          <BlockTitle as='h4'>
            <Big>Picking up</Big>
            <SmallTitle>South Africa</SmallTitle>
          </BlockTitle>
          <Bottom>
            <BlockTitleBottom onClick={onClick}>
              View episodes
              <Icon/>
            </BlockTitleBottom>
          </Bottom>
        </BlockInner>
      )}

    </BlockManaged>
  )
};

const Money = ({ setCurrentVideo }) => {
  return (
    <BlockManaged episodes={data.money} setCurrentVideo={setCurrentVideo}>
      {({ onClick }) => (
        <BlockInner src={coinsSrc.src}>
          <BlockTitleShrink as='h4'>
            <MedTitle>Biz News</MedTitle>
            <Big>MON€¥ <Thin>101</Thin></Big>
          </BlockTitleShrink>
          <Bottom>
            <BlockTitleBottom onClick={onClick}>
              View episodes
              <Icon/>
            </BlockTitleBottom>
          </Bottom>
        </BlockInner>
      )}
    </BlockManaged>
  )
};

const Podcasts = ({ setCurrentVideo }) => {
  return (
    <Container id="podcasts-vodcasts">
      <Title>Podcasts &amp; Vodcasts</Title>
      <Blocks>
        <PickingUp setCurrentVideo={setCurrentVideo} />
        <Money setCurrentVideo={setCurrentVideo} />
        <BlockComingSoon as='div'>
          <BlockInner src={deskSrc.src}>
            <BlockTitleShrink>
              <MedTitle>Podcast</MedTitle>
              <Big>Deep dive</Big>
            </BlockTitleShrink>
            <Bottom>
              <BlockTitleBottom disabled>
                Coming soon
              </BlockTitleBottom>
            </Bottom>
          </BlockInner>
        </BlockComingSoon>
      </Blocks>
    </Container>
  )
};

export default Podcasts;