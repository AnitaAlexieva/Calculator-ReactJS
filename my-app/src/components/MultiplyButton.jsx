export default function MultiplyButton({handleClickButton}){
    return (
        <button type="button">
            <label htmlFor="multiply" onClick={() => handleClickButton('x')}></label>×
        </button>
    )
}