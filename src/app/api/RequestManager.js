import { useState } from "react";

export default function RequestManager(method, url) {
  const [data, setData] = useState();
  const axios = require("axios");

  // Делаем запрос пользователя с данным ID

  axios({
    method,
    url: `https://hypedrop.ru/api/${url}`,
    responseType: "stream",
  })
    .then(function (response) {
      // обработка успешного запроса
      if (!data) {
        setData(response.data);
      }
    })
    .catch(function (error) {
      // обработка ошибки
      console.log(error);
    })
    .then(function () {
      // выполняется всегда
    });

  return data;
}
