export default function ResetButton({
    onReset
}){
    return(
        <button type="button" onClick={onReset}>
                <input type="reset" value="AC" />
        </button>
    )
}