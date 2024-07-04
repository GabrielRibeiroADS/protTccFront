'use client'
import useDeleteUser from "@/hooks/Users/DeleteUser"
import useAllUsers from "@/hooks/Users/GetAllUsers"
import { UserData } from "@/interface/UserData"
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import Link from "next/link"

export function UserDashboard() {

    const queryClient = useQueryClient()

    // const { users } = useAllUsers()

    // const users = useQuery({
    //     queryKey: ['users'],
    //     queryFn: useAllUsers,
    //     enabled: false
    // })

    const { data } = useQuery({
        queryKey: ['repoData'],
        queryFn: useAllUsers
    })

    console.log(data);

    const mutation = useMutation({
        mutationFn: (id) => fetch('http://localhost:3333/users/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }),
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['repoData'] })
          },
    })

    const DeleteUser = (id: string) => {
        mutation.mutate(id) // Replace with the ID of the user you want to delete
    }
    return (
        <div className="flex flex-col gap-3">
            <table className="border-separate border-spacing-2 border-2 border-solid border-sky-500">
                <thead className="text-left ">
                    <tr>
                        <th className="border-2 border-solid border-sky-500">ID:</th>
                        <th className="border-2 border-solid border-sky-500">Nome:</th>
                        <th className="border-2 border-solid border-sky-500">Senha:</th>
                        <th className="border-2 border-solid border-sky-500">Administrador:</th>
                    </tr>
                </thead>

                <tbody>{
                    data?.map(({ id, name, passwd, admin }, key: number) => (
                        <tr key={key}>
                            <td className="pr-2 border-2 border-solid border-sky-500">{id}</td>
                            <td className="pr-2 border-2 border-solid border-sky-500">{name}</td>
                            <td className="pr-2 border-2 border-solid border-sky-500 text-right">{passwd}</td>
                            <td className="pr-2 border-2 border-solid border-sky-500 text-right">{admin}</td>
                            <td className="pr-1 border-2 border-solid border-sky-500"><button onClick={() => {mutation.mutate(id)}
                            }>Deletar</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Link href={"/signup"}>Criar novo usuario</Link>
        </div>
    )
}

