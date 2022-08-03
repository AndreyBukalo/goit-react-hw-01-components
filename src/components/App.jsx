import React from 'react'
import user from '../components/ProfileCard/user.json'
import {ProfileCard} from './ProfileCard/Card.jsx'
console.log(user)

export const App = () => (
  <>
    <ProfileCard
      username={user.username}
    tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>
  </>
);