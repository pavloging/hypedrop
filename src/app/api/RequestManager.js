import { useState } from "react";
import { getOpenToken } from "../utils/getOpenToken";

export default function RequestManager(method, url, data) {
  const [res, setRes] = useState();
  const axios = require("axios");

  // Делаем запрос пользователя с данным ID
  axios({
    headers: { authorization: `Bearer ${localStorage.getItem("JWT")}` },
    method,
    url: `https://hypedrop.ru/api/${url}`,
    data,
  })
    .then(function (response) {
      // обработка успешного запроса
      if (!res) {
        setRes(response.data);
      }
    })
    .catch(function (error) {
      // обработка ошибки
      console.log(error);
      getOpenToken();
    })
    .then(function () {
      // выполняется всегда
    });

  return res;
}
