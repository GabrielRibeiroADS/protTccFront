'use client'
import { UserData } from "@/interface/UserData"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

const API_URL = 'http://localhost:3333'

type PropsType = {
    users: UserData[]
}

const useAllUsers = async (): UserData[] => {
    const users = await fetch('http://localhost:3333/users').then((response) => response.json());
    
    return users
}

export default useAllUsers