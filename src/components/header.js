import PropTypes from "prop-types"
import React from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { Container, Content, Links } from './styles';

const Header = () => (
  <Container>
    <Content>
      <nav>
        <AniLink paintDrip hex="#333" direction="left" duration={0.35} to="/">
          <span>{`/*  G A B R I E L */`}</span>
          <span> {`<P R A N D O />`}</span>
        </AniLink>
      </nav>

      <Links>
        <AniLink swipe top="entry" to="/blog" entryOffset={300}>Blog</AniLink>
        <AniLink cover bg="#333" duration={0.2} to="/curriculo">Curriculo</AniLink>
        <AniLink fade to="/portfolio">Portfólio</AniLink>
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


