import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';

function Feed() {
  const[posts, setPosts] = useState([]);

  const sendPost = event => {
    event.preventDefault();
  }
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
            <CreateIcon />
            <form>
                <input type='text'/>
                <button onClick={sendPost} type='submit'>send</button>
            </form>
        </div>
        <div className='feed__inputOption'>
            <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
            <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
            <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
            <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) =>
        <Post />  
      )}
      <Post
      name='anonym' 
      description='testing' 
      message='bjirs'/>

    </div>
  )
}

export default Feed
