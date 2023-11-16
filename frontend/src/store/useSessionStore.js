import {create} from 'zustand'
import { persist } from 'zustand/middleware'

const useSessionStore = create(persist((set) => ({
    account: {},
    setAccountData: newAccountData => set({account: newAccountData}),
    setLogout: () => set({account: {}})
}),{
    name: "LOGGED_DATA_V1" 
}))

export default useSessionStore
