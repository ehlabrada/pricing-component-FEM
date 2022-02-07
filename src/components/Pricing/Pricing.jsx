import React from 'react';
import {
  PricingTitle,
  PricingSection,
  SelectPricingPeriod,
  ToggleButton,
  PricingBoxWrapper,
  PricingBox,
  BoxPrice,
  BoxButton,
  BoxCharacteristics,
  CharacteristicsElement,
  PeriodText,
} from './Pricing.styled';

const Pricing = (props) => {
  console.log("Is Montly", props.periodTime)
  return (
    <PricingSection>
      <PricingTitle > Our Pricing </PricingTitle>
      <SelectPricingPeriod >
        <PeriodText period={!props.periodTime}>
          <p  >Annually</p>
        </PeriodText>
        <ToggleButton type='checkbox' name='isMonthly' checked={props.isMonthly} value={props.isMonthly} onChange={props.handleToggle} />
        <PeriodText period={props.periodTime}>
          <p >Monthly</p>
        </PeriodText>
      </SelectPricingPeriod>
      <PricingBoxWrapper >
        {
          props.data.map(box => {
            return (
              <PricingBox key={box.id}>
                <p>{box.title}</p>
                <BoxPrice>&#36;{props.periodTime
                  ? box.price[0].monthly
                  : box.price[1].annually
                }</BoxPrice>

                <BoxCharacteristics >
                  {box.characteristics.map((char) => {
                    return (
                      <CharacteristicsElement key={char}>
                        {char}
                      </CharacteristicsElement>
                    )
                  })}
                </BoxCharacteristics>
                {
                  box.id === 2
                    ? <BoxButton buttonProfessional >Learn More</BoxButton>
                    : <BoxButton >Learn More</BoxButton>
                }
              </PricingBox>
            )
          })
        }


      </PricingBoxWrapper>
    </PricingSection>

  )
};

export default Pricing;
