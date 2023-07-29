import React, { useCallback, useEffect, useState } from "react";

import { debounce } from "lodash";

import api from "../api/api";

import { formatTitle } from "../utils/formatTitle";

import { Header, Main } from "../style/styles";

import List from "../components/List";
import Search from "../components/Search";
import Switch from "../components/Switch";
import Loading from "../components/Loading";

import logoDark from "../images/logoDark.svg";
import logoLight from "../images/logoLight.svg";

const News = ({
  isDark,
  onChangeTheme,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchedText, setSearchedText] = useState("");

  // sim, não deveria estar aqui :v
  const key = "b8c9e262f90549e2a8698bb19c85daa7";

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    const lastRequestDate = localStorage.getItem("DailyNews:lastRequestDate");

    if (!lastRequestDate || lastRequestDate !== currentDate) {
      fetchTopHeadlines();
      return;
    }

    getDataInLocalStorage();
  }, []);

  useEffect(() => {
    fetchNews();
  }, [searchedText]);

  const getDataInLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("DailyNews:topHeadlines"));
    setData(data);
  };

  const fetchTopHeadlines = async () => {
    try {
      const currentDate = new Date().toLocaleDateString();
      const { data } = await api.get(`/top-headlines?country=br&apiKey=${key}`);

      localStorage.setItem("DailyNews:topHeadlines", JSON.stringify(data));
      localStorage.setItem("DailyNews:lastRequestDate", currentDate);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNews = async () => {
    console.log(searchedText);
    if (!searchedText) {
      handleLoading(false);
      getDataInLocalStorage();
      return;
    }

    try {
      const date = new Date();

      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();

      const from = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;

      const { data } = await api.get(`/everything?q=${searchedText}&from=${from}&sortBy=publishedAt&apiKey=${key}`);
      setData(data);
      handleLoading(false);
    } catch (error) {
      console.log(error);
      handleLoading(false);
    }
  };

  const onChangeSearch = useCallback(debounce((e) => {
    setSearchedText(e?.target?.value);
    handleLoading(true);
  }, 500));

  const handleToggle = () => {
    onChangeTheme(!isDark);
  };

  const handleClear = () => {
    setSearchedText("");
    getDataInLocalStorage();

    document.getElementById("searchedText").value = "";
  };

  const handleLoading = (value) => {
    document.body.style.overflow = value ? "hidden" : "";
    setLoading(value);
  };

  return (
    <>
      {loading &&
        <Loading />
      }

      <Header id={"header"}>
        <img src={isDark ? logoLight : logoDark} className={"logo"} />

        <Switch
          isDark={isDark}
          handleToggle={handleToggle}
        />
      </Header>

      <Main>
        <Search
          handleClear={handleClear}
          searchedText={searchedText}
          onChangeSearch={onChangeSearch}
        />

        <div className={"top-headlines"}>
          <h1 className={"title"}>
            {
              searchedText ?
                `Notícias sobre: "${formatTitle(searchedText, 40)}"`
                :
                "Principais manchetes"
            }
          </h1>

          <List data={data} />

          {!data?.articles?.length &&
            <div className={"search-not-found"}>
              <p>Nenhum resultado foi encontrado.</p>
            </div>
          }
        </div>
      </Main>
    </>
  );
};

export default News;
