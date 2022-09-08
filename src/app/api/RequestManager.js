import { getOpenToken } from "../utils/getOpenToken";

export default function RequestManager(method, url, data) {
  const axios = require("axios");

  return new Promise((res, rej) => {
    axios({
      headers: { authorization: `Bearer ${localStorage.getItem("JWT")}` },
      method,
      url: `https://hypedrop.ru/api/${url}`,
      data,
    })
      .then(function (response) {
        // Возвращаем данные, если запрос был успешный
        res(response.data);
      })
      .catch(function (error) {
        // обработка ошибки
        console.log(error);
        // Если токен истек, обновляем
        if (error.response.status === 401)
          localStorage.setItem("JWT", getOpenToken());
        // Возвращаем тело ошибки для дальнейшей обработки
        rej(error.response);
      });
  });
}
