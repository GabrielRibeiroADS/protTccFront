'use client'

import { UserData } from "@/interface/UserData"

const API_URL = 'http://localhost:3333'
export function useMutateUserPost(data: UserData){

    fetch(API_URL + '/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            admin: data.admin,
            passwd: data.passwd
        })
    })
    .then((response) => response.json())
}

export default useMutateUserPost