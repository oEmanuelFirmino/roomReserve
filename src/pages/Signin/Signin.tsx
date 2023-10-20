import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import style from "../Signin/Signin.module.scss";
import if_logo from "../../assets/img/if_logo.svg";

const Signin: React.FC = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string>("");

  const handleLogin = () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
    setError("");
  };

  return (
    <div className={style.Signin}>
      <img src={if_logo} className={style.if_logo} alt="Logo do Ifsuldeminas" />
      <div className={style.content}>
        <label className={style.label}>FAÇA O SEU LOGIN</label>
        <div>
          <input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={handleEmailChange}
            className={style.input}
          />
          <input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={handleSenhaChange}
            className={style.input}
          />
          <label className={style.label}>{error}</label>
          <button onClick={handleLogin} className={style.button}>
            Entrar
          </button>
          <label className={style.label}>
            Não tem uma conta?
            <div>
              <Link to="/signup" className={style.changer}>
                Registre-se
              </Link>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Signin;
