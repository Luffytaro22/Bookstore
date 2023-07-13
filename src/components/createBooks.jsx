export default function CreateBooks() {
  return (
    <div className="FormContainer">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input type="text" placeholder="Book title" className="formFields" />
        <input type="text" placeholder="Author" className="formFields" />
        <button type="submit" className="submitButton">ADD BOOK</button>
      </form>
    </div>
  );
}
