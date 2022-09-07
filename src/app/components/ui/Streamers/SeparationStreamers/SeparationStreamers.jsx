export default function SeparationStreamers({ value, onSeparation }) {
  return (
    <div className="separation-streamers__1">
      <div
        className={
          value ? "separation-streamers__2" : "separation-streamers__2  active"
        }
      >
        <div
          className="separation-streamers__3"
          onClick={() => onSeparation(false)}
        >
          <span className="separation-streamers__4">Стримеры</span>
        </div>
      </div>
      <div
        className={
          value ? "separation-streamers__2  active" : "separation-streamers__2"
        }
      >
        <div
          className="separation-streamers__3"
          onClick={() => onSeparation(true)}
        >
          <span className="separation-streamers__4">Стримы</span>
        </div>
      </div>
    </div>
  );
}
