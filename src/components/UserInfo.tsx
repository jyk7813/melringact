import Avatar from './Avarar'
import NameLabel from './NameLabel'

const userInfo = () => {
    return (
        <div className="flex items-center gap-4">
            <Avatar />
            <NameLabel />
        </div>
    )
}

export default userInfo;