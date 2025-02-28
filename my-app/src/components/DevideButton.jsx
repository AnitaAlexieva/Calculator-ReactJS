export default function DevideButton({handleClickButton}){
    return(
        <button type="button">
            <label htmlFor="divide" onClick={() => handleClickButton('/')}></label>÷
        </button>
    )
}