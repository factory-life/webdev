import {Title, Container, Image, Items, Button, ImageContainer} from './style';
import Awake from './awake-online@2x.png';
import Picture from './picture-tree@2x.png';
import Mediante from './mediante@2x.png';
import Biz from './Logo-Full@2x.png';

const ImageItem = props => {
  return (
    <ImageContainer>
      <Image {...props} />
    </ImageContainer>
  );
}

const Partners = () => {
  return (
    <Container id="partners">
      <Title>Partners</Title>

      <Items>
        <ImageItem width={306} alt="Mediante" src={Mediante.src} />
        <ImageItem width={181} alt="Picture Tree" src={Picture.src} />
        <ImageItem width={178} alt="Awake Online" src={Awake.src} />
        <ImageItem width={178} alt="Biz News" src={Biz.src} />
      </Items>

      {/* <Button href={'/partners'}>Partner with us</Button> // button isn't properly implemented yet */}
    </Container>
  )
}

export default Partners;