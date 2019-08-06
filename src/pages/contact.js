import React, { Fragment } from 'react'
import styled from 'styled-components'
import ContactForm from '../constants/ContactForm'
import Layout from "../components/layout"
import Container from "../components/container"

const ContactWrapper = styled.div`
  background: white;
  margin: 6rem 0;
  section {
    width: 1020px;
    max-width: 100%;
    margin: auto;
    flex-direction: column;
  }
`

const Contact = () => (
  <Layout>
    <Container>
    <ContactForm />
    </Container>
  </Layout>
)
export default Contact