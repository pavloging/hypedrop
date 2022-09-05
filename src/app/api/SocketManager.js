import config from "../config";
import jwtSign from "jwt-encode";

class SocketManager {
  getOpenToken() {
    return jwtSign(
      {
        id: Math.round(Math.random() * 100000),
        iat: Date.now(),
        exp: Date.now() + 21600,
      },
      config.jwtOpenKey
    );
  }
}

export default new SocketManager();
