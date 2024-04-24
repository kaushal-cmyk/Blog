import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  let [blogs, setBlog] = useState([])

  let getAllBlogs = async ()=> {
    let result = await axios({
      url: "http://localhost:8000/blogs",
      method: "get"
    })
    setBlog (result.data.result)
  }

  useEffect(()=> {
    getAllBlogs()
  }, [])


  // view blog info 
  let blogInfo = blogs.map((item, i) => {
    return (
      <div key = {i} style = {{border : "solid red 2px",  marginBottom : "20px "}}>
        <p>Title: {item.title}</p>
        <p>Content: {item.content}</p>
      </div>
    )
  })
  return (
    <div>
      {blogInfo}
    </div>
  )
}

export default Home