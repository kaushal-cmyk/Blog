import React, { useState } from 'react'
import axios from 'axios'

const CreateBlog = () => {

  let [title, setTitle] = useState("")
  let [description, setDescription] = useState("")

  let onSubmit = async (e)=> {
    e.preventDefault()

    let data = {
      title : title,
      description: description
    }

    try {
      let result = await axios ({
        url: "http://localhost:8000/blogs",
        method: "post",
        data: data
      })
      console.log(data)
      
    }
    catch (error) {
        console.log(error.message)
    }
  }
  return (
    <div>
      <form>
      <div>
          <label htmlFor="title"> Title: </label>
          <input type="text" placeholder="e.g. The rise of AI" id='title'
          value={title}
          onChange={(e)=>{
              // console.log("change")
              setTitle(e.target.value)
          }} ></input>
        </div>

        <div>
            <label htmlFor = "description">Description: </label>
            <textarea 
            value = {description}
            id = "description"
            placeholder = "your text here."
            onChange = {(e)=> {
                setDescription(e.target.value)
            }}
            ></textarea>
        </div>
        <button type = 'submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateBlog