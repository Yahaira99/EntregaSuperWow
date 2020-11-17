import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Movimiento.css";

export default function Movimiento({ id, Nombre, tipoMovimiento, Cantidad }) {

    const [estilo, setEstilo] = useState("bg-ingreso");

    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
    return (
        <tr>
            <td className="columna">
                {" "}
                <img
                    className="lapiz"
                    src="https://www.dosacordes.es/web/wp-content/uploads/2020/06/icono-lapiz.png"
                    alt="Editar"
                ></img>{" "}
            </td>
            <td>
                {" "}
                <img
                    className="lapiz"
                    src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_prodpictxmark_1484336297-1.png"
                    alt="Borrar"
                ></img>{" "}
            </td>
            <td>{tipoMovimiento}</td>
            <td>{Nombre}</td>
            <td>
                <div className={tipoMovimiento}>
                    {formatterPeso.format(Cantidad)}
                </div>
            </td>
        </tr>

    )
};
