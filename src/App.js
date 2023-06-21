import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Star Rating
        </h1>
      </header>
      <section className="stars-container">
        <StarRating 
          style={{ backgroundColor: 'lightblue' }}
          onDoubleClick={e => alert('double click')} />
      </section>
    </div>
  );
}

export default App;
