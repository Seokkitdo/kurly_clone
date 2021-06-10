import "./App.css";
import Header from "./components/Header/Header/Header";
import Banner from "./components/Banner/Banner";
import { BannerData } from "./components/Banner/BannerData";
import Contents from "./components/Contents/Contents";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner slides={BannerData} />
      <Contents />
    </div>
  );
}

export default App;
