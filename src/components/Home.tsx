'use client';

import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import Container from "@/components/Container";
import Section from "@/components/Section";


const Home = () => {
  return (
    <Section>
      <Container className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />
        <Content />
      </Container>
    </Section>
  )
}

export default Home;