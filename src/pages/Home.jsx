import CardC from "../components/CardC";
import CarouselC from "../components/CarouselC";


const Home = () => {
  return (
    <div>
      <CarouselC />
      <div style={{ padding: "80px" }}>
        <h2>Nossos produtos</h2>
        <div className="card-group" >
          <p>Temos aparelhos eletronicos de todo o tipo sendo celulares, smartwatchs, computadores entre outros
            
          Os aparelhos eletrônicos são parte fundamental de nossas vidas modernas, desempenhando um papel cada vez mais central em nosso cotidiano. Esses dispositivos são projetados para melhorar a nossa eficiência, entretenimento e conectividade. Desde os computadores pessoais aos smartphones, tablets, TVs, eletrodomésticos inteligentes e wearables, os aparelhos eletrônicos estão por toda parte e desempenham funções variadas em nossas vidas. </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
