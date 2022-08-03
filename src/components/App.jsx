import React from 'react'
import user from '../components/ProfileCard/user.json'
import statisticsData from '../components/Statistics/data.json'
import friends from './FriendList/friends.json'
import { ProfileCard } from './ProfileCard/Card.jsx'
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'



export const App = () => (
  <>
    <ProfileCard
      username={user.username}
    tag={user.tag}
  location={user.location}
  avatar={user.avatar}
      stats={user.stats} />
    
    <Statistics title="Upload stats" stats={statisticsData} />
<FriendList friends={friends} />
  </>
 
);