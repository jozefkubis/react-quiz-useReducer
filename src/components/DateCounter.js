import { useReducer } from "react"

const initilState = { count: 0, step: 1 }

function reducer(state, action) {
  console.log(state, action)

  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step }
    case "dec":
      return { ...state, count: state.count - state.step }
    case "setCount":
      return { ...state, count: action.payLoad }
    case "setStep":
      return { ...state, step: action.payLoad }
    case "reset":
      return initilState
    default:
      throw new Error("Unknown action")
  }
  // if (action.type === "inc") return state + 1
  // if (action.type === "dec") return state - 1
  // if (action.type === "setCount") return action.payLoad
}
function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initilState)
  const { count, step } = state

  // This mutates the date object.
  const date = new Date("june 21 2027")
  date.setDate(date.getDate() + count)

  const dec = function () {
    dispatch({ type: "dec" })
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  }

  const inc = function () {
    dispatch({ type: "inc" })
  }

  const defineCount = function (e) {
    dispatch({ type: "setCount", payLoad: Number(e.target.value) })
  }

  const defineStep = function (e) {
    dispatch({ type: "setStep", payLoad: Number(e.target.value) })
  }

  const reset = function () {
    dispatch({ type: "reset" })
    // setCount(0);
    // setStep(1)
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
export default DateCounter
