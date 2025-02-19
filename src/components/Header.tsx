import Hamburger from './Hamburger'
import UserInfo from './UserInfo'

const header = () => {
    return (
        <div className="flex-none w-full h-20 bg-neutral-500">
            <div className="flex size-full justify-between items-center px-10">
                <Hamburger />
                <UserInfo />
            </div>
        </div>
    )
}

export default header;