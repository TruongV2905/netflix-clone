import Carousel from "../../components/carousel";
import Header from "../../components/header";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel slidePerView={1} category="Trending" autoplay />
      <Carousel slidePerView={6} category="Trending" />
      <Carousel slidePerView={6} category="Comedy" />
      <Carousel slidePerView={6} category="Loan" />
      <Carousel slidePerView={6} category="Action" />
    </div>
  );
}

export default HomePage;
