import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import ReelLinks from '../../components/ReelLinks';

const Reel2004 = () => (
  <Layout>
    <div id="contentwrapper">
      <div id="contentreel">
        <div id="fixwidthreel">
          <div id="headreel">
            <iframe src="http://player.vimeo.com/video/9674939" width="560" height="420" frameBorder="0" />
          </div>
        </div>
      </div>
      <div id="content">
        <div id="fixwidth">
          <div id="singlecollum">
            <div id="head">
              <h5>Reel 2004</h5>
            </div>
            <div id="contentcolb">
              <h2>Network Seven - Various</h2>I worked at Network Seven from 2001 to 2004 in the 3D visual effects
              department. Part of a 3 Person team we were responsible for creating visual effects for:
              <br />
              <br />
              <ul className="reellist">
                <li>Program titles and graphic packages</li>
                <li>Station on air Idents</li>
                <li>Station branding</li>
                <li>On air promotion</li>
                <li>Special Events TV Spots</li>
                <li>
                  Misc visual effects (visualizations, real time sets, Research and Development)
                  <br />
                </li>
              </ul>
              <p>
                {' '}
                <span className="subheadingb">Duties:</span>
                <br />
                As part of a small team we were required to be a generalist and be able to complete a project from start
                to finish; from planning and previs, matchmove, mattepaint, animation, FX, lookdev lighting right to
                compositing. On larger projects we would specialize where our strengths were, for me it was lighting and
                compositing.
              </p>
              Projects can range from 1 day to 3 months in length/budget. We were expected to work extremely efficiently
              and know where to cut corners when we can whilst still keeping a standard the station has came accustomed
              to.
              <p>
                <span className="subheadingb">Awards:</span>
                <br />
                Torino Winter Olympics titles -{' '}
                <span className="textgold">Winner Gold PROMAX; Best Special Event Titles</span>
                <br />
                Athens Olympics titles - <span className="textgold">Winner Gold AEAF; Best Program Titles 2004</span>
                <br />
                Salt Lake Winter Olympics titles -{' '}
                <span className="textgold">
                  Winner Gold AEAF; Best Program Titles 2002
                  <br />
                </span>
                Station Idents - <span className="textgold">Numerious Promax awards</span>
                <span className="spacer">.</span>
                <img src="/static/images/2004.jpg" alt="seq01" width="600" height="1049" className="imagefloat" />
              </p>
            </div>
            <div id="contentcola" className="fadeform">
              <h2>Watch other Reels</h2>
              <ReelLinks id="2004" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Reel2004;
