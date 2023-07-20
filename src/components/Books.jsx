import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import { useDispatch } from 'react-redux';
import { BsCircle } from 'react-icons/bs';
import { deleteBooks } from '../redux/books/booksSlice';
import styles from '../styles/books.module.css';

export default function Books({ gender, title, author, id }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteBooks(id));
    dispatch(removeBook(id));
  };

  return (
    <div className={styles.booksContainer}>
      <div className={styles.booksInfo}>
        <p>{gender}</p>
        <h2>{title}</h2>
        <p className={styles.author} >{author}</p>
        <div className={styles.booksOptions}>
          <button type="button" className={styles.booksButtons}>Comments</button>
          <button type="button" className={styles.booksButtons} id={id} onClick={handleClick}>Remove</button>
          <button type="button" className={styles.booksButtons}>Edit</button>
        </div>
      </div>
      <div className={styles.booksComplete}>
        <BsCircle className={styles.Oval2} />
        <div>
          <h3>64%</h3>
          <p>Completed</p>
        </div>
      </div>
      <div className={styles.booksChapter}>
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button" className={styles.buttonUpdate}>UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Books.propTypes = {
  gender: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
