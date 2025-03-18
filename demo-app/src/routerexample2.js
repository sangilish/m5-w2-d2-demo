import { Routes, Route, Link, useParams } from "react-router-dom";

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li><Link to="cats">Cats</Link></li>
        <li><Link to="dogs">Dogs</Link></li>
      </ul>

      <Routes>
        <Route path=":topicId" element={<Topic />} />
      </Routes>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;