import { useState } from "react";
import Container from "./components/Container";
import Spinner from "./components/Spinner";

function App() {
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (event) => {
    const apiUrl = `https://meowfacts.herokuapp.com/`;

    try {
      setIsLoading(true);
      fetch(apiUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setQuote(data.data);
        });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <Container>
      <button data-testid="button" onClick={(e) => handleClick(e)}>
        <span>get a fact</span>
      </button>
      {isLoading || quote === "" ? (
        <Spinner />
      ) : (
        <span data-testid="quote">{quote}</span>
      )}
    </Container>
  );
}

export default App;
