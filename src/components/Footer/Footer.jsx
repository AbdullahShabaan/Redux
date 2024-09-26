import { useSelector } from "react-redux";
const Footer = () => {
  const { number } = useSelector((state) => state.counterSlice);
  console.log(number);
  return (
    <>
      <h3>Number: {number}</h3>
      <div>Footer</div>
    </>
  );
};

export default Footer;
