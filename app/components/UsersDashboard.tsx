'use client'
import useAllUsers from "@/hooks/Users/GetAllUsers"
import { useQuery, } from "@tanstack/react-query"
import Link from "next/link"
import useUsers from "@/hooks/Users/useUsers"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"

export function UserDashboard() {
    const { deleteUser } = useUsers()

    const { data } = useQuery({
        queryKey: ['repoData'],
        queryFn: useAllUsers
    })

    return (
        <div className="flex flex-col gap-3">
            <Table>
                <TableCaption className="text-slate-100">Lista de usuários cadastrados</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-slate-100">ID</TableHead>
                        <TableHead className="text-slate-100">Nome:</TableHead>
                        <TableHead className="text-slate-100">Senha:</TableHead>
                        <TableHead className="text-right text-slate-100">Admin:</TableHead>
                        <TableHead className="text-right text-slate-100"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map(({ id, name, passwd, admin }, key: number) => (
                        <TableRow key={key}>
                            <TableCell className="font-medium">{id}</TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell className="text-right">{passwd}</TableCell>
                            <TableCell className="text-right">{admin}</TableCell>
                            <TableCell className="text-right">
                                <Button className="bg-rose-800 hover:bg-rose-950" onClick={() => deleteUser(id)}>Deletar</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}><Link href={"/signup"}>Criar novo usuario</Link></TableCell>
                        <TableCell className="text-right"></TableCell>
                        <TableCell className="text-right"></TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
        // <div className="flex flex-col gap-3">
        //     <table className="border-separate border-spacing-2 border-2 border-solid border-sky-500">
        //         <thead className="text-left ">
        //             <tr>
        //                 <th className="border-2 border-solid border-sky-500">ID:</th>
        //                 <th className="border-2 border-solid border-sky-500">Nome:</th>
        //                 <th className="border-2 border-solid border-sky-500">Senha:</th>
        //                 <th className="border-2 border-solid border-sky-500">Administrador:</th>
        //             </tr>
        //         </thead>

        //         <tbody>{
        //             data?.map(({ id, name, passwd, admin }, key: number) => (
        //                 <tr key={key}>
        //                     <td className="pr-2 border-2 border-solid border-sky-500">{id}</td>
        //                     <td className="pr-2 border-2 border-solid border-sky-500">{name}</td>
        //                     <td className="pr-2 border-2 border-solid border-sky-500 text-right">{passwd}</td>
        //                     <td className="pr-2 border-2 border-solid border-sky-500 text-right">{admin}</td>
        //                     <td className="pr-1 border-2 border-solid border-sky-500"><button onClick={() => deleteUser(id)
        //                     }>Deletar</button></td>
        //                 </tr>
        //             ))
        //         }
        //         </tbody>
        //     </table>
        //     <Link href={"/signup"}>Criar novo usuario</Link>
        // </div>
    )
}

