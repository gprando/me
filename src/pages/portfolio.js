import React, { useEffect, useState } from "react"

import axios from 'axios'

import SEO from "../components/seo"

import { Container } from '../styles/portfolio'

import { GoRepoForked, GoStar } from 'react-icons/go'

import formatHour from '../services/formatHour'

const PortfolioPage = ({ data }) => {

  const [repositorios, setRepositorios] = useState([]);
  const [perfil, setPerfil] = useState([]);
  const [starreds, setStarreds] = useState([]);

  useEffect(() => {
    async function loadRepositorios() {
      const response = await axios.get(`https://api.github.com/users/gprando/repos`);
      setRepositorios(response.data);
    }

    async function loadPerfil() {
      const response = await axios.get(`https://api.github.com/users/gprando`);
      setPerfil(response.data);
    }

    loadRepositorios();
    loadPerfil();
  }, []);

  return (
    <Container>
      <SEO title="Portfólio" />
      <h1>Projetos</h1>
      <div className="infos">
        <span>Todos os projetos constam no github</span>
        <span>Projetos públicos : {perfil.public_repos}</span>
        <span>Seguidores: {perfil.followers}</span>
        <span>Seguindo: {perfil.following}</span>
      </div>
      {repositorios.map(repositorio => {
        if (repositorio.fork === false) {
          return (
            <a href={`${repositorio.html_url}`} target="_blank"> key={repositorio.id}>
              <div className="post">
                <span>{repositorio.name} ||  {repositorio.stargazers_count}<GoStar />  {repositorio.forks}<GoRepoForked /> </span>
                <span>Última atualização em : {formatHour(repositorio.updated_at)}</span>
                <span>{repositorio.description}</span>
              </div>
            </a>
          )

        }
      })}


    </Container>
  )
}

export default PortfolioPage

