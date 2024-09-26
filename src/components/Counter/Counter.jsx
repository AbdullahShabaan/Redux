import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/counterSlice/counterSlice";
import { useEffect } from "react";
import { getProducts } from "../../store/productsSlice/act/actGetProducts";

const Counter = () => {
  const { number } = useSelector((state) => state.counterSlice);
  const { data, isLoading, error } = useSelector(
    (state) => state.productsSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment(100));
        }}
      >
        +
      </button>
      <div style={{ padding: "5px" }}>{number}</div>
      <button
        onClick={() => {
          dispatch(decrement(44));
        }}
      >
        -
      </button>
      {isLoading && <h1>Loading....</h1>}
      {error && <h1>{error}</h1>}
      <div>
        {data.map((ele, index) => (
          <h2 key={index}>{ele.title}</h2>
        ))}
      </div>
    </div>
  );
};

export default Counter;
