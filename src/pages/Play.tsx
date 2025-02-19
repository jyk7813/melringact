import Buttons from '../components/buttons/Buttons'
import CodeEditor from '../components/CodeEditor'
import InfoWrapper from '../components/InfoWrapper'
import SkillList from '../components/SkillList'
import CodeRenderer from '../components/CodeRenderer'
import UserList from '../components/UserList'

const Play = () => {
  return (
    <div className="flex flex-col size-full pt-6">
      <div className="flex flex-none h-20 w-full justify-end">
        <Buttons
          text="제출하기"
          color="primary"
          size="md"
          weight="600"
          onClick={() => {}}
        />
      </div>
      <InfoWrapper></InfoWrapper>
      <CodeEditor />
      <CodeRenderer />
      <UserList></UserList>
      <SkillList></SkillList>
    </div>
  )
}

export default Play
