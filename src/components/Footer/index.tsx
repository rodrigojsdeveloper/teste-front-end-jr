import { FormNewsAndPromotions } from "../FormNewsAndPromotions";
import { ProductContext } from "../../contexts/ProductContext";
import instagram from "../../assets/044-instagram.svg";
import facebook from "../../assets/023-facebook.svg";
import mastercard from "../../assets/mastercard.svg";
import econverse from "../../assets/Grupo 1999.svg";
import youtube from "../../assets/116-youtube.svg";
import vtex from "../../assets/Group 35 (1).svg";
import visa from "../../assets/Group 1351.svg";
import dinners from "../../assets/dinners.svg";
import sodexo from "../../assets/sodexo.svg";
import ticket from "../../assets/ticket.svg";
import alelo from "../../assets/alelo.svg";
import ifood from "../../assets/ifood.svg";
import amex from "../../assets/amex.svg";
import pix from "../../assets/pix.svg";
import elo from "../../assets/elo.svg";
import { Container } from "./style";
import { useContext } from "react";

const Footer = () => {
  const { setCheckbox } = useContext(ProductContext);

  return (
    <Container onClick={() => setCheckbox(false)}>
      <div>
        <div>
          <div>
            <h3>Sobre nós</h3>

            <div>
              <p>Conheça</p>
              <p>COMO COMPRAR</p>
              <p>Indicação e Desconto</p>
            </div>

            <nav className="navSocialMedia">
              <a
                href="https://www.facebook.com/vtexcommerce/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/vtexbrasil"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href="https://www.youtube.com/@VTEX-Commerce"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtube} alt="youtube" />
              </a>
            </nav>
          </div>
          <div>
            <h3>INFORMAÇÕES ÚTEIS</h3>

            <div>
              <p>FALE CONOSCO</p>
              <p>DÚVIDAS</p>
              <p>Prazos de Entrega</p>
              <p>Formas de Pagamento</p>
              <p>Política de privacidade</p>
              <p>Trocas e Devoluções</p>
            </div>
          </div>
          <div>
            <h3>FORMAS DE PAGAMENTO</h3>

            <div className="paymentMethods">
              <img src={visa} alt="visa" />
              <img src={elo} alt="elo" />
              <img src={alelo} alt="alelo" />
              <img src={dinners} alt="dinners" />
              <img src={ifood} alt="ifood" />
              <img src={mastercard} alt="mastercard" />
              <img src={pix} alt="pix" />
              <img src={amex} alt="american express" />
              <img src={ticket} alt="ticket" />
              <img src={sodexo} alt="sodexo" />
            </div>
          </div>
        </div>

        <FormNewsAndPromotions />
      </div>

      <hr />

      <div>
        <p>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>

        <div>
          <img src={econverse} alt="econverse" />
          <img src={vtex} alt="VTEX" />
        </div>
      </div>
    </Container>
  );
};

export { Footer };
