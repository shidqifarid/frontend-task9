import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 992px) {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

export const HeroLeft = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

export const HeroTitle = styled.h2`
  color: #090809;
  margin-bottom: 1rem;
  font-size: 2.44rem;
`;

export const HeroGenre = styled.h3`
  color: #69b0d9;
  margin-bottom: 1rem;
  font-size: 1.59rem;
`;

export const HeroDescription = styled.p`
  color: #64748b;
  margin-bottom: 1rem;
`;

export const HeroButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #fa320a;
  color: #fff;
`;

export const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;

  @media (min-width: 992px) {
    flex-basis: 60%;
  }
`;
