'use client'

import { FormAddUser } from "@/components/dashboard/formAddUser";
import { GetUsers } from "@/components/dashboard/getUsers";
import { UserContextProvider } from "@/components/dashboard/useContext";



export default function Dashboard() {

    return (
        <UserContextProvider >
            
            <section className="flex flex-col w-full h-full items-center relative">
                <div className="flex w-3/4 h-[740px] bg-explore-color-bg-secondary rounded-3xl overflow-hidden">
                    <div className="flex flex-col w-1/3 px-10 py-5 gap-5 bg-explore-color-bg-primary rounded-tr-3xl rounded-br-3xl">
                        <h1 className="text-2xl">
                            Add Customer
                        </h1>
                        <FormAddUser onUserAdded={() => window.location.reload()} />
                    </div>
                    <div className="flex flex-col w-4/6 h-full">
                        <GetUsers />
                    </div>
                </div>
            </section>
        
        </UserContextProvider>
    )
}