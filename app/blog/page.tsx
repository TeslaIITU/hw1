import React from 'react'

interface User {
    id: number;
    date: string;
    author: string;
    title: string;
    description: string;

}


const UsersPage = async () => {
  const res = await fetch('http://localhost:3000/data.json')
  const users: User[] = await res.json();
  return (
    <>  
      <div className='grid grid-cols-3 w-4/5 mx-auto '>
      {users.map(user => (
             <div className="card bg-base-100 w-56 shadow-xl border border-black mb-5 md:w-96">
            <div key={user.id} className="card-body" >
                <h2 className="card-title">{user.title}</h2>
                <p>{user.date}</p>
                <p>{user.description}</p>
                <p><i>{user.author}</i></p>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Details</button>
                </div>
                </div>
            </div>
        ))}
      </div>

       
    </>
  )
}

export default UsersPage