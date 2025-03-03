import AddButton from "./AddButton";
import DevideButton from "./DevideButton";
import EqualButton from "./EqualButton";
import MultiplyButton from "./MultiplyButton";
import ResetButton from "./ResetButton";
import SubstractButton from "./SubstractButton";

export default function Buttons({setInput}){

  const handleClickButton = ([value]) =>{
    setInput((curInput) => curInput + [value])
  }

  const resetClickHandler = () =>{
    setInput('')
  }

  const resultClickHandler = () => {
    setInput((curInput) => {
    
      if (/[\+\-\*\/]{2,}/.test(curInput) || /[^0-9\+\-\*\/.]/.test(curInput)) {
        return "Error"; 
      }
      
      try {
        return eval(curInput); 
      } catch {
        return "Error"; 
      }
    });
  };
    return(
        <div id="buttons">
                  <button type="button">
                    <label htmlFor="d1-7" className="digit1" onClick={() => handleClickButton('7')}></label>
                    7
                  </button>
                  <button type="button">
                    <label htmlFor="d1-8" className="digit1" onClick={() => handleClickButton('8')}></label>
                    8
                  </button>
                  <button type="button">
                    <label htmlFor="d1-9" className="digit1" onClick={() => handleClickButton('9')}></label>
                    9
                  </button>

                     <DevideButton handleClickButton={handleClickButton}/>

                  <button type="button">
                    <label htmlFor="d1-4" className="digit1" onClick={() => handleClickButton('4')}></label>
                    4
                  </button>
                  <button type="button">
                    <label htmlFor="d1-5" className="digit1" onClick={() => handleClickButton('5')}></label>
                    5
                  </button>
                  <button type="button">
                    <label htmlFor="d1-6" className="digit1" onClick={() => handleClickButton('6')}></label>
                    6
                  </button>

                    <MultiplyButton handleClickButton = {handleClickButton}/>

                  <button type="button">
                    <label htmlFor="d1-1" className="digit1" onClick={() => handleClickButton('1')}></label>
                    1
                  </button>
                  <button type="button">
                    <label htmlFor="d1-2" className="digit1" onClick={() => handleClickButton('2')}></label>
                    2
                  </button>
                  <button type="button">
                    <label htmlFor="d1-3" className="digit1" onClick={() => handleClickButton('3')}></label>
                    3
                  </button>

                    <SubstractButton handleClickButton ={handleClickButton}/>

                    <ResetButton onReset={resetClickHandler}/>

                  <button type="button">
                    <label htmlFor="d1-0" className="digit1" onClick ={() => handleClickButton('0')}></label>
                    0
                  </button>

                    <EqualButton onResult = {resultClickHandler} />

                    <AddButton handleClickButton={handleClickButton} />

                </div>
    )
}