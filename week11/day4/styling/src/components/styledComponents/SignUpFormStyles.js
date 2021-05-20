import styled from "styled-components";

export const SignUpButton = styled.button`
  background-color: #1fd1f9;
  background-image: linear-gradient(
    315deg,
    rgb(31, 209, 249) 0%,
    rgb(182, 33, 254) 74%
  );
  width: 200px;
  height: 40px;
  color: white;
  font-family: sans-serif;
  font-size: 1.1rem;
  border-radius: 17px;
  border: 0;
`;

export const SignUpFormInput = styled.input`
  height: 2.2rem;
  width: 10rem;
  border-radius: 16px;
  border: 1px solid gray;
  margin: 5px;
  text-align: center;
`;

export const SignUpFormCSS = styled.form`
  display: grid;
  place-items: center;
`;
