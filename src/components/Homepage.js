import * as React from 'react';
import AppFooter from './modules/views/AppFooter';
import MainpageBox from './modules/views/MainpageBox';
import AppBar from './modules/views/AppBar';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppBar></AppBar>
      <MainpageBox></MainpageBox>
      {/* <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero /> */}
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
