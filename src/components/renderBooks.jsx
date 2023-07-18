import { useSelector } from 'react-redux';
import Books from './Books';
import styles from '../styles/renderBooks.module.css';

export default function RenderBooks() {
  const books = useSelector((state) => state.books);

  return (
    <div className={styles.books}>
      {books.map((book) => (
        <Books key={book.item_id} gender={book.category} title={book.title} author={book.author}/>
      ))}
    </div>
  );
}
