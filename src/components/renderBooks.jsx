import Books from './Books';

export default function RenderBooks() {
  const books = [
    {
      gender: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      gender: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      gender: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];

  return (
    <div className="books">
      {books.map((book) => (
        <Books key={book.title} gender={book.gender} title={book.title} author={book.author}/>
      ))}
    </div>
  );
}
