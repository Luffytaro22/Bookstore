import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import { useDispatch } from 'react-redux';
import styles from '../styles/books.module.css';

export default function Books({ gender, title, author, id }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.booksContainer}>
      <div className={styles.booksInfo}>
        <p>{gender}</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="booksOptions">
          <button type="button" className="booksButtons">Comments</button>
          <button type="button" className="booksButtons" id={id} onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button" className="booksButtons">Edit</button>
        </div>
      </div>
      <div className="booksComplete">
        <h3>64%</h3>
        <p>Completed</p>
      </div>
      <div className="booksChapter">
        <p>Current chapter</p>
        <p>Chapter 17</p>
        <button type="button" className="buttonUpdate">UPDATE PROGRESS</button>
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
