import React, {useState, useEffect} from "react";
import axios from "axios";
import {
  Container,
  ContainerItens,
  H1,
  Orders,
  Button,
} from "./style";
import Pedido from "../../assets/burger1.png";
import Trash from "../../assets/18297 4.svg"
import { useNavigate } from "react-router-dom";

function Order() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrder() {
      const { data: newOrder } = await axios.get("http://localhost:3001/order");
      setOrders(newOrder);
      
    }
    fetchOrder()
  },[]);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`);
    const newOrders = orders.filter((order) => order.id !== orderId); // Correção aqui
    setOrders(newOrders);
  }
  function goBackPages() {
    navigate("/");
  }

  return (
    <Container>
      <img src={Pedido} alt="pedido" />
      <ContainerItens>
        <H1>Pedidos</H1>
          {orders.map((order) => (
            <Orders key={order.id}>
              <p>{order.order}</p> 
              <p>{order.client}</p>
              <button onClick={() => deleteOrder(order.id)}>
                <img alt="excluir" src={Trash} />
              </button>
            </Orders>
          ))}
        <Button onClick={goBackPages}>Novo Pedido </Button>
      </ContainerItens>
    </Container>
  );
}
export default Order;
