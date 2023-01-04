import React from 'react';
import NextHead from 'next/head';
import { Site as Layout } from 'components/layout';
import {
  Container, StandardContentPage, ContentContainer
} from './style';
import Breadcrumb from 'components/breadcrumb';
import { contact } from 'components/core/router/urls/site/pages'
import PageTop from './sections/page-top';

import Form from './sections/form';

const ContactLayout = () => {
  return (
    <React.Fragment>
      <NextHead>
        <title>Contact us if you need any help or online support</title>
      </NextHead>
      <Layout headerStyle='light'>
        <StandardContentPage>
          <Container>
            <ContentContainer>
              <Breadcrumb
                withHome
                links={[
                  {
                    name: "Contact Us",
                    href: contact()
                  }
                ]}
              />
            </ContentContainer>
            <PageTop />
          </Container>
        </StandardContentPage>
        <Form />
      </Layout>
    </React.Fragment>
  );
};

export default ContactLayout;