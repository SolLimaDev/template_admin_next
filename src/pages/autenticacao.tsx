import { useState } from "react";
import Image from "next/image";
import AuthInput from "../components/auth/Authinput";

export default function Autenticacao() {

    const [ modo, setModo] = useState<'login' | 'cadastro'> ('login')
    const [ email, setEmail] = useState('')
    const [ senha, setSenha] = useState('')
    const [ confirmaSenha, setConfirmaSenha] = useState('')

    function submeter(){
        if (modo === 'login') {
            console.log('Login')
        } else {
            console.log('Cadastrar')
        }
    }
    return (
        <div className={`flex h-screen items-center justify-center`}>
            <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
                <img 
                    src="https://source.unsplash.com/random" 
                    alt="Imagem da Tela de Autenticação" 
                    className="h-scrren w-full object-cover"
                />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`text-xl font-bold mb-5`}>
                    {modo === 'login' ? 'Entre com Sua Conta' : 'Cadastre-se na Plataforma'}
                </h1>
                <AuthInput
                    label="Email"
                    valor={email}
                    tipo={'email'}
                    valorMudou={setEmail}
                    obrigatorio
                />
                <AuthInput
                    label="Senha"
                    valor={senha}
                    tipo={'password'}
                    valorMudou={setSenha}
                    obrigatorio
                />
                <AuthInput
                    label="Confirmar Senha"
                    valor={confirmaSenha}
                    tipo={'password'}
                    valorMudou={setConfirmaSenha}
                    obrigatorio
                    naoRenderizaQuando={modo === 'login'}
                />
                <button onClick={submeter} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-md px-4 py-3 mt-6
                `}>
                {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>
                <hr className="my-6 border-gray-300 w-full" />
                <button onClick={submeter} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-md px-4 py-3
                `}>
                Entrar com Google {/* <Image className="bg-white" src="/logo/1534129544.svg" width={100} height={50} alt="Hinetwork Logo" /> */}
                </button>
                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer pl-2`}>
                            Crie uma conta gratuitamente
                        </a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte da nossa Comunidade?
                        <a onClick={() => setModo('login')} className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer pl-2`}> 
                            Entre com suas Credenciais
                        </a>
                    </p>
                )}
            </div>
        </div>
    )
}