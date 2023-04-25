import { useState } from "react";

export const Formulario = () => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [classificacao, setClassificacao] = useState("Nenhuma");

  const handleChange = (e) => {
    switch (e.target.id) {
      case "peso":
        setPeso(parseFloat(e.target.value));
        break;
      case "altura":
        setAltura(parseFloat(e.target.value));
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const imc = peso / altura ** 2;
    setResultado(imc);
    classificarImc(imc);
  };

  const classificarImc = (imc) => {
    if (imc < 18.5) {
      setClassificacao("Magreza");
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassificacao("Normal");
    } else if (imc >= 24.9 && imc < 29.9) {
      setClassificacao("Sobrepeso");
    } else if (imc >= 29.9 && imc < 39.9) {
      setClassificacao("Obesidade");
    } else {
      setClassificacao("Obesidade Grave");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="peso">Peso (Kg): </label>
      <input
        type="number"
        onChange={handleChange}
        id="peso"
        name="peso"
        step="0.01"
      />
      <br />
      <label for="altura">Altura (cm): </label>
      <input
        type="number"
        onChange={handleChange}
        id="altura"
        name="altura"
        step="0.01"
      />
      <br />
      <br />
      <button type="submit">Calcular IMC</button>
      <div>
        <h2>Resultado: {resultado}</h2>
        <h2>Classificação: {classificacao}</h2>
      </div>
    </form>
  );
};
