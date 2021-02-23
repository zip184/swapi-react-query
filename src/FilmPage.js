import { useFilm, usePerson, usePlanet } from "./api";
import Header from "./ui/Header";
import FactSheet from "./ui/FactSheet";
import EntityPage from "./ui/EntityPage";
import EntityList from "./ui/EntityList";

const fields = [
  ["director", "director"],
  ["Producer", "producer"],
  ["Release Date", "release_date"],
];

const FilmPage = ({ filmId, selectPerson, selectPlanet }) => {
  const film = useFilm(filmId);

  return (
    <EntityPage>
      <Header rank={1}>{film ? film.title : "Loading..."}</Header>
      <FactSheet title="Film Facts" entity={film} fields={fields} />
      {film && (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <EntityList
            title="Planets"
            entityIds={film.planetIds}
            selectEntity={selectPlanet}
            useEntity={usePlanet}
          />
          <EntityList
            title="Characters"
            entityIds={film.personIds}
            selectEntity={selectPerson}
            useEntity={usePerson}
          />
        </div>
      )}
    </EntityPage>
  );
};

export default FilmPage;
