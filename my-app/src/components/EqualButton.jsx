export default function EqualButton({handleClickButton}){
    return(
        <button type="button">
                <label htmlFor="equals" onClick={() => handleClickButton('=')}></label>=
        </button>
    )
}