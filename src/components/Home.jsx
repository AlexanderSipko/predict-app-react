import { Link } from "react-router-dom";


function Home() {
    return (
      <div className="App">
        <h2>Hello Home</h2>
        <Link to='/test'>header</Link>
      </div>
    );
  }

export default Home