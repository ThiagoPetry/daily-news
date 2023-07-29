import React from "react";

import { formatDate } from "../utils/formatDate";
import { formatTitle } from "../utils/formatTitle";

import { Section } from "../style/styles";

const List = ({
  data,
}) => {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div className={"list"}>
      {
        (data?.articles || []).map((notice, index) => {
          if (!notice?.title) {
            return;
          }

          return (
            <Section className={"notice"} key={index}>
              <h2>{formatTitle(notice?.title, 190)}</h2>

              <div className={"content"}>
                <div className={"description"}>
                  <p>{notice?.description}</p>

                  {notice?.urlToImage &&
                    <img src={notice.urlToImage} />
                  }
                </div>

                <div className={"line"}>
                  <div className={"info"}>
                    <p><b>Autor:</b> {notice?.author || "Desconhecido"}</p>
                    <p><b>Publicado em:</b> {formatDate(notice?.publishedAt)}</p>
                  </div>

                  <a href={"#"} onClick={() => openLink(notice?.url)}>
                    Notícia completa
                  </a>
                </div>
              </div>
            </Section>
          )
        })
      }
    </div>
  );
};

export default List;
