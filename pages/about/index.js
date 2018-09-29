import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const About = () => (
  <Layout>
    <div id="contentwrapper">
      <div id="content">
        <div id="fixwidth">
          <div id="head">
            <h5>About</h5>
          </div>
          <div id="contentcola" className="firstcol">
            <h2>An Intro</h2>
            <p>
              As a Lighting and Compositing artist my main focus has been bringing Light, Color and Emotion to computer
              generated content, working with creative teams to create amazing and beautiful imagery.
              <br />
              <br />
              <img
                src="/static/images/thaiPic02.jpg"
                alt="Picture of Thai Bach"
                width="200"
                height="296"
                className="centerimage"
              />
              <br />
            </p>
            <h2>Professional Traits</h2>
            <span className="subheadingb">Artistic Drive</span>
            <br />
            Starting my career as a designer has given me the knowledge of seeing not only what looks right but what is
            beautiful. With this background I am able to objectively critique my work.
            <br />
            <span className="subheadingb">Technical Knowledge</span>
            <br />
            Throughout my career I have worked on many and varied projects with different job &quot;hats&quot;. Thus
            gaining a concrete understanding in the many fields of the industry.
            <br />
            <span className="subheadingb">Creative Problem Solving</span>
            <br />
            As a freelancer, projects with vastly different design briefs, budgets and time constraints requires quick
            thinking and creative workarounds.
            <br />
            <span className="subheadingb">Team Player</span>
            <br />I appreciate that the best works are created in a team environment, as each individual person is
            playing their part to the highest degree.
            <br />
            <br />
          </div>
          <div id="contentcola">
            <h2>Education</h2>
            <span className="subheadingb">2007 August - Enmore TAFE</span>
            <br />
            Apple Shake Compositing
            <br />
            Intensive short course.
            <br />
            <br />
            <span className="subheadingb">2004 Feb - AFTRS. (Australian Film, Television and Radio School)</span>
            <br />
            Advance Matte Painting
            <br />
            Techniques used for integrating photographic, painted and computer generated images.
            <br />
            <br />
            <span className="subheadingb">2001 - KvB Institute of Technology </span>
            <br />
            3D Animation and Special Effects; Certificate IV Screen Production
            <br />
            Producing a short animation with emphasis on project management, cinematography and story telling.
            <br />
            <br />
            <span className="subheadingb">1999-2000 - KvB Institute of Technology </span>
            <br />
            Design, Multimedia; Diploma
            <br />
            Traditional design course, focusing on fundamentals of design, graphic design, photography, sound design,
            web design, multimedia etc.
            <br />
            <br />
            <br />
            <br />
            <h2>Other Achievements</h2>
            In 2007, I participated in a mentor/student program. It consists of teaching, guiding and mentoring 3 young
            adults for a 1 year period in my chosen profession.
            <br />
            Two of my students have successfully gain employment:
            <br />
            <span className="subheadingb">Steven Grasso </span>
            is now employed as a Flame Artist at Time Based Arts in London, UK.
            <br />
            <span className="subheadingb">Pete O'Neill </span>
            is currently employed as a Discreet Smoke Artist at Network 7 Australia.
            <br />
            <br />
            <br />
            <br />
          </div>
          <div id="contentcola">
            <h2>Software Proficiency</h2>
            <p>
              Nuke
              <br />
              Katana
              <br />
              Maya
              <br />
              Shake
              <br />
              3D Studio Max
              <br />
              Digital Fusion
              <br />
              Adobe After Effects
              <br />
              Adobe PhotoShop
              <br />
              <br />
              <span className="subheadingb">Renderers</span>
              <br />
              Arnold
              <br />
              Pixar RenderMan
              <br />
              Mental Ray
              <br />V Ray
              <br />
              <br />
            </p>
            <h2>Programing Languages</h2>
            <p>
              Python
              <br />
              JavaScript
              <br />
              C#
              <br />
            </p>
          </div>
          <div id="head">
            <h2>
              Skills &amp; Interest Timeline <span className="subtitle">an approximation</span>
            </h2>
          </div>
          <div id="timeline">
            <ul className="events">
              <li style={{width: '52%', left: '426px'}}>
                Photography <em>(2006 - 2013)</em>
              </li>
              <li style={{width: '62%', left: '330px'}}>
                Lighting &amp; Compositing <em>(2005 - 2013)</em>
              </li>
              <li style={{width: '28%', left: '150px'}}>
                Character Animation <em>(2003 - 2005)</em>
              </li>
              <li style={{width: '44%', left: '60px'}}>
                Visual Effects / 3D Artist <em>(2001 - 2007)</em>
              </li>
              <li style={{width: '24%', left: '0px'}}>
                Motion Graphics <em>(2000 - 2003)</em>
              </li>
              <li style={{width: '18%', left: '0px'}}>
                Web Design <em>(2000 - 2002)</em>
              </li>
              <li style={{width: '18%', left: '0px'}}>
                Print Design <em>(2000 - 2002)</em>
              </li>
            </ul>
            <ul className="intervals">
              <li className="first">2001</li>
              <li>2002</li>
              <li>2003</li>
              <li>2004</li>
              <li>2005</li>
              <li>2006</li>
              <li>2007</li>
              <li>2008</li>
              <li>2009</li>
              <li>2010</li>
              <li>2011</li>
              <li>2012</li>
              <li className="last">2013</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
