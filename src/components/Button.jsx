import styled from 'styled-components';

const SIZES = {
  sm: `
    font-size: 200px;
    padding: 8px 12px;
  `,
  md: `
    font-size: 1rem;
    padding: 12px 16px;
  `,
  lg: `
    font-size: 100px;
    padding: 16px 20px;
    height: 400px;
  `,
};
function Button({ disabled, size, children }) {
  const sizeStyle = SIZES[size];
  console.log(sizeStyle);

  return (
    <StyledButton disabled={disabled} sizeStyle={sizeStyle}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}

  margin: 10px;
  border: none;
  cursor: pointer;
  /* 이하 생략 */
`;

export default Button;
