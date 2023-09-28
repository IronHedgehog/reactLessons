import GaleryList from "../components/galery/galeryList/GaleryList";

import paintings from "../data/paintings.json";
const Galery = () => {
  //   console.log(paintings);
  return (
    <section>
      <GaleryList paintings={paintings} />
    </section>
  );
};

export default Galery;
