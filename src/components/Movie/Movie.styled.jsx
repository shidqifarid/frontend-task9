import styled from "styled-components";

const StyledMovie = styled.div`
  margin-bottom: 1rem;

  img {
      border-radius: 25px;
      max-width: 100%;
      height: auto;
      margin-bottom: 1rem;
  }

  h3 {
      color: #090809;
      font-size: 1.95rem;
      margin-bottom: 0.5rem;
      margin-top: 0;
  }

  p {
      color: #C1B8AF;
  }

  @media screen and (min-width: 768px) {
          flex-basis: 50%;
  }

  @media (min-width: 992px) {
          flex-basis: 25%;
          padding: 1rem;
  }
`;

export default StyledMovie;
