import React, { useEffect, useState } from "react";

const NewComponent = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // document.querySelector("div").addEventListener("click", () => {
    //   console.log("onClick");
    // });
    // return () => {
    //   document.querySelector("div").removeEventListener("click", () => {
    //     console.log("onRemove");
    //   });
    // };
  }, []);

  useEffect(() => {
    //   useEffect який відповідає за запит на сервер
    updateImages();
  }, []);

  useEffect(() => {
    // який дозволяє підписатись та слідкувати за оновленнями counter
    console.log(counter);
  }, [counter]);

  useEffect(() => {
    //   Дозволяє нам додавати та видаляти кастомні івенти
    const event = (e) => console.log(e);
    document.addEventListener("keydown", event);
    return () => {
      document.removeEventListener("keydown", event);
    };
  }, [counter]);

  useEffect(() => {
    // return замість componentWillUnmount
    return () => {};
  }, []);

  //      componentDidMount() {
  //     this.updateImages();

  //   };

  //    componentDidUpdate(prevProps, prevState, snapshot) {
  //     if (prevState.images !== this.state.images) {
  //       this.setState({snapshot})
  //       window.scrollTo({top: this.state.snapshot, behavior: "smooth"})
  //     }
  //     if (this.state.dataInput !== prevState.dataInput || this.state.page !== prevState.page) {
  //       this.updateImages();
  //     };

  //   }

  const updateImages = async () => {
    console.log("hello");
  };
  return <button onClick={(e) => setCounter(counter + 1)}>Привіт</button>;
};

export default NewComponent;
