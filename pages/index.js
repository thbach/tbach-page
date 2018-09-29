import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Head>
      <title>Thai Bach - Digital Artist - Online Portfolio</title>
      <link href="/static/css/ie.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/reset.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/thaibachStyle.css" rel="stylesheet" type="text/css" />
    </Head>
    <div id="wrapper">
      <div id="headerwrapper">
        <div id="headerhome">
          <Link href="/">
            <a>
              {' '}
              <img
                src="/static/images/logonamesmall.png"
                alt="Thai Bach - Digital Artist"
                width="287"
                height="65"
                className="homelogo"
              />
            </a>
          </Link>
        </div>
      </div>
      <div id="navwrapper">
        <div id="nav">
          <Link href="/reel">
            <a className="reel">REEL</a>
          </Link>
          <Link href="/history">
            <a className="history">HISTORY</a>
          </Link>
          <Link href="/about">
            <a className="about">ABOUT</a>
          </Link>
        </div>
      </div>
      <div id="homecontentwrapper">
        <div id="content">
          <h3>
            Hi! Welcome,{' '}
            <span className="subtitle">
              <br />
              I'm a digital artist (Lighting/LookDev and Compositing) with over 10 years experience. Creating beautiful
              imagery is what I do!
            </span>
          </h3>
          <div id="fixwidthhome">
            <div id="contentcolahome">
              <Link href="/reel">
                <a>
                  <img src="/static/images/2010home.jpg" width="620" height="260" alt="2008reel" />
                </a>
              </Link>
            </div>
            <div id="contentcola">
              <Link href="/reel2008">
                <a>
                  <img src="/static/images/2008home.jpg" width="280" height="120" alt="2008reel" />
                </a>
              </Link>
              <span className="spacerhome">.</span>
              <Link href="reel2004">
                <a>
                  <img src="/static/images/2004home.jpg" width="280" height="120" alt="2008reel" />
                </a>
              </Link>
            </div>
          </div>
          <div id="contentcolchome">
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default Home;
