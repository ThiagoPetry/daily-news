import styled from "styled-components";

const Header = styled.header`
  width: calc(100% - 20px);
  padding: 10px 0 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
`;

const Main = styled.main`
  width: 80%;
  margin: 80px auto;

  .search {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .top-headlines {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    .title {
      margin: 0 0 15px 0;
      padding: 10px 0 10px 0;
      text-align: center;
      position: -webkit-sticky;
      position: sticky;
      top: 55px;
      z-index: 990;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 3px;
  margin: 0 10px 20px 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  &:hover {
    transform: scale(1.01);
  }

  div {
    .info {
      p {
        font-size: 14px;
      }
    }
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .description {
    display: flex;
    align-items: flex-start;
    margin: 20px 0 0 0;
    overflow: auto;

    img {
      width: 50%;
      border-radius: 6px;
      margin: 0 0 0 10px;
    }
  }

  .line {
    margin: 20px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: #2989ff;
      text-align: center;
      font-size: 14px;

      &::after {
        content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==");
        margin: 0 3px 0 5px;
      }
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

  &::placeholder {
    color: #999;
  }
`;

const Button = styled.button`
  height: 35px;
  border: 0;
  border-radius: 3px;
  font-size: 14px;
  padding: 3px 6px 3px 6px;
  margin: 0 0 0 10px;
  color: #ffff;
  font-weight: bold;
  background-color: #11b54f;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;

export {
  Main,
  Input,
  Header,
  Button,
  Section,
};
