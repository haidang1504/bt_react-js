import Header from "./header";
import Carousel from "./carousel";
import Wwd from "./wwd";
import Contact from "./contact";
import List_card from "./list_card";
import Footer from "./footer";

function Example1() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="example-flex">
        <Wwd />
        <Contact />
      </div>
      <List_card />
      <Footer />
    </div>
  );
}

export default Example1;
