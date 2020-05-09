import React, { useState, useEffect } from 'react'

import {
  AiFillGithub,
  AiFillGitlab,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,

} from 'react-icons/ai'

import axios from 'axios'

import { Container } from '../styles/home'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  const [perfil, setPerfil] = useState([]);

  useEffect(() => {
    async function loadPerfil() {
      const response = await axios.get(`https://api.github.com/users/gprando`);
      setPerfil(response.data);
    }
    loadPerfil();
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <div className="imagem">
          <img src={perfil.avatar_url} alt="" />
        </div>

        <div className="info-pessoal">
          <span> Gabriel Prando</span>
          <span> Estudante de Egenharia de Computação</span>
          <span> CPO na <a href="http://occamengenharia.com/"> occamengenharia</a>.</span>
          <span> Rua Luiz Parzianello nº 62, Fraron, Pato Branco - PR - CEP 85503340</span>
          <span> gprando55@gmail.com</span>
          <span> (46) 999039412</span>
        </div>

        <div className="links">
          <a href="https://github.com/gprando" ><AiFillGithub size={36} color="#5daa2f" /></a>
          <a href="https://gitlab.com/gprando" ><AiFillGitlab size={36} color="#5daa2f" /></a>
          <a href="https://www.facebook.com/gabriel.prando.399/" ><AiFillFacebook size={36} color="#5daa2f" /></a>
          <a href="https://www.instagram.com/prando__/" ><AiFillInstagram size={36} color="#5daa2f" /></a>
          <a href="https://api.whatsapp.com/send?phone=5546999039412" ><AiOutlineWhatsApp size={36} color="#5daa2f" /></a>
          <a href="https://www.aedin.com/in/gabriel-prando-85201b198/" ><AiFillLinkedin size={36} color="#5daa2f" /></a>

        </div>


      </Container>



    </Layout>
  )
}

export default IndexPage