import { Content, Container } from './style';
import { Text, Main } from "grommet";
import Header from './header';
import Footer from './footer';

const SimpleLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>
        <Content>
          {children}
        </Content>
        <Footer />
      </Main>
    </Container>
  );
};

export default SimpleLayout;