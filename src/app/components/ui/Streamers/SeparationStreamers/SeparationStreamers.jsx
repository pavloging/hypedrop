export default function SeparationStreamers({ onSeparation }) {
  return (
    <div className="people-streamers__1">
      <div className="people-streamers__2">
        <div
          className="people-streamers__3"
          onClick={() => onSeparation(false)}
        >
          <span className="people-streamers__4">Стримы</span>
        </div>
      </div>
      <div className="people-streamers__2">
        <div className="people-streamers__3" onClick={() => onSeparation(true)}>
          <span className="people-streamers__4">Стримеры</span>
        </div>
      </div>
    </div>
  );
}
