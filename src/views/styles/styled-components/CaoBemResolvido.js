import styled from "styled-components";
const corPrimaria = "#f40", corSecundaria = "#535796"; 


export const Depoimentos = styled.div`
  width: 75%;
  margin: 0px auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-items: center;

  h2 {
    line-height: 1.3em;
    text-align: center;
    color: ${corSecundaria};
    font-size: 24px;
    font-weight: 900;
    text-transform: uppercase;
    max-width: 40ch;
    margin: auto;
  }

  img {
    margin: 25px auto;
    border-radius: 8px;
    box-shadow: -1px 2px 8px #aaa;
  }

  sub {
    margin: 10px auto;
    line-height: 1em;
    text-align: center;
    font-size: 0.8em;
    font-weight: 400;
    max-width: 50ch;
  }
`;