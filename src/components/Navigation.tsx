import basketImage from "../assets/picnic.png";
import NavWrapper from "./Navigation.styles";
import AppContext from "context/AppContext";
import { useContext } from "react";

const Navigation = () => {
  const { basketItemNumber, basketValue, basketList } = useContext(AppContext);

  let displayList = basketList.map((element) => <p>{element.title}</p>);

  return (
    <NavWrapper>
      <nav>
        <img src={basketImage} alt="" />
        <div className="basket__content">Ilość: {basketItemNumber}</div>
        <div>Wartość: {basketValue} zł</div>

        <ul>{displayList}</ul>
      </nav>
    </NavWrapper>
  );
};

export default Navigation;
