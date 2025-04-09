import { useState } from 'react'
import { fetchUserData } from '../utils/api'
import { User } from '../models/user'

function UserInfo() {

    const [userInfo, setUserInfo] = useState({} as User)
    const [userId, setUserId] = useState<number>(0)

    const getUserInfo = async () => {
        const user: User = await fetchUserData(userId)
        setUserInfo(user)
    }

  return (
    <>
        <div>{userInfo.name}</div>
        <input type="number" value={userId} onChange={(e) => setUserId(+e.target.value)} />
        <button onClick={getUserInfo}>Get User Info</button>
    </>
  )
}

export default UserInfo