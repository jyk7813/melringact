export interface UserItemProps {
  image?: string
  name?: string
  score?: number
}
const UserItem = ({ image, name, score }: UserItemProps) => {
  return (
    <div className="w-22 h-18 bg-amber-300 rounded-lg">
      <img src={image} alt={name} />
      <div className="flex flex-col">
        <span>{name}</span>
        <span>{score}</span>
      </div>
    </div>
  )
}

export default UserItem
