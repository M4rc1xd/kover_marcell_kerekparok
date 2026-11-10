import type { Kerekpar } from "./kerekpar";
import { useState } from "react";

interface KerekparListaProps {
  kerekparok: Kerekpar[];
}

export default function KerekparLista(props: KerekparListaProps) {
  const [reszletekMutatasa, setReszletekMutatasa] = useState<boolean[]>([]);
  for (let i = 0; i < props.kerekparok.length; i++) {
    if (reszletekMutatasa[i] === undefined) {
      reszletekMutatasa[i] = true;
    }
  }
  console.log(reszletekMutatasa);

  return (
    <>
      {props.kerekparok.map((kerekpar, index) => (
        
        <div key={kerekpar.id} className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h3 style={{ color: kerekpar.szin }} className="card-title">
              {kerekpar.nev}
            </h3>

            { reszletekMutatasa[index] && (
              <p className="card-text">
              <em>{kerekpar.tipus}</em>
            </p>
        )}
        {reszletekMutatasa[index] && (
          <p className="card-text">
            <u>{kerekpar.napiDij} Ft</u>
          </p>
        )}

            
            <button onClick= {() =>{
                setReszletekMutatasa((prevState) => {
                  const newState = [...prevState];
                  newState[index] = !newState[index];
                  return newState;
                });
            }}>Reszletek mutatasa</button>
          </div>
        </div>
      ))}
    </>
  );
}
