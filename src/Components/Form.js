import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

const Form = ({ setIsLoggedIn }) => {
  const [showSignUp, setShowSignUp] = useState(false); // Par défaut, afficher le formulaire de connexion
  const [formData, setFormData] = useState({
    user_name: '',
    user_surname: '',
    user_mail: '',
    tel: '',
    user_street: '',
    user_city: '',
    user_zip_code: '',
    password: '',
    verified_password: '',
    login_email: '',
    login_password: ''
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRecaptcha = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (showSignUp) {
      const { user_name, user_surname, user_mail, tel, user_street, user_city, user_zip_code, password, verified_password } = formData;
      if (!user_name || !user_surname || !user_mail || !tel || !user_street || !user_city || !user_zip_code || !password || !verified_password || !captchaValue) {
        alert('Veuillez remplir tous les champs et compléter le captcha.');
        return;
      }
    } else {
      const { login_email, login_password } = formData;
      if (!login_email || !login_password || !captchaValue) {
        alert('Veuillez remplir tous les champs et compléter le captcha.');
        return;
      }
    }

    // Logique de soumission du formulaire
    // Si la soumission est réussie
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <MainContainer>
      <ButtonContainer>
        <ToggleButton onClick={() => setShowSignUp(false)} active={!showSignUp}>
          Connexion
        </ToggleButton>
        <ToggleButton onClick={() => setShowSignUp(true)} active={showSignUp}>
          Inscription
        </ToggleButton>
      </ButtonContainer>
      {showSignUp ? (
        <FormSection>
          <h2>Inscription</h2>
          <form onSubmit={handleSubmit}>
            <ul>
              {[
                { id: 'name', label: 'Nom', name: 'user_name' },
                { id: 'surname', label: 'Prenom', name: 'user_surname' },
                { id: 'mail', label: 'E-mail', name: 'user_mail', type: 'email' },
                { id: 'telephone', label: 'Telephone', name: 'tel', type: 'tel' },
                { id: 'street', label: 'Rue', name: 'user_street' },
                { id: 'city', label: 'Ville', name: 'user_city' },
                { id: 'zip_code', label: 'Code Postale', name: 'user_zip_code' },
                { id: 'password', label: 'Mot de Passe', name: 'password', type: 'password' },
                { id: 'verified_password', label: 'Confirmation Mot de Passe', name: 'verified_password', type: 'password' }
              ].map(field => (
                <li key={field.id}>
                  <label htmlFor={field.id}>{field.label}&nbsp;:</label>
                  <input
                    type={field.type || 'text'}
                    id={field.id}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                  />
                </li>
              ))}
            </ul>
            <ReCAPTCHA sitekey="6Ld9swMqAAAAAFgMM18QF5VvxEks1GLtIV1IOpUo" onChange={handleRecaptcha} />
            <SubmitButton type="submit">S'inscrire</SubmitButton>
          </form>
        </FormSection>
      ) : (
        <FormSection>
          <h2>Connexion</h2>
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <label htmlFor="login_email">E-mail&nbsp;:</label>
                <input type="email" id="login_email" name="login_email" value={formData.login_email} onChange={handleInputChange} />
              </li>
              <li>
                <label htmlFor="login_password">Mot de Passe&nbsp;:</label>
                <input type="password" id="login_password" name="login_password" value={formData.login_password} onChange={handleInputChange} />
              </li>
            </ul>
            <ReCAPTCHA sitekey="6Ld9swMqAAAAAFgMM18QF5VvxEks1GLtIV1IOpUo" onChange={handleRecaptcha} />
            <SubmitButton type="submit">Se connecter</SubmitButton>
          </form>
        </FormSection>
      )}
    </MainContainer>
  );
};

export default Form;

const MainContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  margin: 100px auto; /* Adding space from navbar and footer */
  border-radius: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ToggleButton = styled.button`
  background-color: ${(props) => (props.active ? '#90c138' : '#ccc')};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 10px;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: ${(props) => (props.active ? '#7da82b' : '#999')};
  }
`;

const FormSection = styled.div`
  padding: 20px; /* Adding padding to ensure fields don't touch the container edges */

  h2 {
    margin-bottom: 15px;
  }

  & > form > ul {
    list-style-type: none;
    padding: 0;
  }

  & > form > ul > li {
    margin-bottom: 15px;
  }

  & > form > ul > li > label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  & > form > ul > li > input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  & > form > ul > li > input:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #90c138;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: #7da82b;
  }
`;
