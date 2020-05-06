import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Container, Content, Links } from './styles';


const Header = () => (
  <Container>
    <Content>
      <nav>
        <Link to="/">Gabriel Prando</Link>
      </nav>
      <Links>
        <Link to="/blog">Blog</Link>
        <Link to="/curriculo">Curriculo</Link>
        <Link to="/portifólio">Portifólio</Link>
      </Links>
    </Content>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


