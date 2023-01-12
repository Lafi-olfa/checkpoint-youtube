import React from "react";
import Accordion from "react-bootstrap/Accordion";

const MoreInfo = () => {
  return (
    <Accordion
      defaultActiveKey="0"
      style={{ height: "70px",marginTop:"50px" ,width: "650px", borderRadius: "20px" }}
    >
      <Accordion.Item>
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>
          <h5>1 266 504 vues 23 août 2018</h5>
          <p>
            Dans cette vidéo, nous couvrirons tout ce que vous devez savoir pour
            vous familiariser avec CSS en seulement 20 minutes. Nous aborderons
            la syntaxe CSS, la manière d’ajouter du CSS à votre code HTML, les
            couleurs CSS, les unités CSS, le modèle de boîte et les meilleures
            pratiques pour CSS. À la fin de cette vidéo, vous en saurez assez
            sur CSS pour styliser n'importe quelle page Web de base dans vos
            propres projets!
          </p>
          <h3>Introduction à la série HTML:</h3>
          <a href="https://www.youtube.com/watch?v=BvJYXl2ywUE&list=PLZlA0Gpn_vH8BoXcpCUvdmdPZFuR5y2lV&index=1&t=0s"></a>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default MoreInfo;
