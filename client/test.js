import './share.scss'
import Image from '../../assets/img.png'
import Map from '../../assets/map.png'
import Friend from '../../assets/friend.png'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import { useQueryClient } from '@tanstack/react-query'
import { makeRequest } from '../../axios'

const Share = () => {
  const [file, setFile] = useState(null)
  const [desc, setDesc] = useState('')

  const { currentUser } = useContext(AuthContext)
  const queryClient = useQueryClient()

  const handleClick = async e => {
    e.preventDefault()
    try {
      const response = await makeRequest.post('/posts', { desc })
      const newPost = response.data
      const currentPosts = queryClient.getQueryData(['posts'])
      queryClient.invalidateQueries(['posts'])

      if (Array.isArray(currentPosts)) {
        queryClient.setQueryData(['posts'], [...currentPosts, newPost])
      } else {
        console.error("Invalid 'posts' data")
      }
    } catch (error) {
      console.error('Post creation error:', error)
    }
  }

  return (
    <div className='share'>
      <div className='container'>
        <div className='top'>
          <img src={currentUser.profilePic} alt='' />
          <input
            type='text'
            placeholder={`What's on your mind ${currentUser.name}?`}
            onChange={e => setDesc(e.target.value)}
          />
        </div>
        <hr />
        <div className='bottom'>
          <div className='left'>
            <input
              type='file'
              id='file'
              style={{ display: 'none' }}
              onChange={e => setFile(e.target.files[0])}
            />
            <label htmlFor='file'>
              <div className='item'>
                <img src={Image} alt='' />
                <span>Add Image</span>
              </div>
            </label>
            <div className='item'>
              <img src={Map} alt='' />
              <span>Add Place</span>
            </div>
            <div className='item'>
              <img src={Friend} alt='' />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className='right'>
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share