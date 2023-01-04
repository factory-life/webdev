import ContactForm from "layouts/contact/form";
import { Footer } from "grommet";
import {Split, Fixed, Flex, Copyright, FooterContainer} from './style';
import FollowLinks from './follow';

const FooterWhole = () => {
  return (
    <Footer background="darkGrey" flex={false} id="contact">
      <FooterContainer>
        <Split>
          <Fixed>
            <ContactForm />
          </Fixed>
          <Flex>
            <FollowLinks />
          </Flex>
        </Split>
        <Copyright>
          Copyright The Jane Dutton Network { new Date().getFullYear() }
        </Copyright>
      </FooterContainer>
    </Footer>
  );
}

export default FooterWhole;