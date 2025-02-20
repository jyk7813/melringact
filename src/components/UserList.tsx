import UserItem, { UserItemProps } from './UserItem'
export interface UserListProps {
  users: UserItemProps[]
}

const UserList = ({
  users = [
    { name: '홍길동', score: 100 },
    { name: '이순신', score: 90 },
    { name: '임꺽정', score: 80 },
  ],
}: UserListProps) => {
  return (
    <div className="flex flex-col w-2/12 bg-amber-200 gap-2 pt-2 items-center">
      {users.map((user) => (
        <UserItem key={user.name} {...user} />
      ))}
    </div>
  )
}

export default UserList
