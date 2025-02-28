import AddButton from "./AddButton";
import EqualButton from "./EqualButton";
import MultiplyButton from "./MultiplyButton";
import ResetButton from "./ResetButton";
import SubstractButton from "./SubstractButton";

export default function Buttons(){
    return(
        <div id="buttons">
                  <button type="button">
                    <label htmlFor="d1-7" className="digit1"></label>
                    7
                  </button>
                  <button type="button">
                    <label htmlFor="d1-8" className="digit1"></label>
                    8
                  </button>
                  <button type="button">
                    <label htmlFor="d1-9" className="digit1"></label>
                    9
                  </button>
                  <button type="button">
                    <label htmlFor="divide"></label>÷
                  </button>
                  <button type="button">
                    <label htmlFor="d1-4" className="digit1"></label>
                    4
                  </button>
                  <button type="button">
                    <label htmlFor="d1-5" className="digit1"></label>
                    5
                  </button>
                  <button type="button">
                    <label htmlFor="d1-6" className="digit1"></label>
                    6
                  </button>

                    <MultiplyButton />

                  <button type="button">
                    <label htmlFor="d1-1" className="digit1"></label>
                    1
                  </button>
                  <button type="button">
                    <label htmlFor="d1-2" className="digit1"></label>
                    2
                  </button>
                  <button type="button">
                    <label htmlFor="d1-3" className="digit1"></label>
                    3
                  </button>

                    <SubstractButton />

                    <ResetButton />

                  <button type="button">
                    <label htmlFor="d1-0" className="digit1"></label>
                    0
                  </button>

                    <EqualButton />

                    <AddButton />
                    
                </div>
    )
}