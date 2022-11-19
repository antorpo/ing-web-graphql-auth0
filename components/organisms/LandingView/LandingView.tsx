import LandingCarousel from 'components/organisms/LandingView/LandingCarousel/LandingCarousel';
import MainNavbar from 'components/molecules/MainNavbar/MainNavbar';
import Head from 'next/head'
import LandingFooter from './LandingFooter/LandingFooter';
import LandingContent from './LandingContent/LandingContent';

const LandingView = () => {
    return <div>
    <Head>
      <title>Restaurant</title>
      <meta name="description" content="Aplicación básica de Restaurante" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <MainNavbar />
    <LandingCarousel />
    <LandingContent />
    <LandingFooter />
  </div>;
};

export default LandingView;