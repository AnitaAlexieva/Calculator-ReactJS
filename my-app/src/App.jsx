
import './App.css'
import Plus from './components/Plus'

function App() {

  return (
    <>
      <form>
          <div id="digit1">
            <input type="checkbox" id="d1-1" className="number1" />
            <input type="checkbox" id="d1-2" className="number2" />
            <input type="checkbox" id="d1-3" className="number3" />
            <input type="checkbox" id="d1-4" className="number4" />
            <input type="checkbox" id="d1-5" className="number5" />
            <input type="checkbox" id="d1-6" className="number6" />
            <input type="checkbox" id="d1-7" className="number7" />
            <input type="checkbox" id="d1-8" className="number8" />
            <input type="checkbox" id="d1-9" className="number9" />
            <div id="digit2">
              <input type="checkbox" id="d2-0" className="number0" />
              <input type="checkbox" id="d2-1" className="number1" />
              <input type="checkbox" id="d2-2" className="number2" />
              <input type="checkbox" id="d2-3" className="number3" />
              <input type="checkbox" id="d2-4" className="number4" />
              <input type="checkbox" id="d2-5" className="number5" />
              <input type="checkbox" id="d2-6" className="number6" />
              <input type="checkbox" id="d2-7" className="number7" />
              <input type="checkbox" id="d2-8" className="number8" />
              <input type="checkbox" id="d2-9" className="number9" />
              <div id="digit3">
                <input type="checkbox" id="d3-0" className="number0" />
                <input type="checkbox" id="d3-1" className="number1" />
                <input type="checkbox" id="d3-2" className="number2" />
                <input type="checkbox" id="d3-3" className="number3" />
                <input type="checkbox" id="d3-4" className="number4" />
                <input type="checkbox" id="d3-5" className="number5" />
                <input type="checkbox" id="d3-6" className="number6" />
                <input type="checkbox" id="d3-7" className="number7" />
                <input type="checkbox" id="d3-8" className="number8" />
                <input type="checkbox" id="d3-9" className="number9" />
                <div id="digit4">
                  <input type="checkbox" id="d4-0" className="number0" />
                  <input type="checkbox" id="d4-1" className="number1" />
                  <input type="checkbox" id="d4-2" className="number2" />
                  <input type="checkbox" id="d4-3" className="number3" />
                  <input type="checkbox" id="d4-4" className="number4" />
                  <input type="checkbox" id="d4-5" className="number5" />
                  <input type="checkbox" id="d4-6" className="number6" />
                  <input type="checkbox" id="d4-7" className="number7" />
                  <input type="checkbox" id="d4-8" className="number8" />
                  <input type="checkbox" id="d4-9" className="number9" />
                  <div id="digit5">
                    <input type="checkbox" id="d5-0" className="number0" />
                    <input type="checkbox" id="d5-1" className="number1" />
                    <input type="checkbox" id="d5-2" className="number2" />
                    <input type="checkbox" id="d5-3" className="number3" />
                    <input type="checkbox" id="d5-4" className="number4" />
                    <input type="checkbox" id="d5-5" className="number5" />
                    <input type="checkbox" id="d5-6" className="number6" />
                    <input type="checkbox" id="d5-7" className="number7" />
                    <input type="checkbox" id="d5-8" className="number8" />
                    <input type="checkbox" id="d5-9" className="number9" />
                    <div id="digit6">
                      <input type="checkbox" id="d6-0" className="number0" />
                      <input type="checkbox" id="d6-1" className="number1" />
                      <input type="checkbox" id="d6-2" className="number2" />
                      <input type="checkbox" id="d6-3" className="number3" />
                      <input type="checkbox" id="d6-4" className="number4" />
                      <input type="checkbox" id="d6-5" className="number5" />
                      <input type="checkbox" id="d6-6" className="number6" />
                      <input type="checkbox" id="d6-7" className="number7" />
                      <input type="checkbox" id="d6-8" className="number8" />
                      <input type="checkbox" id="d6-9" className="number9" />
                      <div id="digit7">
                        <input type="checkbox" id="d7-0" className="number0" />
                        <input type="checkbox" id="d7-1" className="number1" />
                        <input type="checkbox" id="d7-2" className="number2" />
                        <input type="checkbox" id="d7-3" className="number3" />
                        <input type="checkbox" id="d7-4" className="number4" />
                        <input type="checkbox" id="d7-5" className="number5" />
                        <input type="checkbox" id="d7-6" className="number6" />
                        <input type="checkbox" id="d7-7" className="number7" />
                        <input type="checkbox" id="d7-8" className="number8" />
                        <input type="checkbox" id="d7-9" className="number9" />
                        <div id="digit8">
                          <input type="checkbox" id="d8-0" className="number0" />
                          <input type="checkbox" id="d8-1" className="number1" />
                          <input type="checkbox" id="d8-2" className="number2" />
                          <input type="checkbox" id="d8-3" className="number3" />
                          <input type="checkbox" id="d8-4" className="number4" />
                          <input type="checkbox" id="d8-5" className="number5" />
                          <input type="checkbox" id="d8-6" className="number6" />
                          <input type="checkbox" id="d8-7" className="number7" />
                          <input type="checkbox" id="d8-8" className="number8" />
                          <input type="checkbox" id="d8-9" className="number9" />
                          <div id="operations">
                            <input type="checkbox" id="add" />
                            <input type="checkbox" id="subtract" />
                            <input type="checkbox" id="multiply" />
                            <input type="checkbox" id="divide" />
                            <input type="checkbox" id="equals/>
											</main>
												<div id="screen">
													<div id="input"></div>
													<div id="output"></div>
												</div>
                          <div id="buttons">
                            <button type="button">
                              <label htmlFor="d8-7" className="digit8" />
                              <label htmlFor="d7-7" className="digit7" />
                              <label htmlFor="d6-7" className="digit6" />
                              <label htmlFor="d5-7" className="digit5" />
                              <label htmlFor="d4-7" className="digit4" />
                              <label htmlFor="d3-7" className="digit3" />
                              <label htmlFor="d2-7" className="digit2" />
                              <label htmlFor="d1-7" className="digit1" />
                              7
                            </button>
                            <button type="button">
                              <label htmlFor="d8-8" className="digit8" />
                              <label htmlFor="d7-8" className="digit7" />
                              <label htmlFor="d6-8" className="digit6" />
                              <label htmlFor="d5-8" className="digit5" />
                              <label htmlFor="d4-8" className="digit4" />
                              <label htmlFor="d3-8" className="digit3" />
                              <label htmlFor="d2-8" className="digit2" />
                              <label htmlFor="d1-8" className="digit1" />
                              8
                            </button>
                            <button type="button">
                              <label htmlFor="d8-9" className="digit8" />
                              <label htmlFor="d7-9" className="digit7" />
                              <label htmlFor="d6-9" className="digit6" />
                              <label htmlFor="d5-9" className="digit5" />
                              <label htmlFor="d4-9" className="digit4" />
                              <label htmlFor="d3-9" className="digit3" />
                              <label htmlFor="d2-9" className="digit2" />
                              <label htmlFor="d1-9" className="digit1" />
                              9
                            </button>
                            <button type="button"><label htmlFor="divide" />÷</button>
                            <button type="button">
                              <label htmlFor="d8-4" className="digit8" />
                              <label htmlFor="d7-4" className="digit7" />
                              <label htmlFor="d6-4" className="digit6" />
                              <label htmlFor="d5-4" className="digit5" />
                              <label htmlFor="d4-4" className="digit4" />
                              <label htmlFor="d3-4" className="digit3" />
                              <label htmlFor="d2-4" className="digit2" />
                              <label htmlFor="d1-4" className="digit1" />
                              4
                            </button>
                            <button type="button">
                              <label htmlFor="d8-5" className="digit8" />
                              <label htmlFor="d7-5" className="digit7" />
                              <label htmlFor="d6-5" className="digit6" />
                              <label htmlFor="d5-5" className="digit5" />
                              <label htmlFor="d4-5" className="digit4" />
                              <label htmlFor="d3-5" className="digit3" />
                              <label htmlFor="d2-5" className="digit2" />
                              <label htmlFor="d1-5" className="digit1" />
                              5
                            </button>
                            <button type="button">
                              <label htmlFor="d8-6" className="digit8" />
                              <label htmlFor="d7-6" className="digit7" />
                              <label htmlFor="d6-6" className="digit6" />
                              <label htmlFor="d5-6" className="digit5" />
                              <label htmlFor="d4-6" className="digit4" />
                              <label htmlFor="d3-6" className="digit3" />
                              <label htmlFor="d2-6" className="digit2" />
                              <label htmlFor="d1-6" className="digit1" />
                              6
                            </button>
                            <button type="button"><label htmlFor="multiply" />×</button>
                            <button type="button">
                              <label htmlFor="d8-1" className="digit8" />
                              <label htmlFor="d7-1" className="digit7" />
                              <label htmlFor="d6-1" className="digit6" />
                              <label htmlFor="d5-1" className="digit5" />
                              <label htmlFor="d4-1" className="digit4" />
                              <label htmlFor="d3-1" className="digit3" />
                              <label htmlFor="d2-1" className="digit2" />
                              <label htmlFor="d1-1" className="digit1" />
                              1
                            </button>
                            <button type="button">
                              <label htmlFor="d8-2" className="digit8" />
                              <label htmlFor="d7-2" className="digit7" />
                              <label htmlFor="d6-2" className="digit6" />
                              <label htmlFor="d5-2" className="digit5" />
                              <label htmlFor="d4-2" className="digit4" />
                              <label htmlFor="d3-2" className="digit3" />
                              <label htmlFor="d2-2" className="digit2" />
                              <label htmlFor="d1-2" className="digit1" />
                              2
                            </button>
                            <button type="button">
                              <label htmlFor="d8-3" className="digit8" />
                              <label htmlFor="d7-3" className="digit7" />
                              <label htmlFor="d6-3" className="digit6" />
                              <label htmlFor="d5-3" className="digit5" />
                              <label htmlFor="d4-3" className="digit4" />
                              <label htmlFor="d3-3" className="digit3" />
                              <label htmlFor="d2-3" className="digit2" />
                              <label htmlFor="d1-3" className="digit1" />
                              3
                            </button>
                            <button type="button"><label htmlFor="subtract" />-</button>
                            <button type="button"><input type="reset" defaultValue="AC" /></button>
                            /						<button type="button">
                              <label htmlFor="d8-0" className="digit8" />
                              <label htmlFor="d7-0" className="digit7" />
                              <label htmlFor="d6-0" className="digit6" />
                              <label htmlFor="d5-0" className="digit5" />
                              <label htmlFor="d4-0" className="digit4" />
                              <label htmlFor="d3-0" className="digit3" />
                              <label htmlFor="d2-0" className="digit2" />
                              <label htmlFor="d1-0" className="digit1" />
                              0
                            </button>
                            <button type="button"><label htmlFor="equals" />=</button>
                            <button type="button"><label htmlFor="add" />+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
    </>
  )
}

export default App
