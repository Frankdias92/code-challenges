import { Button } from "@nextui-org/react";
import { useFocusRing } from "@react-aria/focus";
import { FormEvent, useEffect, useState } from "react";

interface FormUser {
    id: number,
    createAt: Date,
    firtsName: string,
    lastName: string,
    dateBirt: string,
    mediaSocial: string,
}

export function FormAddUser() {
    let { isFocusVisible, focusProps } = useFocusRing()


    const dataUsers = localStorage.getItem('dataUser')
    useEffect(() => {
        if (dataUsers) {
            const parseData = JSON.parse(dataUsers);

        }
    }, [dataUsers]);

    
    function handleCreateUser(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        const creatUser = new FormData(event.currentTarget)
        const data = creatUser

        const NewDataUser = {
            id: Number(new Date().getTime()),
            createAt: new Date().getFullYear(),
            firtsName: data.get('first-name'),
            lastName: data.get('last-name'),
            dateBird: data.get('date-birt'),
            mediaSocial: data.get('media-social'),
        }
 
        let storeUsers = localStorage.getItem('dataUser')
        let allUsers = []

        if (storeUsers) {
            allUsers = JSON.parse(storeUsers)
        }

        allUsers.push(NewDataUser)

        localStorage.setItem('dataUser', JSON.stringify(allUsers))
    }


    return (
        <form 
            // method="POST"
            onSubmit={handleCreateUser}
            className="flex flex-col w-full text-lg font-poppins"
        >
            <label className="mb-2 ">
                First Name
            </label>
            <input 
                name="first-name"  
                type="text"
                required
                className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                invalid:text-red-600 rounded-lg outline-none"
            />
            
            <label className="mb-2 ">
                Last Name
            </label>
            <input 
                name="last-name"  
                type="text"
                required
                className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                invalid:text-red-600 rounded-lg outline-none"
            />
            
            <label className="mb-2 ">
                Date of Birth
            </label>
            <input 
                name="date-birt"  
                type="text"
                required
                className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                invalid:text-red-600 rounded-lg outline-none"
            />

            <label className="mb-2 ">
                Media Social
            </label>
            <input 
                name="media-social"  
                type="text"
                required
                className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                invalid:text-red-600 rounded-lg outline-none"
            />



            <Button
                type="submit"
                className="flex text-3xl w-full h-[62px] tracking-widest font-bold justify-center px-12 py-5 bg-explore-color-offShore rounded-xl mt-6 shadow-lg antialiased
                outline-none border-0 focus:ring-2 focus:ring-explore-color-text-second"
                    style={{
                        outline: isFocusVisible ? 'rgb(245 157 26)' : 'none',
                    }}
            >
                APPLY
            </Button>
        </form>
    )
}