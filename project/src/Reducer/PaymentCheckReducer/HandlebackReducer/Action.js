import { handleback, handleback2 } from "./ActionType"

export const handlebackbutton=()=>{
    return {type:handleback}
}
export const handleback2button=()=>{
    return {type:handleback2}
}
export const handlebacking=(dispatch)=>{
    dispatch(handlebackbutton())
}
export const handlebacking2=(dispatch)=>{
    dispatch(handleback2button)}