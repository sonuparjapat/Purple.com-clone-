
import { useParams } from "react-router-dom"
export default function SinglePrimer(){
const {id}=useParams()
console.log(id)
    return (
<h1>single</h1>
    )
}