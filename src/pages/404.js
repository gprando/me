import React from "react"
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'gatsby';

import SEO from "../components/seo"

import { Container } from '../styles/404'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Container>
      <h1>NÃO ENCONTRADO</h1>
      <p>Você acabou de pegar uma rota que não existe ... triste.</p>
      <Link to="/"> < AiFillHome size={36} color="#060" /> Voltar a página inicial</Link>
    </Container>
  </>
)

export default NotFoundPage
