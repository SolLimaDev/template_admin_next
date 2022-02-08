import Link from 'next/link'
interface MenuItemProps {
    texto: string
    icone: any
    className?: string
    url?: string
    onClick?: (ev: any) => void
}
export default function MenuItem(props:MenuItemProps ) {

    function renderizaLink() {
        return (
            <a className={`
            flex flex-col justify-center items-center h-20 w-20 text-gray-600 dark:text-gray-200
            ${props.className}`}>
                {props.icone}
                <span className={
                    'text-xs font-light'
                }>{props.texto}</span>
            </a>
        )
    }
    return (
        <li onClick={props.onClick} className={`hover:bg-gray-200 dark:hover:bg-zinc-700 cursor-pointer`}>
            {props.url ? (
                <Link href={props.url}>
                    {renderizaLink()}
                </Link>
            ) : (
                renderizaLink()
            )}
        </li>
    )
}