import { NavLink, Outlet } from 'react-router-dom';
import { BiSolidUser } from 'react-icons/bi';
import styles from '../styles/navBar.module.css';

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
      <div className={styles.header}>
        <h1>Bookstore CMS</h1>
        <nav>
          <ul className={styles.navList}>
            {links.map((link) => (
              <li className={styles.navLinks} key={link.text}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <BiSolidUser className={styles.user} />
      </div>
      <div id="outlet">
        <Outlet />
      </div>
    </>
  );
}
