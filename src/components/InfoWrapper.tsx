import Subject from './Subject'
import Timer from './Timer'

const InfoWrapper = () => {
  return (
    <div className="flex flex-none justify-between items-center w-full bg-amber-100 h-12">
      <div className="w-2/12" />
      <Subject />
      <Timer />
    </div>
  )
}

export default InfoWrapper
