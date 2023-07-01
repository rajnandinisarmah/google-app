import { useEffect, useState } from "react";
import Feed from "./Components/Feed/Feed";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"
import SearchResult from "./Components/SearchResult/SearchResult";
import './app.scss'
import axios from "axios";
import Briefup from "./Components/Google/Briefup";

const user = {
  name: "Rajnandini", lastname: "Sarmah"
}
const arraymyname = [user];

function App() {
  const [searchKeyword, setSearchKeyword] = useState("")
  const [result, setResult] = useState([])
  console.log(result)
  const options = {
    method: 'GET',
    url: 'https://google-web-search1.p.rapidapi.com/',
    params: {
      query: searchKeyword,
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

      setResult(response.data.results)

    } catch (error) {
      console.error(error);
    }
  }

  const onSearch = () => {
    api_call()
  }


  // useEffect(() => {



  //   // api_call()
  // }, 
  // [])

  return (
    <div className="App">

      <Navbar setSearchKeyword={setSearchKeyword} onSearch={onSearch} />
      <Feed />
      <div className="about"> About 25,27,00,00,000 results (0.42 seconds) </div>
      <div className="section">



        <SearchResult result={result} />
        <Briefup />
      </div>
      <Footer />
    </div>

  );
}

export default App;
