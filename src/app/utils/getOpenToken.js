import config from "../config";
import jwtSign from "jwt-encode";

export function getOpenToken() {
  return jwtSign(
    {
      id: Math.round(Math.random() * 100000),
      iat: Date.now(),
      exp: Date.now() + 10,
    },
    config.jwtOpenKey
  );
}
