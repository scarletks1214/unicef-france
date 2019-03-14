import styled from 'styled-components';

export default styled.label`
  margin-bottom: 6px;
  display: inline-block;

  text-transform: uppercase;
  letter-spacing: 2px;

  ${props => props.padRight && `margin-right: 20px;`}
`
