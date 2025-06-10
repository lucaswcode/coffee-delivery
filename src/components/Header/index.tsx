import logo from "../../assets/logo.svg";
import { Link } from "react-router";
import { Container, Aside } from "./styles";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Curitiba, PR</span>
        </div>

        <div>
          <ShoppingCart size={22} weight="fill" />
        </div>
      </Aside>
    </Container>
  );
}
