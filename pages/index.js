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
      <link href="/static/css/timeline.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/reelstyles.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/formstyle.css" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
    </Head>
    <div className="card">
      <p className="name">THAI BACH</p>
      <div className="icons-container">
        <span className="icon">
          <a href="https://uk.linkedin.com/in/thaibach" target="_blank">
            <img id="linked" src="/static/svg/linkedin.svg"/>
          </a>
        </span>
        <span className="icon">
          <a href="https://www.imdb.com/name/nm4128602/" target="_blank">
            <img id="imdb" src="/static/svg/imdb.svg"/>
          </a>
        </span>
        <span className="icon" />
        <span className="icon">
          <a href="https://github.com/thbach" target="_blank">
            <img id="github" src="/static/svg/github.svg"/>
          </a>
        </span>
      </div>
<! --
      <p className="subtitle">
        <Link href="/home">
          <a>or head back in time to 2013...</a>
        </Link>
      </p>
-->    
    </div>
    <style jsx>
      {`
        .card {
          margin: auto;
          height: 100vh;
          width: 100%;
          padding: 20vh 0px 0px 0px;
          box-sizing: border-box;
          background-color: black;
          text-align: center;
        }
        .icons-container {
          display: flex;
          justify-content: center;
        }
        .icon {
          margin: 5px;
          padding-bottom: 100px;
          width: 10%;          
        }
        p {
          font-family: 'Montserrat', sans-serif;
        }
        .name {
          color: white;
          font-size: 9vw;
        }
        .subtitle a {
          color: #4f556f;
          font-size: 2vw;
        }
        .subtitle a:hover {
          color: #9fa5bb;
          cursor: pointer;
        }
      `}
    </style>       
  </div>
);

export default Home;
