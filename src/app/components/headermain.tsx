"use client"
import Image from "next/image"
import Link from "next/link"


export function HeaderMain(){
    return (
        <header className="headermaincontainer">
            
            <div>
                <div>
                    <Image alt="logo" src={"/img/dragonemblem.png"}  width={100} height={100}></Image> 
                    <h1>D&D Character Forge</h1>
                </div>

                <div>
                    
                    <Link href={"/vacio"}>Create Character</Link>
                    <Link href={"/vacio"}>My Characters</Link>

                    <Image alt="dark-light" src={"/example.jpg"}  width={100} height={100}></Image> 
                </div>
                

            </div>
        
        </header>


    )
}