import { useState, useEffect } from "react";
import axios from "axios";
import PaperDetails from "./Paperdetails";

function App() {
  const [paperData, setPaperData] = useState(null); // Change variable name to setPaperData
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the Axios configuration
    const axiosConfig = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.gyanibooks.com/search_publication/",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        keyword: "ai",
        limit: "10",
      }),
    };

    // Make the Axios request
    axios(axiosConfig)
      .then((response) => {
        // Handle the successful response here
        setPaperData(response.data); // Use setPaperData to update the state
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        setError(error);
      });
  }, []); // Empty dependency array to run the effect once on component mount

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!paperData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PaperDetails paper={paperData} />
    </div>
  );
}

export default App;
