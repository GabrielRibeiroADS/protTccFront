'use client'

import { UserData } from "@/interface/UserData"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export default function useUsers() {
    const queryClient = useQueryClient()

    const deleteUser = useMutation({
        mutationFn: (id) => fetch('http://localhost:3333/users/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['repoData'] })
        },
    })

    const addUser = useMutation({
        mutationFn: (user: UserData) => fetch('http://localhost:3333/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user.name,
                admin: user.admin,
                passwd: user.passwd
            })
        }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['repoData'] })
        },
        
    })

    return {
        deleteUser: deleteUser.mutate,
        addUser: addUser.mutate,
    }

}