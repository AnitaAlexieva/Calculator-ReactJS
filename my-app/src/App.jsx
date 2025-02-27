
import './App.css'
// import Plus from './components/Plus'
import React from 'react'
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
            <div id="operations">
              <input type="checkbox" id="add" />
              <input type="checkbox" id="subtract" />
              <input type="checkbox" id="multiply" />
              <input type="checkbox" id="divide" />
              <input type="checkbox" id="equals" />
              <main>
                <div id="screen">
                  <div id="input"></div>
                  <div id="output"></div>
                </div>
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
                  <button type="button">
                    <label htmlFor="multiply"></label>×
                  </button>
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
                  <button type="button">
                    <label htmlFor="subtract"></label>-
                  </button>
                  <button type="button">
                    <input type="reset" value="AC" />
                  </button>
                  <button type="button">
                    <label htmlFor="d1-0" className="digit1"></label>
                    0
                  </button>
                  <button type="button">
                    <label htmlFor="equals"></label>=
                  </button>
                  <button type="button">
                    <label htmlFor="add"></label>+
                  </button>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </form>
    </>
  )
}

export default App
