interface SubjectProps {
  /**
   * @todo 주제 필수로 변경
   */
  subject?: string
}
const Subject = ({ subject = '벚꽃 켈린더 만들기' }: SubjectProps) => {
  return (
    <div className="flex items-center gap-2">
      <label className="text-2xl font-bold">주제</label>
      <label className="text-5xl font-bold">{subject}</label>
    </div>
  )
}

export default Subject
