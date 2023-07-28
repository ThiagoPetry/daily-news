import React, { useEffect, useState } from "react";

import api from "../api/api";

import { formatDate } from "../utils/formatDate";

import { Header, Input, Main, Section } from "../style/styles";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // test();
    const news = JSON.parse(localStorage.getItem("news"));
    setData(news);
  }, []);

  const openLink = (url) => {
    window.open(url);
  };

  return (
    <>
      <Header>
        <div>
          <h1>Daily News</h1>
        </div>
        <div>
          <p>Brasil</p>
        </div>
      </Header>

      <Main>
        <div className={"search"}>
          <Input
            placeholder={"Buscar notícias"}
          />
        </div>

        <div className={"top-headlines"}>
          <h1 className={"title"}>Principais manchetes</h1>

          <div className={"list"}>
            {
              (data?.articles || []).map((notice, index) => {
                return (
                  <Section key={index}>
                    <h2>{notice?.title}</h2>
                    <p>{notice?.description}</p>

                    <div className={"line"}>
                      <div className={"info"}>
                        <p>Autor: {notice?.author}</p>
                        <p>Publicado em: {formatDate(notice?.publishedAt)}</p>
                      </div>

                      <a href={"#"} onClick={() => openLink(notice?.url)}>
                        Notícia completa
                      </a>
                    </div>
                  </Section>
                )
              })
            }
          </div>
        </div>
      </Main>
    </>
  );
};

export default App;
