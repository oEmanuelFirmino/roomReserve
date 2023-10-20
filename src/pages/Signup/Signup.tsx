import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import style from "./Signup.module.scss";
import if_logo from "../../assets/img/if_logo.svg";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email || !emailConf || !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleEmailConfChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailConf(e.target.value);
    setError("");
  };

  const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
    setError("");
  };

  return (
    <div className={style.Signup}>
      <img src={if_logo} className={style.if_logo} alt="Logo do Ifsuldeminas" />
      <div className={style.content}>
        <label className={style.label}>FAÇA O SEU CADASTRO</label>
        <div>
          <input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={handleEmailChange}
            className={style.input}
          />
          <input
            type="email"
            placeholder="Confirme seu E-mail"
            value={emailConf}
            onChange={handleEmailConfChange}
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
          <button onClick={handleSignup} className={style.button}>
            Inscrever-se
          </button>
          <label className={style.label}>
            Já tem uma conta?
            <div>
              <Link to="/" className={style.changer}>
                Entre
              </Link>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Signup;
