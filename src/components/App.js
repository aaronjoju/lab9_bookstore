import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'
import BookCard from './BookCard';
import BookNavBar from './BookNavBar';

function App() {
  // use effect fetch 
  useEffect(() => {
    fetchBooks();
  }, []);

  // fecthing
  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Q27U2qipNKx1RRJ4yShxXFhHmnkanJHh"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBooks(data.results.books);
      setFilteredBooks(data.results.books);
      // createElementsFromData(data.results.books);
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  };

  // books state variable
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  console.log(filteredBooks)

  const handleInputChange = (value) => {
    var res = filteredBooks.filter(f => f.title.toLowerCase().includes(value))
    setBooks(res)
  };



  return (
    <>

      <BookNavBar />
      <section className='our_collection'>
        <h1>Let's Explore</h1>
        <div>
          <input type="text" className='search'
            placeholder="Search by title"
            onChange={e => handleInputChange(e.target.value)} />
        </div>

        <Row xs={1} md={2} className="g-4" id='container'>
          {books.map((d, i) => (
            <BookCard key={i} data={d} />
          ))}
        </Row>
      </section>
    </>
  );
}

export default App;

