import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <div>
    <Head>
      <title>Thai Bach - Digital Artist - Online Portfolio</title>
      <link href="/static/css/ie.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/reset.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/thaibachStyle.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/timeline.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/reelstyles.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/formstyle.css" rel="stylesheet" type="text/css" />
    </Head>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
