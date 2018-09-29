import Link from 'next/link';

const ReelLinks = props => {
  const links = [
    {
      id: '2013',
      text: 'Reel 2013',
      href: '/reel',
    },
    {
      id: '2008',
      text: 'Reel 2008',
      href: '/reel2008',
    },
    {
      id: '2004',
      text: 'Reel 2004',
      href: '/reel2004',
    },
  ];

  // const filteredLinks = links.filter(link => link.id !== props.id);

  return (
    <div id="contentreel">
      <ul>
        {links.map(link => (
          <li key={link.id}>
            <Link href={link.href}>
              <a>{link.text}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          ul a {
            display: block;
            padding: 2px 0px 2px 20px;
          }
          a:hover {
            background-color: #2c2e35;
          }
        `}
      </style>
    </div>
  );
};

export default ReelLinks;
