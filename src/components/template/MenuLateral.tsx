import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons";
import Link from 'next/link'
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside className={`flex flex-col dark:bg-zinc-900 dark:text-gray-200`}>
            <div className={
                `flex flex-col items-center justify-center bg-zinc-400 dark:bg-zinc-600 h-20 w-20`
            }>
            <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeCasa} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>
            <ul>
                <MenuItem 
                onClick={() => console.log('Logout')} 
                texto="Sair" 
                icone={IconeSair}
                className={
                    `text-red-600 dark:text-red-400 hover:bg-red-500 hover:text-white dark:hover:text-white`
                    } />
            </ul>
        </aside>
    )
}