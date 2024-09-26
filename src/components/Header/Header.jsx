import { useSelector } from "react-redux";

const Header = () => {
  const { number } = useSelector((state) => state.counterSlice);
  console.log(number);

  return (
    <>
      <h3>Number: {number}</h3>
      <div>Header</div>
    </>
  );
};

export default Header;
