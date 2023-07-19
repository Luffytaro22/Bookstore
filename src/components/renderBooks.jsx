import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Books from './Books';
import { getBooks } from '../redux/books/booksSlice';
import styles from '../styles/renderBooks.module.css';

export default function RenderBooks() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
console.log(books)
  return (
    <div className={styles.books}>
      {Object.keys(books.books).map((book) => (
        <Books key={book} id={book} gender={book[0].category} title={book[0].title} author={book[0].author}/>
      ))}
    </div>
  );
}
