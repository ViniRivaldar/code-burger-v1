import React, {useState, useRef} from "react";
import axios from "axios";
import {
  Container,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./style";
import Burguer from "../../assets/burger.png";
import { useNavigate } from "react-router-dom"


function Home() {
  const [order, setOrder] = useState([]);
  const inputOrder = useRef();
  const inputClient = useRef();
  const navigate = useNavigate();

  async function addNewOrder(){
    const {data: newOrder} = await axios.post("http://localhost:3001/order", {
      order: inputOrder.current.value,
      client: inputClient.current.value,
    });
    setOrder([...order, newOrder]);
    navigate('/pedidos')
  }

  return (
    <Container>
      <img src={Burguer} alt="logo" />
      <ContainerItens>
        <H1>Faça seu Pedido</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder}placeholder="1 Coca-Cola, 1-X Salada" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClient} placeholder="Steve Jobs" />

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
}
export default Home;
