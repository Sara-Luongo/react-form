import HelloClasse154 from "./components/HelloClasse154";
const listaArticoli = [
  {
    id: 1,
    intitolazione: 'titolo',
    descrizione: 'descrizione'

  },
  {
    id: 2,
    intitolazione: 'titolo',
    descrizione: 'descrizione'

  },
  {
    id: 3,
    intitolazione: 'titolo',
    descrizione: 'descrizione'

  }
]

function App() {
  return <>
    {listaArticoli.map(articolo => {
      const { id, intitolazione, descrizione } = articolo
      return <div key={id} nameclass="card">
        <div nameclass="card-body">
          <h1 nameclass="card-title">{intitolazione}</h1>
          <p>{descrizione}</p>
        </div>

      </div>

    })}
  </>
}
export default App;
