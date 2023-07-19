import { useDispatch, useSelector } from 'react-redux';
import { postBook } from '../redux/books/booksSlice';
import styles from '../styles/createBooks.module.css';

export default function CreateBooks() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const handleClick = (event) => {
    event.preventDefault();
    const title = document.getElementById('bookTitle');
    const author = document.getElementById('bookAuthor');
    if (title.value && author.value) {
      dispatch(postBook({
        "item_id": `item${books.length + 1}`,
        "title": title.value,
        "author": author.value,
        "category": "Drama",
      }));
      title.value = '';
      author.value = '';
    }
  };

  return (
    <div className={styles.formContainer}>
      <hr />
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book title" className={styles.formFields} id="bookTitle" required />
        <input type="text" placeholder="Author" className={styles.formFields} id="bookAuthor" required />
        <button type="submit" className={styles.submitButton}onClick={handleClick} >ADD BOOK</button>
      </form>
    </div>
  );
}
