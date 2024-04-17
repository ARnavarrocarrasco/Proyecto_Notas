import React from 'react'
/**
 * Se centra en que en nuestro font no haya ninguna lógica
 * @param {*} param0 
 * @returns 
 */
const Notes = ({notes}) => {
  return (
    <div>
      Esta es la lista de notas pendientes
      <ul className='notes List'>
        {notes.map((note,i) => (
            <li key={i}>{note.note}</li>
        ))}
      </ul>
    </div>
  )
}

export default Notes