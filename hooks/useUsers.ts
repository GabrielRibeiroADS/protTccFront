'use client'
import { UserData } from "@/interface/UserData"
import { useEffect, useState } from "react"

const API_URL = 'http://localhost:3333'

type PropsType = {
    usersData: UserData[], 
    postUser: any
}

//DELETAR DEPOIS, NAO TA SENDO UTILIZADO
const useFetchData = ():PropsType => {

    const [users, setUsers] = useState<UserData[]>([])

    useEffect(() => {
        fetch('http://localhost:3333/users')
            .then((response) => response.json())
            .then((users) => setUsers(users))
    }, [])

    const postUser = (data: UserData) => {

        const response = fetch(API_URL + '/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                passwd: data.passwd,
                admin: data.admin
            })
        })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      })
      console.log(response);
    }

    return { 
        usersData: users, 
        postUser: postUser
    }
}

export default useFetchData




