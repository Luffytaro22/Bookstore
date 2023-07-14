import styles from '../styles/createBooks.module.css';

export default function CreateBooks() {
  return (
    <div className={styles.formContainer}>
      <hr />
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book title" className={styles.formFields} />
        <input type="text" placeholder="Author" className={styles.formFields} />
        <button type="submit" className={styles.submitButton}>ADD BOOK</button>
      </form>
    </div>
  );
}
