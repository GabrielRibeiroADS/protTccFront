'use client'

import { UserData } from "@/interface/UserData"
import { useMutation, useQueryClient } from "@tanstack/react-query"

//A PRINCIPIO DELETAR, CRUD INTEIRO NO useUsers.tsx
export function usePostUser(){
    const queryClient = useQueryClient()

    // fetch(API_URL + '/users', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         name: data.name,
    //         admin: data.admin,
    //         passwd: data.passwd
    //     })
    // })
    // .then((response) => response.json())


    const postUser = useMutation({
        mutationFn: (user: UserData) => fetch('http://localhost:3333/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user.name,
                passwd: user.passwd,
                admin: user.admin,
            })
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['repoData'] })
        },
    })

    return {
        postUser: postUser.mutate,
    }
}
