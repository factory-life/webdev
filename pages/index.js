import Home from 'layouts/home';
import withPageLogic, { withPageProps } from 'components/util/mobile-headers';

export {
  withPageProps as getServerSideProps
};

export default withPageLogic(Home);