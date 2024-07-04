'use client'

import { UserData } from "@/interface/UserData"

const API_URL = 'http://localhost:3333'

export default function useDeleteUser(data: string){
    console.log(data);
    
    fetch('http://localhost:3333/users/' + data, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
