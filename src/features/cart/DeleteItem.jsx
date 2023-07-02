import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { deleteItem } from "./cartSlice"

function DeleteItem({pizzaId}) {
   const deispatch= useDispatch()
    return (
        <Button type="small" onClick={()=>deispatch(deleteItem(pizzaId))}>Delete</Button>
        
    )
}

export default DeleteItem
