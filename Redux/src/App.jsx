import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const value = useSelector((s) => s.globalCount);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Redux Counter Example</h2>
      <h3>{value}</h3>
      <button onClick={() => dispatch({ type: "INC" })}>Inc</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Dec</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
