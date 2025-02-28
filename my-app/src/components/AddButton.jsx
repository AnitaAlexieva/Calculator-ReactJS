export default function AddButton( {handleClickButton}){
    return(
        <button type="button">
            <label htmlFor="add" onClick={() => handleClickButton('+')}></label>+
        </button>
    )
}