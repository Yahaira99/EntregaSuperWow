import "./App.css";
import Header from "./components/Header";
import Registro from "./components/Registro";
import "bootstrap/dist/css/bootstrap.min.css";
import LMovimientos from "./components/LMovimientos";
import React, { useEffect, useState } from "react";

function App() {
  const [movimientos, setMovimientos] = useState([]);
  const [SaldoInicial, setSaldoInicial] = useState(0);
  const [SaldoFinal, setSaldoFinal] = useState(0);



  useEffect(() => {
    setSaldoFinal(SaldoInicial)
    movimientos.map((movimiento) => {

      if (movimiento.tipoMovimiento === "Gasto") {

        setSaldoFinal(SaldoFinal - movimiento.Cantidad);
      }
      else if (movimiento.tipoMovimiento === "Ingreso") {
        setSaldoFinal(parseInt(SaldoFinal) + parseInt(movimiento.Cantidad));
      }
      return SaldoFinal;
    });

  }, [movimientos, SaldoInicial, setSaldoFinal]);

  const addmovimiento = (movimiento) => {
    setMovimientos([...movimientos, movimiento]);

  };



  return (
    <div className="App-header">
      <Header
        setSaldoInicial={setSaldoInicial}
        SaldoInicial={SaldoInicial}
        SaldoFinal={SaldoFinal}
      />
      <div className="row">
        &nbsp;&nbsp;
      <Registro
          addmovimiento={addmovimiento}
          SaldoInicial={SaldoInicial}
          SaldoFinal={SaldoFinal}
          setSaldoFinal={setSaldoFinal}
        />
&nbsp;&nbsp;
<div className="movimientos col-7">
          <LMovimientos movimientos={movimientos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;