import { useEffect, useState } from 'react'

interface TimerProps {
  /**
   * @todo 데드라인 필수로 변경 필요
   */
  dadLine?: number
}
const Timer = ({ dadLine = 5000 }: TimerProps) => {
  /**
   * @todo 텍스트 중앙정렬 맞추기
   */
  const [time, setTime] = useState(dadLine)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [time])

  return (
    <div className="flex justify-end w-2/12">
      <div className="flex items-center justify-center text-4xl font-bold">
        <span>{time}</span>
      </div>
    </div>
  )
}

export default Timer
