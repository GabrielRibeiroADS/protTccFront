'use client'
import { UserData } from "@/interface/UserData"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import useUsers from "@/hooks/Users/useUsers"

type InputProps = {
    label: string,
    value: string,
    updateValue(value: string): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <div className="my-3 flex gap-x-5">
            <div className="w-full text-slate-100 ">
                <label>{label}:</label>
            </div>
            <div className="w-full">
                <input className="text-blue-800" value={value} onChange={event => updateValue(event.target.value)} />
            </div>
        </div>
    )
}

export function CreateModal() {
    const { push } = useRouter()
    const { addUser } = useUsers()
    
    const [name, setName] = useState('')
    const [passwd, setPasswd] = useState('')
    const [admin, setBoolean] = useState('')

    const Submit = (event: FormEvent) => {
        event.preventDefault()//Cancelar o f5 automatico que o submit do form dá

        if(name === "" || passwd === "" || admin === ""){
            alert("Todos os campos são obrigatórios!")
        }

        const user: UserData = {
            name,
            passwd,
            admin
        }

        addUser(user)
    }

    return (
        <div className="h-full w-full flex items-center justify-center" >
            <div className="flex flex-col items-center">
                <h2 className="text-slate-100">Cadastro de novo usuário</h2>
                <form onSubmit={Submit}>
                    <Input label="Nome" value={name} updateValue={setName} ></Input>
                    <Input label="Senha" value={passwd} updateValue={setPasswd} ></Input>
                    <Input label="Admin" value={admin} updateValue={setBoolean} ></Input>
                    <div className="flex justify-center ">
                        <button className="bg-lime-300 hover:bg-lime-900 hover:text-white p-1 rounded-sm text-slate-800" type="submit" onClick={() => push('/login')}>Criar Usuario</button>
                    </div>
                </form>
                {/* <form>
                    <Input label="Nome" value={name} updateValue={setName} ></Input>
                    <Input label="Senha" value={passwd} updateValue={setPasswd} ></Input>
                    <Input label="Admin" value={admin} updateValue={setBoolean} ></Input>
                    <div className="flex justify-center ">
                        <button className="bg-lime-300 hover:bg-lime-900 hover:text-white p-1 rounded-sm text-slate-800" onClick={Submit}><Link href={"/login"}>Criar Usuario</Link></button>
                    </div>
                </form> */}
            </div>
        </div>
    )
}

