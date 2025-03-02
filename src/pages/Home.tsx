import React from 'react'
import { useState } from "react";
import Checkbox from "../components/checkbox"

function Home() {

  const [isCheckedA, setIsCheckedA] = useState(false);
  const [isCheckedB, setIsCheckedB] = useState(false);
  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedA(e.target.checked);
  };
  const handleChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedB(e.target.checked);
  };

  return(
    <div>
      <div className='h1'>
        Home
      </div>
      <div>
        <Checkbox 
          label = "box "
          isChecked = {isCheckedA}
          handleChange = {handleChangeA}
        />
      </div>
      <div>
      <Checkbox 
          label = "box 2 "
          isChecked = {isCheckedB}
          handleChange = {handleChangeB}

        />
      </div>
    </div>
  )
}

export default Home;