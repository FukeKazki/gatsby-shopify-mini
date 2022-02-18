import * as React from "react";
import { Link } from "gatsby";
import { Container } from "../../layout/Container";
import * as styles from "./styles";


export const Header = () => {
  return (
    <header>
      <Container>
        <nav>
          <ul css={styles.navigation}>
            <li>
              <Link to="/">トップページ</Link>
            </li>
            <li>
              <Link to="/cart/">カート</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}