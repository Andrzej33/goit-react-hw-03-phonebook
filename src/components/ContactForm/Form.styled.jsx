import styled from 'styled-components';

export const FormOfContacts = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;

  label {
    display: block;
    font-size: 18px;
    color: #666;
    padding-bottom: 15px;
    cursor: pointer;
  }

  input {
    background: #ecf0f3;
    padding: 10px;
    padding-left: 20px;
    height: 40px;
    font-size: 20px;
    border-radius: 50px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
    border: 1px solid #999;
    outline: none;
    margin-bottom: 30px;

    &:focus {
      border-color: #ff6f00;
    }
  }

  button {
    margin-top: 30px;
    font-size: 16px;
    max-width: 170px;
    margin: 0 auto;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #ff6f00;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: inline-block;
    cursor: pointer;

    &:hover,
    &:focus {
      background: darken(#ff6f00, 5%);
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0px 10px 15px -6px rgba(88, 85, 85, 0.2);
    }
  }
`;
