import { useState } from "react";
import { Pricing } from "./components/index";
import GlobalStyle from "./globalStyles";
import data from './data'


function App() {

  const [isMonthly, setIsMonthly] = useState(true);

  const handlePeriodTime = ({target}) => {

    setIsMonthly(prevState => !prevState)
  }

  


  return (
    <>
      <GlobalStyle />
      <Pricing
        data={data}
        periodTime={isMonthly}
        handleToggle={handlePeriodTime}
      />
    </>
  );
}

export default App;
