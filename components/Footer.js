import Link from 'next/link';

export default () => (
  <div id="footerwrapper">
    <div id="footer">
      <div id="footercola">
        <h1>Quick Links</h1>
        <ul>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li>
            <Link href="/history">
              <a>history</a>
            </Link>
          </li>
          <li>
            <Link href="/reel">
              <a>reel</a>
            </Link>
          </li>
          <li className="reelsublist">
            <Link href="/reel">
              <a>2013</a>
            </Link>
          </li>
          <li className="reelsublist">
            <Link href="/reel2008">
              <a>2008</a>
            </Link>
          </li>
          <li className="reelsublist">
            <Link href="/reel2004">
              <a>2004</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>&nbsp;</a>
            </Link>
          </li>
          <li>
            <a href="http://www.imdb.com/name/nm4128602/" target="_blank">
              IMDb
            </a>
          </li>
          <li>
            <a href="http://uk.linkedin.com/in/thaibach" target="_blank">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div id="footercolb">
        <h1>References</h1>
        If you require character references please email me for updated contact info.
        <br />
        <div id="footercolc">
          <h2>Darren Lurie</h2>
          Lighting Supervisor
          <br />
          <span className="textgold">Sony Imageworks</span> <br />
          <h2>Patrick Ledda</h2>
          VFX Supervisor
          <br />
          <span className="textgold">MPC</span> <br />
          <h2>Tristan North</h2>
          Lighting Lead
          <br />
          <span className="textgold">Double Negative</span> <br />
          <h2>Sonny Sy</h2>
          Lighting &amp; Compositing Lead
          <br />
          <span className="textgold">LucasFilm Singapore</span>
          <br />
        </div>
        <div id="footercold">
          <h2>Craig Welsh</h2>
          Lighting &amp; FX Supervisor
          <br />
          <span className="textgold">Animal Logic</span>
          <br />
          <h2>Feargal Stewart</h2>
          Head of CG TVC
          <br />
          <span className="textgold">Animal Logic</span> <br />
          <h2>Ben Huber</h2>
          Lighting &amp; Compositing Supervisor
          <br />
          <span className="textgold">LucasFilm Singapore</span>
          <br />
          <h2>Josh Czikowski</h2>
          3D Lead
          <br />
          <span className="textgold">Nine Network</span> <br />
        </div>
      </div>
    </div>
    <div id="copyright">...</div>
  </div>
);
