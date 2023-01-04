import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import Layout from 'layouts/base/simple';
import { Container } from './style';
import Intro from './intro';
import Partners from './partners';
import Coaching from './coaching';
import Podcasts from './podcasts';
import Episodes from './new-episodes';
import Network from './network';
import Testimonials from './testimonials';
import VideoModal from 'layouts/video-modal';

const Home = () => {
  const [currentVideoModal, setCurrentVideoModal] = useState(null);

  return (
    <React.Fragment>
      <Head>
        <title>Jane Dutton Network</title>
      </Head>
      <Layout>
        <Container>
          <Intro />
          <Episodes setCurrentVideo={setCurrentVideoModal} />
          <Network />
          <Podcasts setCurrentVideo={setCurrentVideoModal} />
          <Coaching />
          {/* <Testimonials /> */}
          <Partners />
        </Container>
        {currentVideoModal && 
          <VideoModal onClose={() => setCurrentVideoModal(null)} video={currentVideoModal} />}
      </Layout>
    </React.Fragment>
  )
}

export default Home;