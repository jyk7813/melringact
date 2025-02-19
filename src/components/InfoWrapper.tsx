import Subject from './Subject'
import Timer from './Timer'

const InfoWrapper = () => {
  return (
    <div className="flex justify-between items-center w-full bg-amber-100 h-10">
      <Subject />
      <Timer />
    </div>
  )
}

export default InfoWrapper
