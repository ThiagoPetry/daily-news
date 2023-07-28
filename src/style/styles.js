import styled from "styled-components";

const Header = styled.header`
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

const Main = styled.main`
  width: 80%;
  margin: 40px auto;

  .search {
    padding: 10px;
    display: flex;
    justify-content: center;
  }

  .top-headlines {
    margin: 25px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    .title {
      margin: 0 0 15px 20px;
      padding: 0 0 3px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

const Section = styled.section`
  width: 460px;
  padding: 10px;
  border-radius: 3px;
  margin: 0 10px 20px 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  &:hover {
    transform: scale(1.01);
    background-color: #fafafa;
  }

  div {
    .info {
      p {
        font-size: 14px;
      }
    }
  }

  .line {
    margin: 15px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: #1e6fd3;
      text-align: center;
    }
  }
`;

const Input = styled.input`
  width: 450px;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  font-size: 16px;
  padding: 3px 6px 3px 6px;
  color: #222;

  &::placeholder {
    color: #999;
  }
`;

export {
  Section,
  Header,
  Input,
  Main,
};
