import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleBook() {
  const SERVERURl=import.meta.env.VITE_SERVER_URL;
  const [data, setData] = useState(null); // Initialize as null
  const { slug } = useParams(); // Destructure slug directly
  const baseUrl = `${SERVERURl}/api/books/${slug}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [baseUrl]); // Add baseUrl as a dependency

  function StarRating({ numberOfStars }) {
    const stars = [];

    for (let i = 0; i < numberOfStars; i++) {
      stars.push(<span key={i}>⭐</span>);
    }

    return <div>Rating: {stars}</div>;
  }

  return (
    <div>
      <Link to="/books">🔙 Books</Link>

      {data ? ( // Conditional rendering when data is available
        <div className="bookdetails">
          <div className="col-1">
            {data.thumbnail && (
              <img
                src={`${SERVERURl}/uploads/${data.thumbnail}`}
                alt={data.title}
              />
            )}
            <Link to={`/editbook/${data.slug}`}>Edit</Link>
          </div>

          <div className="col-2">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <StarRating numberOfStars={data.stars} />

            <p>Category</p>
            <ul>
              {data.category?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p> //Show a loading state until data is available
      )}
    </div>
  );
}

export default SingleBook;
