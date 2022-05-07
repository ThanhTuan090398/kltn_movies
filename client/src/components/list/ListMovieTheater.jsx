import ListItemMovieTheater from "../listitem/ListItemMovieTheater";
import "./listMovieTheater.scss";

export default function ListMovieTheater({ listes }) {
  return (
    <div className="listMovieTheater">
      <div className="container listMovieTheaterItem">
        {listes.content.slice(0, 5).map((item, i) => (
          <div className="singleItemPlace" key={i}>
            <ListItemMovieTheater item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
