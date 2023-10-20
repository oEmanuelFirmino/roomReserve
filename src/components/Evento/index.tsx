import React from "react";
import { IEvento } from "../../interfaces/IEvento";
import useDeletarEvento from "../../state/hooks/useDeletarEvento";
import style from "./Evento.module.scss";
import EventoCheckbox from "./EventoCheckbox";
import PermissionGate from "../../PermissionGate";

const Evento: React.FC<{ evento: IEvento }> = ({ evento }) => {
  const excluirEvento = useDeletarEvento();

  const estilos = [style.Evento];

  if (evento.completo) {
    estilos.push(style.completo);
  }

  return (
    <div className={estilos.join(" ")}>
      <PermissionGate
        permissions={["canEdit"]}
        user={{ permissions: ["canEdit"] }}
      >
        <EventoCheckbox evento={evento} />
      </PermissionGate>
      <div className="cards-info">
        <h3 className={style.professor}>{evento.professor}</h3>
        <p>
          <strong>Dia: </strong>
          {evento.inicio.toLocaleDateString()}
        </p>
        <p>
          <strong>Horário: </strong>
          {evento.inicio.toLocaleTimeString().slice(-0, -3)} às{" "}
          {evento.fim.toLocaleTimeString().slice(-0, -3)}
        </p>
      </div>
      <PermissionGate
        permissions={["canEdit"]}
        user={{ permissions: ["canEdit"] }}
      >
        <i
          className="far fa-times-circle fa-2x"
          onClick={() => excluirEvento(evento)}
        ></i>
      </PermissionGate>
    </div>
  );
};

export default Evento;
