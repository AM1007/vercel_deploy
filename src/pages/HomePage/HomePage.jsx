import { useSelector, useDispatch } from "react-redux";
import { depositAction, withdrawAction } from "../../redux/balance/actions";
import { localeAction } from "../../redux/locale/actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    return state.balance.value;
  });
  const locale = useSelector((state) => state.locale.value);

  const handleDeposit = () => {
    dispatch(depositAction(10));
  };

  const handleWithdraw = () => {
    dispatch(withdrawAction(10));
  };
  const handleChangeLang = ({ target: { value } }) => {
    dispatch(localeAction(value));
  };

  return (
    <div>
      Balance:{value}
      <hr />
      <button onClick={handleDeposit}>Deposit</button>
      <br />
      <button onClick={handleWithdraw}>Withdraw</button>
      <hr />
      <br />
      <select onChange={handleChangeLang} value={locale}>
        <option value="en">EN</option>
        <option value="ua">UA</option>
      </select>
    </div>
  );
};
export default HomePage;
