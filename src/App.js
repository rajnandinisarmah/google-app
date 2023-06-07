import { useEffect } from "react";
import Feed from "./Components/Feed/Feed";
import Navbar from "./Components/Navbar/Navbar";
import SearchResult from "./Components/SearchResult/SearchResult";
import './app.scss'
import axios from "axios";

const user = {
  name: "Rajnandini", lastname: "Sarmah"
}
const arraymyname = [user];

function App() {
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://google-web-search1.p.rapidapi.com/',
      params: {
        query: 'World Cup',
        limit: '20',
        related_keywords: 'true'
      },
      headers: {
        'X-RapidAPI-Key': 'bfccca38b9msh25cf9551e713d21p16c32fjsn78c35662a700',
        'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
      }
    };

    const api_call = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    // api_call()
  }, [])

  return (
    <div className="App">

      <Navbar />
      <Feed />
      <div className="about"> About 25,27,00,00,000 results (0.42 seconds) </div>
      <SearchResult />
      <SearchResult />
      <SearchResult />

    </div>
  );
}

export default App;
