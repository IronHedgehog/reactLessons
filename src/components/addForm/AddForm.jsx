const AddForm = () => {
  const inputValue = (e) => {
    const value = e.target.value;
  };
  const submitHendler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHendler}>
      <input onChange={inputValue} type="text" />
      <button>Додати</button>
    </form>
  );
};

export default AddForm;
