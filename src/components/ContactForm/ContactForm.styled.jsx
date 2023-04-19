import { Form, Field } from 'formik';
import styled from '@emotion/styled';
import { theme } from 'utils/theme';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 15px 0;
  border: 2px solid ${theme.color.darkGrey};
  border-radius: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  :not(:first-of-type) {
    margin-top: 10px;
  }
  font-size: 20px;
  font-weight: 500;
`;

export const InputName = styled(Field)`
  width: 300px;
  height: 40px;
  margin-top: 5px;
  padding-left: 10px;
  border-radius: 10px;
  font-size: 20px;
`;

export const Button = styled.button`
  width: 180px;
  height: 40px;
  border: 1px solid ${theme.color.darkGrey};
  border-radius: 10px;
  padding: 5px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 500;
  box-shadow: ${theme.boxShadow};
  background-color: ${theme.color.white};
`;

export const ErrorText = styled.p`
  margin-top: 5px;
  color: ${theme.color.red};
  text-align: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
