export default function getNowStreamersLive(streamer) {
  return Object.values(streamer.platforms).some((platform) => platform.live);
}
