import useAppData from "../../data/hook/useAppData";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface LayoutProps {
    url?: string
    titulo: string
    subtitulo: string
    children?: any

}
export default function Layout(props:LayoutProps) {
    const { tema } = useAppData()
    return (
        <div className={`${tema} flex h-screen w-screen`}>
            <MenuLateral />
            <div className={`
                flex flex-col 
                dark:bg-zinc-800 
                dark:text-gray-200 
                w-full p-7 
                bg-gray-300`
                }>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
                <Conteudo>
                    {props.children}
                </Conteudo> 
            </div>
        </div>
    )
}