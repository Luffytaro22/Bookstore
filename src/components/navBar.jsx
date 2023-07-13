import { NavLink, Outlet } from 'react-router-dom';

const links = [
  {
    path: '/',
    text: 'Books',
  },
  {
    path: 'categories',
    text: 'categories',
  },
];

export default function NavBar() {
  return (
    <>
      <div className="header">
        <h1>Bookstore CMS</h1>
        <nav>
          <ul className="navList">
            {links.map((link) => (
              <li className="navLinks" key={link.text}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id="outlet">
        <Outlet />
      </div>
    </>
  );
}
