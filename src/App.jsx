import { useState } from "react";
const articoloVuoto = {
  titolo: '',
  descrizione: ''
};

const listaArticoli = [
  {
    id: 1,
    intitolazione: 'storie fantascientifiche',
    descrizione: 'Racconti ambientati in futuri lontani e universi alternativi. Tra viaggi nello spazio e tecnologie avanzate, esplorano il rapporto tra uomo e progresso. Spesso pongono domande su etica e intelligenza artificiale'
  },
  {
    id: 2,
    intitolazione: 'storie storiche',
    descrizione: 'Narrazioni ispirate a eventi realmente accaduti nel passato. Ricostruiscono epoche, personaggi e culture con attenzione ai dettagli. Un modo coinvolgente per comprendere la storia.'
  },
  {
    id: 3,
    intitolazione: 'come fare il panettone',
    descrizione: 'Guida pratica per preparare il panettone fatto in casa. Dalla scelta degli ingredienti alla lunga lievitazione, ogni passaggio è fondamentale. Ideale per chi vuole cimentarsi nella tradizione italiana.'
  }
]

function App() {
  const [articolo, setArticolo] = useState(articoloVuoto);
  const [aggiungiArticolo, setAggiungiArticolo] = useState([])

  const changeArticolo = (event) => {
    const target = event.target;
    const targetValue = target.value;
    const targetName = target.name

    const nuovoArticolo = {
      ...articolo,
      [targetName]: targetValue
    };
    setArticolo(nuovoArticolo)
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const idArticoloNuovo = {
      ...articolo,
      id: crypto.randomUUID()
    }
    const nuovoArticoloAggiunto = [...aggiungiArticolo, idArticoloNuovo]
    setAggiungiArticolo(nuovoArticoloAggiunto);
    setArticolo(articoloVuoto);
  }


  return <>
    {listaArticoli.map(articolo => {
      const { id, intitolazione, descrizione } = articolo
      return <div key={id} className="card container">
        <div className=" row card-body">
          <div className="col-6">
            <h1 className="card-title text-danger">{intitolazione}</h1>
            <p>{descrizione}</p>
          </div>
        </div>
      </div>
    })}
    {aggiungiArticolo.map(articolo => (
      <div className="card container" key={articolo.id}>
        <div className="card-body row" >
          <div className="col-6">
            <h1 className="card-title text-danger" >{articolo.titolo}</h1>
            <p>{articolo.descrizione}</p>
          </div>
        </div>
      </div>
    ))}

    <form onSubmit={submitHandler}>
      <div className="d-flex  justify-content-center">
        <h1 className="text-primary">Aggiungi un nuovo articolo</h1>
        <input onChange={changeArticolo} placeholder="aggiungi titolo" type="text" value={articolo.titolo} name="titolo" />
        <textarea onChange={changeArticolo} placeholder="aggiungi descrizione" type="text" value={articolo.descrizione} name="descrizione"></textarea>
        <button className="btn btn-info" type="submit">Crea Articolo</button>
      </div>
    </form>

  </>
}
export default App;
