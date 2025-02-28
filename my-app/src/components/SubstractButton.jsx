export default function SubstractButton( {handleClickButton}){
    return(
        <button type="button">
            <label htmlFor="subtract" onClick={() => handleClickButton('-')}></label>-
        </button>
    )
}