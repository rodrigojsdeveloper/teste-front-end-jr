import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1550px;

  padding: 80px 0 69px 0;

  display: flex;
  flex-direction: row;

  margin: 0 auto;

  & > menu {
    height: 530px;

    display: flex;
    flex-direction: row;

    padding: 10px;

    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  & > img {
    cursor: pointer;
    padding: 0 35px;

    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }
`;

export { Container };
