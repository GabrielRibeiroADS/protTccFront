'use client'
import { UserData } from "@/interface/UserData"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

const API_URL = 'http://localhost:3333'

type PropsType = {
    users: UserData[]
}

// const FetchUsers = (): PropsType => {

//     const [users, setUsers] = useState<UserData[]>([])
//     fetch('http://localhost:3333/users')
//         .then((response) => response.json())
//         .then((users) => setUsers(users))

//     return {
//         users: users
//     }
// }


const useAllUsers = async (): UserData[] => {

    const users = await fetch('http://localhost:3333/users').then((response) => response.json());
    
    console.log(users);

    return users
}

export default useAllUsers