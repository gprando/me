import PropTypes from "prop-types"
import React from "react"

import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { Container, Content, Links } from './styles';

import { RiLightbulbFlashLine } from 'react-icons/ri'
import { WiMoonWaxingCrescent2 } from 'react-icons/wi'
const Header = () => {
  const estado = true;
  const Botao = estado ? RiLightbulbFlashLine : WiMoonWaxingCrescent2

  return (
    <Container>
      <Content>
        <nav>
          <AniLink paintDrip hex="#333" direction="left" duration={0.35} to="/">
            Gabriel Prando
        </AniLink>
        </nav>
        <Links>
          <AniLink swipe top="entry" to="/blog" entryOffset={300}>Blog</AniLink>
          <AniLink cover bg="#333" duration={0.2} to="/curriculo">Curriculo</AniLink>
          <AniLink fade to="/portfolio">Portifólio</AniLink>
          <button><Botao /></button>
        </Links>

      </Content>
    </Container>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


