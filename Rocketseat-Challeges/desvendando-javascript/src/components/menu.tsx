import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react"
import { useFocusRing } from "@react-aria/focus"


export function Menu() {
    let { isFocusVisible, focusProps } = useFocusRing()


    return (
        <section className="flex w-full justify-center mt-16">
            <div className="flex w-3/4 justify-between">
                <div>
                    <h1 className="text-6xl">Desvendando JavaScript</h1>
                    <p className="text-2xl">Uma Jornada Interativa com Next.js</p>
                </div>

                <div className="flex flex-col">
                    
                    <Dropdown backdrop="blur">
                        <DropdownTrigger>
                            <Button 
                            variant="bordered"
                            className="outline-none border-0 focus:ring-2 focus:ring-explore-color-offShore"
                            style={{
                                outline: isFocusVisible ? 'rgb(245 157 26)' : 'none',
                            }} 
                            >
                            Menu
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu variant="faded" aria-label="Static Actions" className="font-poppins">
                            <DropdownItem color="warning" href="https://www.cursoemvideo.com/curso/javascript/" target="_blank">Curso de Javascript - 40H</DropdownItem>
                            <DropdownItem color="warning" href="https://www.cursoemvideo.com/curso/curso-de-algoritmo/" target="_blank">Curso de Algoritmo - 40H</DropdownItem>
                            <DropdownItem color="warning" href="https://app.rocketseat.com.br/cart/rocketseat-one?referral=franklimds&utm_source=platform&utm_medium=organic&utm_campaign=venda&utm_term=mgm&utm_content=indication-lp_one" target="_blank">                                
                                Rocketseat
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
 
                </div>
            </div>
        </section>
    )
}