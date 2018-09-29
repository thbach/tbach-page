import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const History = () => (
  <Layout>
    <div id="contentwrapper">
      <div id="content">
        <div id="fixwidth">
          <div id="head">
            <h5>History</h5>
          </div>
          <div id="singlecollum">
            <div id="contentcolb">
              <h2>Recent and Long Term Positions</h2>
              <p>
                <span className="historydate">2014 April - 2014 October </span>
                <br />
                <span className="historytitle">Industrial Light & Magic - Vancouver</span>
                <br />
                <span className="subheadingb">Senior Lighting TD</span>
                <br />
                Contracted at ILM on the feature film Teenage Mutant Ninja Turtles. Software used include Katana, PRMan,
                Nuke.
              </p>
              <br />
              <p>
                <span className="historydate">2014 February - 2014 April </span>
                <br />
                <span className="historytitle">Prime Focus World - Vancouver</span>
                <br />
                <span className="subheadingb">Senior Lighting &amp; LookDev Artist</span>
                <br />
                Contracted at Prime Focus World on the feature film Sin City 2. Software used include Maya, VRay, Nuke.
              </p>
              <br />
              <p>
                <span className="historydate">2013 January - 2014 February </span>
                <br />
                <span className="historytitle">Sony Imageworks - Vancouver</span>
                <br />
                <span className="subheadingb">Lighting &amp; Compositing Artist</span>
                <br />
                Contracted at Sony Imageworks on feature films. Software used include Katana, Arnold, Nuke. Projects -
                The Amazing Spider Man 2, Cloudy with a Chance of Meatballs 2.
              </p>
              <br />

              <p>
                <span className="historydate">2011 October - 2012 December </span>
                <br />
                <span className="historytitle">The Moving Picture Company - London</span>
                <br />
                <span className="subheadingb">Senior Lighting Artist/LookDev Artist</span>
                <br />
                Contracted at MPC on feature films. Software used include Maya, PRMan, Nuke. Projects - Prometheus,
                Total Recall, World War Z.
              </p>
              <br />
              <p>
                <span className="historydate">2011 January - April </span>
                <br />
                <span className="historytitle">Rising Sun Pictures - Adelaide</span>
                <br />
                <span className="subheadingb">Senior Lighting Artist</span>
                <br />
                Contracted at Rising Sun Pictures on feature films. Software used include Maya, PRMan, Nuke. Projects -
                The Green Lantern.
              </p>
              <br />
              <p>
                <span className="historydate">2010 May - September 2010 </span>
                <br />
                <span className="historytitle">Animal Logic - Sydney</span>
                <br />
                <span className="subheadingb">Senior Lighting &amp; Compositing Artist</span>
                <br />
                Contracted at Animal Logic for the animated feature Legends of the Guardians, Responsibilities include
                Key Lighting sequences and Shot Lighting, as well as final Compositing. All shots in stereo. Software
                used include Maya, PRMan and Nuke, proprietary software as well as some Python scripting
                <br />
                Returned to Animal Logic in 2011 May to July to work on the film - Lego Star Wars
              </p>
              <br />
              <p>
                <span className="historydate">2008 March - 2010 March</span>
                <br />
                <span className="historytitle">LucasFilm - Singapore</span>
                <br />
                <span className="subheadingb">Senior Lighting TD &amp; Compositing Artist</span>
                <br />I joined LucasFilm to work on Star Wars: The Clone Wars animated TV series. My duties include
                Lighting shots within Maya, rendering using the Mental Ray renderer, and compositing the final shots in
                Shake. The look and feel of the show is highly stylized, using light and colour to convey emotion and
                mood.
                <br />
              </p>
              <br />
              <p>
                <span className="historydate">2007 Jun - Dec</span>
                <br />
                <span className="historytitle"> Seven Network: Promotions - Sydney</span>
                <br />
                <span className="subheadingb">3D Lead, Lighting TD &amp; Compositing Artist</span>
                <br />I joined the Promotional department of the TV station: Seven Network. I was hired to lead a team
                of 3 artists to create visual effects for on air promos, program titles, station IDs etc. My duties
                included receiving scripts and briefs from the producers and then planning and delegating tasks for the
                team. My role was lighting and compositing the final pieces.
              </p>
              <br />
              <p>
                <span className="historydate">2006 Jan - Oct</span>
                <br />
                <span className="historytitle">Animal Logic - Sydney</span>
                <br />
                <span className="subheadingb">Digital Artist, Lighting TD &amp; Compositing Artist</span>
                <br />
                My main duties was Lighting and Compositing for TVC's, but as the needs arise I was called upon to do
                surfacing, fur and paint, animation and pre visualization. Primary software was Maya, PRMan and Shake.
                <br />
                You can see some of the TV commercials in my{' '}
                <Link href="reel2008">
                  <a>2008 work reel</a>
                </Link>
              </p>
              <br />
              <p>
                <span className="historydate">2001 - 2004 Jul</span>
                <br />
                <span className="historytitle">Seven Network: Design - Sydney</span>
                <br />
                <span className="subheadingb">Digital Artist, Designer</span>
                <br />
                In 2001 the Seven Network TV Station first opened its 3D digital effects department. As part of a 3
                person team, we created animations and effects for promotional tv spots, program titles, station IDs
                etc, some examples include:
                <br />
                Athens Olympics opening titles -{' '}
                <span className="textgold">Winner Gold AEAF; Best Program Titles 2004</span>
                <br />
                Salt Lake Winter Olympics opening titles -{' '}
                <span className="textgold">Winner Gold AEAF; Best Program Titles 2002</span>
                <br />
                please see the{' '}
                <Link href="/reel2004">
                  <a>2004 work reel</a>
                </Link>{' '}
                for further information
              </p>
              <br />
              <br />
            </div>
            <div id="contentcola">
              <span className="spacer">.</span>
              <br />
              <img
                src="/static/images/moveiPoster_tmnt.jpg"
                width="138"
                height="201"
                alt="Teenage mutant nunja turtles"
              />
              <img src="/static/images/moveiPoster_sc2.jpg" width="138" height="201" alt="Sin City 2" />
              <br />
              <img src="/static/images/moveiPoster_prom.jpg" width="138" height="201" alt="Prometheus" />
              <img src="/static/images/moveiPoster_sp2.jpg" width="138" height="201" alt="Spider Man 2" />
              <br />
              <img src="/static/images/moveiPoster_wwz.jpg" width="138" height="201" alt="World War Z" />
              <img
                src="/static/images/moveiPoster_cl2.jpg"
                width="138"
                height="201"
                alt="Cloudy With a chance of meatballs 2"
              />
              <br />
              <img src="/static/images/moveiPoster_tot.jpg" width="138" height="201" alt="Total Recall" />
              <img src="/static/images/moveiPoster_gog.jpg" width="138" height="201" alt="Legends of the Guardians" />
              <br />
              <img src="/static/images/moveiPoster_gl.jpg" width="138" height="201" alt="Green Lantern" />
              <img src="/static/images/moveiPoster_cw.jpg" width="138" height="201" alt="Clone Wars" />
            </div>
          </div>
          <div id="head">
            <h2>Previous Contract Work</h2>
          </div>
          <div id="contentcola" className="firstcol">
            <p>
              <span className="historytitle">Fuel VFX</span>
              <br />
              <span className="historydate">2010 Oct - Nov</span>
              <br />
              <span className="subheadingb">Lighting TD</span>
              <br />
              Lighting various TVC's. Including Vodafone infinity, Ford.
            </p>
            <br />
            <br />
            <span className="historytitle">Monkey Lab</span>
            <br />
            <span className="historydate">2006 Nov - Dec</span>
            <br />
            <span className="subheadingb">Design, Lighting &amp; Previs Artist</span>
            <br />
            Coca Cola Endless Summer TVC - Design for &quot;world machine&quot;, story boarding &amp; camera. surfacing
            and Lighting.
            <br />
            <br />
            <span className="historydate">2005 July - August</span>
            <br />
            <span className="subheadingb">Animator / Lighting TD</span>
            <br />
            The Gethers - Character animation and lighting for New Zealand TV Station C2
            <span className="textgold">
              <br />
              Winner of two BDA World Gold Awards; Intro and Idents
              <br />
              Winner of AGDA Awards Pinnacle winner
            </span>
            <br />
            <br />
            <span className="historydate">2004 Dec</span>
            <br />
            <span className="subheadingb">VFX Artist</span>
            <br />
            Foxtel Cable Re launch - Creating a TVC spots for the re launch of the cable company.
            <br />
            <br />
            <span className="historydate">2001 Jul</span>
            <br />
            <span className="subheadingb">VFX Artist</span>
            <br />
            <p>Electro Delicious - music video, creating a full CG music video.</p>
            <br />
            <br />
            <p>
              <span className="historytitle">Plump Films</span>
              <br />
              <span className="historydate">2007 May</span>
              <br />
              <span className="subheadingb">Lighting &amp; Compositing Artist</span>
              <br />
              Lighting and compositing for various TVC's.
            </p>
            <br />
            <br />
            <p>
              <span className="historytitle">XYZ Studios</span> - Melbourne
              <br />
              <span className="historydate">2007 Feb</span>
              <br />
              <span className="subheadingb">Lighting &amp; Compositing Artist</span>
              <br />
              Lighting TD on various TVC's. Including the &quot;Australian Made&quot; campaign.
            </p>
            <span className="spacer">.</span>
          </div>
          <div id="contentcola">
            <p>
              <span className="historytitle">Lemur Films</span>
              <br />
              <span className="historydate">2006 Dec</span>
              <br />
              <span className="subheadingb">Design. Motion Graphics</span>
              <br />
              Award winning documentary: Bomb Harvest. Working with the film director{' '}
              <span className="subtitle">Kim Wilczynski</span> to create the opening title. And to design the animated
              maps within the film.
            </p>
            <br />
            <br />
            <p>
              <span className="historytitle">Seven Network: Promos &amp; Design</span>
              <br />
              <span className="historydate">2006 Nov</span>
              <br />
              <span className="subheadingb">3D Lead, Lighting &amp; Compositing Artist</span>
              <br />
              Seven Promotions - character based station ID, supervision of animation and assets. Lighting and
              compositing.
              <br />
              <br />
              <span className="historydate">2006 Oct</span>
              <br />
              <span className="subheadingb">Design, Lighting &amp; Compositing Artist</span>
              <br />
              Sunrise (morning news) on air Package - Under the supervision of the creative director, creating the
              program's motion graphic elements.
              <br />
              <br />
              <span className="historydate">2005 Nov - 2006 Jan</span>
              <br />
              <span className="subheadingb">VFX Artist</span>
              <br />
              Torino Winter Olympics Program Titles - Creating effects such as snow and ice, lighting and compositing.
              <br />
              <span className="textgold">Winner Gold PROMAX; Best Special Event Titles</span>
              <br />
              <br />
              <span className="historydate">2005 April - May and 2005 Sept - Nov</span>
              <br />
              <span className="subheadingb">Design / VFX Artist</span>
              <br />
              Character animation and Lighting for TV Idents, Sales Reel. Effects for various Promo End tags
            </p>
          </div>
          <div id="contentcola">
            <p>
              <span className="historytitle">RGB Pictures</span>
              <br />
              <span className="historydate">2005 June</span>
              <br />
              <span className="subheadingb">Lighting TD</span>
              <br />
              Lighting for SBS News Idents and promotional graphics.
            </p>
            <br />
            <br />
            <p>
              <span className="historytitle">Hacket Films</span>
              <br />
              <span className="historydate">2005 March</span>
              <br />
              <span className="subheadingb">VFX Artist</span>
              <br />
              Enough Rope - Title sequence, animation and lighting.
            </p>
            <br />
            <br />
            <p>
              <span className="historytitle">Ambience Entertainment</span>
              <br />
              <span className="historydate">2004 Aug - 2005 Jan</span>
              <br />
              <span className="subheadingb">VFX Artist</span>
              <br />
              World Expo 2005 Aichi Japan - Toyota logo animation.
              <br />
              Panasonic Camera TVC Japan (Cherry Blossoms) - Effects, lighting and compositing
            </p>
            <br />
            <br />
            <p>
              <span className="historytitle">Animal Logic</span>
              <br />
              <span className="historydate">2001 Aug</span>
              <br />
              <span className="subheadingb">VFX Artist</span>
              <br />
              Energy Australia TVC - Effects, lighting and compositing.
            </p>
            <br />
            <br />
            <p>
              <span className="historytitle">Tribal DDB Sydney</span>
              <br />
              <span className="historydate">2000 Dec</span>
              <br />
              <span className="subheadingb">Web and Flash Artist</span>
              <br />
              Design and create an interactive map of the Northern Territory for the NT Tourism Commission.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default History;
