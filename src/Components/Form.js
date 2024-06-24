import styled from "styled-components";
import React from "react";
const Form = () => {
  return (
    <MainContainer>
      <Information>
        <form action="../App.js" method="post">
          <ul>
            <li>
              <label for="name">Nom&nbsp;:</label>
              <input type="text" id="name" name="user_name" />
            </li>
            <li>
              <label for="name">Prenom&nbsp;:</label>
              <input type="text" id="name" name="user_surname" />
            </li>
            <li>
              <label for="mail">E-mail&nbsp;:</label>
              <input type="email" id="mail" name="user_mail" />
            </li>
            <li>
              <label for="telephone">Telephone&nbsp;:</label>
              <input type="tel" id="tel" name="tel" />
            </li>
            <li>
              <label for="Adresse">Rue&nbsp;:</label>
              <input type="text" id="street" name="user_street"></input>
            </li>
            <li>
              <label for="Adresse">Ville&nbsp;:</label>
              <input type="text" id="city" name="user_city"></input>
            </li>
            <li>
              <label for="Adresse">Code Postale&nbsp;:</label>
              <input type="text" id="zip_code" name="user_zip_code"></input>
            </li>
            <li>
              <label for="Password">Mot de Passe&nbsp;:</label>
              <input type="password" id="password" name="password"></input>
            </li>

            <li>
              <label for="Password">Confirmation Mot de Passe&nbsp;:</label>
              <input
                type="password"
                id="verified_password"
                name="verified_password"
              ></input>
            </li>
          </ul>
        </form>
      </Information>
    </MainContainer>
  );
};

export default Form;

const MainContainer = styled.div`
   {
    border-style: solid black 1px;
    width: 150px;
    height: 80%;
    border-radius: 15px;
  }
`;

const Information = styled.div`
  & > form > ul {
    list-style-type: none;
  }
`;
