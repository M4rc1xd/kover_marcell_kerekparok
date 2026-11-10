import type { Kerekpar } from "./kerekpar";

interface KerekparListaProps {
  kerekparok: Kerekpar[];
}

export default function kerekparLista(props: KerekparListaProps) {
    return (
        <>
    {props.kerekparok.map((kerekpar, index) => (
          <div key={kerekpar.id} className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h3 style={{ color: kerekpar.szin }} className="card-title">{kerekpar.nev}</h3>
          <p className="card-text"><em>{kerekpar.tipus}</em></p>
            <p><u>{kerekpar.napiDij} Ft</u></p>
        </div>
      </div>
        ))}
        </>
        
  )
}
