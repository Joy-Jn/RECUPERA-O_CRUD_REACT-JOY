import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const url = "http://localhost:5000/produtos";

const ModalCadastrar = (props) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [tipo, setTipo] = useState("");

  const handleCadastrar = async () => {
    if (nome != "" && preco != "" && tipo != "") {
      const user = { nome, preco, tipo, };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      setNome("");
      setPreco("");
      setTipo("");
      alert("Produto cadastrado com sucesso");
      props.onHide();
    } else {
      alert("Produto cadastrado com sucesso");
    }
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cadastrar Produto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <FloatingLabel
            controlId="floatingInputName"
            label="Nome"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Insira o Produto"
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

          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCadastrar}>Cadastrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalCadastrar;
