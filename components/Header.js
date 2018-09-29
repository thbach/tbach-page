import Link from 'next/link';

export default () => (
  <div>
    <div id="headerwrapper">
      <div id="header">
        <Link href="/">
          <a>
            <img
              src="/static/images/logonamesmall.png"
              alt="Thai Bach - Digital Artist"
              width="287"
              height="65"
              className="logo"
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
  </div>
);
