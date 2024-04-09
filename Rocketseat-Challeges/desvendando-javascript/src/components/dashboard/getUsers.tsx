import { IconEdit, IconLinkedin, IconUserX } from "@/lib/icons"
import { ScrollShadow, user } from "@nextui-org/react"
import Link from "next/link"
import { FormEvent, useEffect, useState } from "react"

import * as Dialog from '@radix-ui/react-dialog'
import { Button, Flex, Text, TextField } from '@radix-ui/themes'

interface UserData {
    id: number
    createAt?: string;
    firtsName: string;
    lastName: string;
    dateBird: string;
    mediaSocial: string;
}


export function GetUsers() {
    const [users, setUsers] = useState<UserData[]>([]);

    useEffect(() => {
        const dataUsers = localStorage.getItem('dataUser');
        if (dataUsers) {
            const parseData = JSON.parse(dataUsers);
            setUsers(parseData);
        }
    }, []);

    function handleDeleteUser(index: any) {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
        localStorage.setItem('dataUser', JSON.stringify(updatedUsers));
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>, index: number) {
        event.preventDefault();

        const updatedUser = new FormData(event.currentTarget);

        const usersData = localStorage.getItem('dataUser') as string
        if (!usersData) {
            console.log('User not faund!')
        }
        const userData: UserData[] = JSON.parse(usersData)

        const getCreateAd = (index: number) => {
            if (index >= 0 && index < userData.length) {
                return userData[index].createAt
            }
            console.error('Index invalid:', index)
            return null
        }

        const createAt = getCreateAd(index)
        if (createAt === null) {
            console.log('Cannot possible find creatAd')
        }

        console.log("creatAd:", createAt)
        

        const updatedDataUser: UserData = {
            id: users[index].id,
            createAt: users[index].createAt,
            firtsName: String(updatedUser.get('first-name')),
            lastName: String(updatedUser.get('last-name')),
            dateBird: String(updatedUser.get('date-birth')),
            mediaSocial: String(updatedUser.get('media-social')),
        };

        handleUpdateUser(index, updatedDataUser);
    }

    function handleUpdateUser(index: number, updatedDataUser: UserData) {
        const updatedUsers = [...users];

        if (index >= 0 && index < updatedUsers.length) {
            updatedUsers[index] = updatedDataUser;
            setUsers(updatedUsers);
            localStorage.setItem('dataUser', JSON.stringify(updatedUsers));
        } else {
            console.error('Invalid user index');
        }
    }
    
    

    return (
        <div className="flex flex-col pl-16 py-5 gap-y-5">
            <h2 className="text-2xl font-semibold mb-2">List Customers</h2>
            <section className="flex font-poppins flex-col w-full gap-y-4  border-0 outline-none">
                <div className="grid grid-flow-col text-explore-color-offShore w-full justify-start gap-2 pl-4">
                    <div className="flex w-[114px]">Date Added</div>
                    <div className="flex w-[98px]">Name</div>
                    <div className="flex w-[114px]">Date of Birth</div>
                    <div className="flex w-[60px]">Social</div>
                    <div className="flex w-[50px]">Edit</div>
                    <div className="flex w-[80px]">Remove</div>
                </div>
                <ScrollShadow
                    hideScrollBar
                    offset={100}
                    orientation="horizontal"
                    className="flex flex-col w-full h-[600px] gap-4 m-auto overscroll-y-contain"
                >
                    {users.map((item, index) => (
                        <div key={item.id} className="grid grid-flow-col w-full justify-start py-5 pl-4 rounded-l-md bg-gradient-to-r from-explore-color-bg-primary/20 to-explore-color-bg-primary  gap-2">
                            <div className="flex w-[114px] break-words text-explore-color-text-first">{item.createAt}</div>
                            <div className="flex w-[98px]">{item.firtsName}</div>
                            <div className="flex w-[114px]">{item.dateBird}</div>
                            <div className="flex w-[60px] justify-center">
                                <Link href={item.mediaSocial}>
                                    <IconLinkedin />
                                </Link>
                            </div>

                            <Dialog.Root>
                                <Dialog.Trigger className="flex w-[50px]">
                                    <Button><IconEdit /></Button>
                                </Dialog.Trigger>
                                <Dialog.Overlay className='fixed inset-0 ring-0 bg-black/80 flex justify-center items-center m-auto'>
                                    <Dialog.Content className="flex w-full translate-x-1/4 p-10">
                                        <section className='flex flex-col items-center justify-center  px-20 py-8 rounded-3xl bg-explore-color-bg-secondary relative'>
                                            <span className="text-xl font-bold mb-4">Edit profile</span>
                                        
                                            <Flex direction="column" gap="3">
                                                <form
                                                    onSubmit={(e) => handleFormSubmit(e, index)}
                                                    
                                                    className="grid grid-cols-2 gap-4 w-full m-auto justify-center text-lg font-poppins"
                                                >
                                                    <div>
                                                        <label className="mb-2">
                                                            First Name
                                                        </label>
                                                        <input
                                                            name="first-name"
                                                            type="text"
                                                            defaultValue={item.firtsName}
                                                            required
                                                            className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                                                            invalid:text-red-600 rounded-lg outline-none"
                                                        />
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="mb-2">
                                                            Last Name
                                                        </label>
                                                        <input
                                                            name="last-name"
                                                            type="text"
                                                            defaultValue={item.lastName}
                                                            required
                                                            className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                                                            invalid:text-red-600 rounded-lg outline-none"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label className="mb-2">
                                                            Date of Birth
                                                        </label>
                                                        <input
                                                            name="date-birth"
                                                            type="date"
                                                            placeholder=""
                                                            defaultValue={item.dateBird}
                                                            required
                                                            className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                                                            invalid:text-red-600 rounded-lg outline-none"
                                                        />
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="mb-2">
                                                            Media Social
                                                        </label>
                                                        <input
                                                            name="media-social"
                                                            defaultValue={item.mediaSocial}
                                                            type="text"
                                                            required
                                                            className="flex h-14 mb-2 pl-4 border-0 bg-transparent ring-1 ring-explore-color-text-first focus:ring-2 focus:ring-explore-color-offShore
                                                            invalid:text-red-600 rounded-lg outline-none"
                                                        />
                                                    </div>
                                                    

                                                        <Button
                                                            type="submit"
                                                            className="flex col-span-2 text-xl items-center w-full h-[52px] tracking-widest font-bold place-content-center py-5 bg-explore-color-offShore rounded-xl mt-6 shadow-lg antialiased
                                                            outline-none border-0 focus:ring-2 focus:ring-explore-color-text-second"
                                                            >
                                                                UPDATE
                                                        </Button>
                                                    
                                                    <Dialog.Close>
                                                        <span className="flex justify-center items-center size-[40px] hover:bg-explore-color-bg-primary text-explore-color-offShore rounded-full absolute top-8 right-8 transition-colors duration-200">
                                                            x
                                                        </span>
                                                    </Dialog.Close>
                                                </form>
                                            </Flex>
                                        </section>
                                    </Dialog.Content>
                                </Dialog.Overlay>
                            </Dialog.Root>

                            <button
                                onClick={() => handleDeleteUser(index)}
                                className="flex w-[80px] justify-center"
                            >
                                <IconUserX />
                            </button>
                        </div>
                    ))}
                </ScrollShadow>
            </section>
        </div>
    );
}
