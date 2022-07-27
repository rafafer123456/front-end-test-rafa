import { CardList } from '../components';

export const MarvelPage = () => {
  return (
    <>     
    <div className="dropdown select-new">
      <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Select your news
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a className="dropdown-item" href="#">Angular</a></li>
        <li><a className="dropdown-item" href="#">Reactjs</a></li>
        <li><a className="dropdown-item" href="#">Vuejs</a></li>
      </ul>
    </div>       
      <h1>Marvel Comics 11</h1>
      <hr />

      <CardList publisher='Marvel Comics' />

    </>
  )
}
