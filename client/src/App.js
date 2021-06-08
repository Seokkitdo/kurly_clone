import "./App.css";
import Header from "./components/Header/Header/Header";
import Banner from "./components/Banner/Banner";
import { BannerData } from "./components/Banner/BannerData";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner slides={BannerData} />
    </div>
  );
}

export default App;
