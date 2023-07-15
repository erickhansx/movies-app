import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// import StarRating from './StarRating';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Ok', 'Good', 'Amazing']}
    /> */}
    {/* <StarRating
      maxRating={5}
      size={34}
      color="red"
      className="test"
      defaultRating={1}
    />
    <Test /> */}
  </React.StrictMode>,
);
