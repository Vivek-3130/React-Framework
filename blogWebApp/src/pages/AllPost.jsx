import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { useNavigate } from 'react-router-dom'
import Container from '../components/container/Container'
import PostCard from "../components/PostCard"
function AllPost() {
  const [posts,setPosts]= useState(null)

  const navigate = useNavigate()
  useEffect(()=>{
      appwriteService.getPosts(([])).then((posts)=>{
        if(posts){
          setPosts(posts.documents)
        }
      })
    },[])
  return (
    <div className='py-6'>

    </div>
  )
}

export default AllPost