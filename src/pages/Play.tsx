import { useState } from 'react'
import Buttons from '../components/buttons/Buttons'
import CodeEditor from '../components/CodeEditor'
import InfoWrapper from '../components/InfoWrapper'
import SkillList from '../components/SkillList'
import CodeRenderer from '../components/CodeRenderer'
import UserList, { UserListProps } from '../components/UserList'

const Play = () => {
  const [users, setUsers] = useState<UserListProps['users']>([])
  const [code, setCode] = useState<string>('')

  return (
    <div className="flex flex-col pt-6 h-full">
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
      <div className="flex flex-row h-full">
        <CodeEditor code={code} setCode={setCode} />
        <CodeRenderer code={code} />
        <UserList users={users} />
      </div>
      <SkillList></SkillList>
    </div>
  )
}

export default Play
