import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

const Form = ({ setIsLoggedIn }) => {
  const [showSignUp, setShowSignUp] = useState(false);
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
  const [formErrors, setFormErrors] = useState({});
  const [captchaValue, setCaptchaValue] = useState(null);
  const navigate = useNavigate();

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleRecaptcha = (value) => {
    setCaptchaValue(value);
  };

  const validateForm = () => {
    const errors = {};
    if (showSignUp) {
      const requiredFields = ['user_name', 'user_surname', 'user_mail', 'tel', 'user_street', 'user_city', 'user_zip_code', 'password', 'verified_password'];
      requiredFields.forEach(field => {
        if (!formData[field]) {
          errors[field] = 'Ce champ est requis';
        }
      });
      if (formData.password !== formData.verified_password) {
        errors.verified_password = 'Les mots de passe ne correspondent pas';
      }
    } else {
      const requiredFields = ['login_email', 'login_password'];
      requiredFields.forEach(field => {
        if (!formData[field]) {
          errors[field] = 'Ce champ est requis';
        }
      });
    }
    if (!captchaValue) {
      errors.captcha = 'Veuillez compléter le captcha';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Logique de soumission du formulaire
    // Si la soumission est réussie
    setIsLoggedIn(true);
    navigate('/');
  };
  
  return (
    <PageContainer>
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
                    <InputWithError
                      type={field.type || 'text'}
                      id={field.id}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      hasError={formErrors[field.name]}
                    />
                    {formErrors[field.name] && (
                      <ErrorTooltip>{formErrors[field.name]}</ErrorTooltip>
                    )}
                  </li>
                ))}
              </ul>
              <ReCAPTCHA sitekey="6Ld9swMqAAAAAFgMM18QF5VvxEks1GLtIV1IOpUo" onChange={handleRecaptcha} />
              {formErrors.captcha && (
                <ErrorTooltip>{formErrors.captcha}</ErrorTooltip>
              )}
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
                  <InputWithError
                    type="email"
                    id="login_email"
                    name="login_email"
                    value={formData.login_email}
                    onChange={handleInputChange}
                    hasError={formErrors.login_email}
                  />
                  {formErrors.login_email && (
                    <ErrorTooltip>{formErrors.login_email}</ErrorTooltip>
                  )}
                </li>
                <li>
                  <label htmlFor="login_password">Mot de Passe&nbsp;:</label>
                  <InputWithError
                    type="password"
                    id="login_password"
                    name="login_password"
                    value={formData.login_password}
                    onChange={handleInputChange}
                    hasError={formErrors.login_password}
                  />
                  {formErrors.login_password && (
                    <ErrorTooltip>{formErrors.login_password}</ErrorTooltip>
                  )}
                </li>
              </ul>
              <ReCAPTCHA sitekey="6Ld9swMqAAAAAFgMM18QF5VvxEks1GLtIV1IOpUo" onChange={handleRecaptcha} />
              {formErrors.captcha && (
                <ErrorTooltip>{formErrors.captcha}</ErrorTooltip>
              )}
              <SubmitButton type="submit">Se connecter</SubmitButton>
            </form>
          </FormSection>
        )}
      </MainContainer>
    </PageContainer>
  );
};

export default Form;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 

`;

const MainContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border-radius: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box; 
  margin: 40px 0; 

  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px; 
    width: calc(100% - 40px); 
  }
`;

const ErrorTooltip = styled.div`
  position: absolute;
  top: 100%; 
  right: 0; 
  background-color: red;
  color: white;
  padding: 5px;
  border-radius: 4px;
  font-size: 10px;
  white-space: nowrap;
  

  &::before {
    content: '';
    position: absolute;
    top: -5px; 
    right: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: red transparent transparent transparent;
  }

  @media (max-width: 768px) {
    font-size: 8px; 
  }
`;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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

  @media (max-width: 768px) {
    margin: 5px 0;
    width: 100%;
    max-width: 300px;
  }
`;

const FormSection = styled.div`
  padding: 20px;

  h2 {
    margin-bottom: 15px;
  }

  & > form > ul {
    list-style-type: none;
    padding: 0;
  }

  & > form > ul > li {
    margin-bottom: 40px; 
    position: relative; 
  }

  & > form > ul > li > label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  & > form > ul > li > input {
    flex-grow: 1;
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
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #7da82b;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const InputWithError = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${(props) => (props.hasError ? 'red' : '#ccc')};
  border-radius: 4px;
  margin-bottom: 5px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 6px;
  }
`;


