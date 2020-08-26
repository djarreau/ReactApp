import React from 'react'
import {useParams} from 'react-router-dom'
import Loader from '../component/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests.'

function UserDetail() {
    
    const {id} = useParams()

    const url = `https://5f46c004aaaf9a00161510ef.mockapi.io/api/v1/users/${id}`
    
    let user = useAxiosGet(url)

    let content = null
    
    if(user.error){
        content = <p>
            Item not found.
        </p>
    }
 
    if(user.loading) {
        content = <div>
            <Loader></Loader>
        </div>
    }

   if(user.data){
       console.log("url = " + url)
       console.log(user.data)
       content = 
        <div className=" pl-10">
             <h1 className="font-bold text-xl mb-3 flex items-center justify-center p-3">
                {user.data.name} - ({user.data.company})
            </h1>
            <div>
                <img 
                    className="h-50 w-50 rounded flex items-center justify-center p-3"
                    src={user.data.image}
                    alt={user.data.name}
                />
            </div>
            <div className="text-xl font-boldmb-2">
            </div>
            <div className="text-sm w-50">
                {user.data.phone}
            </div>
            <div className="text-sm w-40">
                {user.data.email}
            </div>
        </div>
   }
   
   return (
       <div>
           {content}
       </div>
   )
}

export default UserDetail