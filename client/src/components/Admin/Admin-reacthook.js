import React, { useState, useRef } from "react";


// Refactor to customHook and add to database

function Admin() {
  const [store, setStore] = useState([]);
  const name = useRef(null);
  const price = useRef(null);
  const size = useRef(null);
  const description = useRef(null);
  const quantity = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const item = {
      name: name.current.value,
      price: price.current.value,
      size: size.current.value,
      description: description.current.value,
      quantity: quantity.current.value
    };
    setStore([...store, item]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>{JSON.stringify(store)}</div>
      <input type="text" name="name" placeholder="name" ref={name} />
      <input type="number" name="price" placeholder="price" ref={price} />

      <input type="text" name="size" placeholder="size" ref={size} />
      <input type="number" name="quantity" placeholder="quantity" ref={quantity} />

      <input type="text" name="description" placeholder="description" ref={description} />

      <button type="submit">submit</button>
    </form>
  );
}

export default Admin;