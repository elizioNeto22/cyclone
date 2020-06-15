import styled from 'styled-components' // this style keyword allows us to generate components

/* 
criar um Comp. atribuir styled.your desired html element and interpolation string
inside the int. string is just write css

We also can leverage props like on the isActive example to use with the element, the css property or both 
 */

export const HomepageContainer = styled.div`
  // display: ${({ isMobile }) => (!isMobile ? 'flex' : 'none')};
  // align-items: center;
  // padding: 20px 80px;

  ${({ isMobile }) =>
    !isMobile
      ? `
    display: flex;
    align-items: center;
    padding: 20px 80px;
  `
      : `
    display: none;
  `}
`
