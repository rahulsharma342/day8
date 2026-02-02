import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/notes')
      .then((response) => {
        setNotes(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, []) 

  return (
    <div>
      <div className="notes flex flex-wrap">
        {notes.map((note) => (
          <div
            key={note._id}
            className="note h-72 w-64 bg-black/70 text-white m-4 rounded-md"
          >
            <h1 className="text-center text-2xl font-bold">
              {note.title}
            </h1>
            <p className="text-center text-lg">
              {note.discription}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default App;