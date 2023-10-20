import React, { useState } from "react";
import useAdicionarEvento from "../../state/hooks/useAdicionarEvento";
import style from "./Formulario.module.scss";
import PermissionGate from "../../PermissionGate";

const Formulario: React.FC = () => {
  const adicionarEvento = useAdicionarEvento();

  const [professor, setProfessor] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [horaFim, setHoraFim] = useState("");

  const montarData = (data: string, hora: string) => {
    const dataString = data.slice(0, 10);
    return new Date(`${dataString}T${hora}`);
  };

  const submeterForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const evento = {
        professor,
        inicio: montarData(dataInicio, horaInicio),
        fim: montarData(dataFim, horaFim),
        completo: false,
      };
      adicionarEvento(evento);
      setProfessor("");
      setDataInicio("");
      setHoraInicio("");
      setDataFim("");
      setHoraFim("");
    } catch (erro) {
      alert(erro);
    }
  };
  return (
    <PermissionGate
      permissions={["canEdit"]}
      user={{ permissions: ["canEdit"] }}
    >
      <form className={style.Formulario} onSubmit={submeterForm}>
        <h3 className={style.titulo}>Novo evento</h3>

        <label>Professor</label>
        <input
          type="text"
          name="professor"
          id="professor"
          className={style.input}
          onChange={(evento) => setProfessor(evento.target.value)}
          placeholder="Professor"
          value={professor}
          autoComplete="off"
          required
        />

        <label>Data de início</label>
        <div className={style.inputContainer}>
          <input
            type="date"
            name="dataInicio"
            className={style.input}
            onChange={(evento) => setDataInicio(evento.target.value)}
            value={dataInicio}
            required
          />
          <input
            type="time"
            name="horaInicio"
            className={style.input}
            onChange={(evento) => setHoraInicio(evento.target.value)}
            value={horaInicio}
            required
          />
        </div>

        <label>Data de término</label>
        <div className={style.inputContainer}>
          <input
            type="date"
            name="dataFim"
            className={style.input}
            onChange={(evento) => setDataFim(evento.target.value)}
            value={dataFim}
            required
          />
          <input
            type="time"
            name="horaFim"
            className={style.input}
            onChange={(evento) => setHoraFim(evento.target.value)}
            value={horaFim}
            required
          />
        </div>

        <button className={style.botao}>Salvar</button>
      </form>
    </PermissionGate>
  );
};

export default Formulario;
