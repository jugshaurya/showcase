import styled from 'styled-components';

const primary_400 = '#FF6B6B';
const primary_500 = '#FFFFFF';

// Shared Piece of code for buttons
const BaseButton = styled.button`
  font-size: 1rem;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  font-family: 'Roboto Mono', monospace;
  cursor: pointer;
  min-width: 100px;
`;

// Inhertance require styled()`` and not styled``
const PrimaryButton = styled(BaseButton)`
  background-color: ${primary_400};
  border: none;
  color: white;
  &:hover {
    background-color: #222;
  }
`;

const SecondaryButton = styled(BaseButton)`
  background-color: ${primary_500};
  border: 2px solid ${primary_400};
  color: ${primary_400};
  &:hover {
    background-color: #222;
  }
`;

export default PrimaryButton;
export { SecondaryButton };
