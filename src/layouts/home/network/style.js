import styled from 'styled-components';
import {Heading} from "styles/typography";

import {
  SplitContainer as SplitContainerBase,
  ImgContainer,
  ContentContainer as ContentContainerBase,
  Container,
  Img as ImgBase,
  Button,
  Title as TitleBase,
  Paragraph
} from '../coaching/style';
import colors from "styles/colors";

export const SplitContainer = styled(SplitContainerBase)`
  background-image: linear-gradient(to bottom, #a5055f, #b52070);
  color: ${colors.white};

  p {
    color: ${colors.white};
  }

  @media(max-width: 991px) {
    background-color: ${colors.lightGrey};
  }
`;

export const ContentContainer = styled(ContentContainerBase)`
  @media(min-width: 769px) {
    padding: 220px 120px;
  }

  @media(max-width: 991px) {
    background: ${colors.lightGrey};

    ${Paragraph} {
      color: ${colors.darkGrey};
    }
  }
`;

export const Title = styled(TitleBase)`
  color: ${colors.white};

  @media(max-width: 768px) {
    background: ${colors.pink};
    font-weight: normal;
  }
`;

export const Img = styled(ImgBase)`
  @media(max-width: 768px) {
    object-position: top center;
  }
`;

export {
  Button,
  Container,
  ImgContainer,
  Paragraph,
  Heading
};
