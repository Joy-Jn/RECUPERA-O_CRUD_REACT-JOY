import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const url = "http://localhost:5000/produtos";
const Cadastro = () => {
  
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [tipo, setTipo] = useState("");

  
  const [alertaClass, setAlertaClass] = useState("mb-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Cliquei");
    if (!nome == "") {
      if (!preco == "") {
        if (!tipo == "") {
          console.log("entrei");
          const user = { nome, preco, tipo };
          const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });

          alert("Produto cadastrado com sucesso");
          setNome("");
          setPreco("");
          setTipo("");
          navigate("/listadeprodutos");
        }
      } else {
        setAlertaClass("mb-3");
        setAlertaMensagem("O campo email não pode ser vazio");
      }
    } else {
      setAlertaClass("mb-3");
      setAlertaMensagem("O campo nome não pode ser vazio");
    }
  };

  return (
    <div style={{backgroundColor:"lightpink", minHeight:"100vh"}}>
      <Container>
        <span class="" style={{ fontSize: "40px" }}>
          Cadastre o Produto
        </span>
        <form onSubmit={handleSubmit}>
          
          <FloatingLabel
            controlId="floatingInputName"
            label="Nome"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </FloatingLabel>

          
          <FloatingLabel
            controlId="floatingInputName"
            label="Preço"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Preço"
              value={preco}
              onChange={(e) => {
                setPreco(e.target.value);
              }}
            />
          </FloatingLabel>

          
          <FloatingLabel
            controlId="floatingInputName"
            label="Tipo"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Tipo"
              value={tipo}
              onChange={(e) => {
                setTipo(e.target.value);
              }}
            />
          </FloatingLabel>

          <Alert key="danger" variant="danger" className={alertaClass}>
            {alertaMensagem}
          </Alert>

          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </form>

        
      </Container>
    </div>
  );
};

export default Cadastro;
