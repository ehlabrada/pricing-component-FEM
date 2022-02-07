import styled from "styled-components";



export const PricingSection = styled.div`
  padding: 50px 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`

export const PricingTitle = styled.h1`

  font-size: 34px;
  opacity: 0.7;
  margin-bottom: 40px;

`

export const SelectPricingPeriod = styled.div`
  margin-bottom: 50px;

  display: flex;
  align-items: center;
  
`
export const PeriodText = styled.div`
  border-bottom: ${(props) => props.period ? "2px solid darkgray !important" : ""};

p{
    opacity: 0.5;
    margin: 3px 15px;
    
  }
`

export const ToggleButton = styled.input`
  cursor: pointer;
  height: 25px;
  width: 25px;
  margin: 10px;

`

export const PricingBoxWrapper = styled.div`

  /* Flex */
  display: flex;
  align-items: baseline;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    
  }

`
export const PricingBox = styled.div`

  width: 350px;
  height: 500px;
  padding: 20px;
  color: black;
  background: #ffffff;
  border-radius: 10px;

  transition: all 0.5s ease;
  align-self: center;

  /* Flex */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  &:hover{
    transform: scale(105%);
  }

  :nth-of-type(2){
    color: white;
    background: #7d55f6;
    height: 550px;
    
    @media screen and (max-width: 768px){
      width: 375px;
      margin: 30px 0;
      height: 500px ;
    }
  }

  @media screen and (max-width: 768px){
      width: 375px;
    }

`
export const BoxPrice = styled.h1`
  font-size: 55px;

`
export const BoxCharacteristics = styled.ul`


`

export const CharacteristicsElement = styled.li`
  padding: 10px;
  border-top: 1px solid black;
  text-align: center;
  text-decoration: none;
  list-style: none;

  &:last-child{
    border-bottom: 1px solid black;
  }

`




export const BoxButton = styled.button`

  width: 100%;
  padding: 12px;
  border-radius: 7px;
  font-size: 1.2em;

  color: ${({ buttonProfessional }) => buttonProfessional ? "#2a52be" : 'white !important'};
  background: ${({buttonProfessional}) => buttonProfessional ? 'white' : 'rgb(0,212,255)'};
  background: ${({ buttonProfessional }) => buttonProfessional ? '' : 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(75,75,168,1) 1%, rgba(139,136,186,1) 92%)'};
  border: ${({ buttonProfessional }) => buttonProfessional ? '0.5px solid white' : '0.5px solid black;'};

  &:hover {
    background: transparent;
    color: ${({ buttonProfessional }) => buttonProfessional ? "white !important" : 'black !important'};
  }


`
