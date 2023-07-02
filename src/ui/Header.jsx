import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import UseName from "../features/user/UseName"

function Header() {
    return (
        <header className=" flex items-center justify-between  bg-yellow-500 font-pizza uppercase px-4 py-3 border-b border-stone-200">
            <Link to='/' className="tracking-widest"> Fast React Pizza co.</Link>
            <SearchOrder/>
        <UseName/>
        </header>
    )
}

export default Header
