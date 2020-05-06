
import PropTypes from "prop-types"
import React from "react"

import { Foot } from './styles';


const Footer = () => (
  <Foot >
    © {new Date().getFullYear()}, Built by
    {` `}
    <a href="/"> Gabriel Prando</a>
  </Foot>
)

export default Footer




