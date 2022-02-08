import Image from "next/image"

export default function Logo() {
    return (
        <div className={`flex items-center justify-center`}>
            <Image src="/logo/logo.png" width={50} height={50} alt="Hinetwork Logo" />
        </div>
    )
}
{/* <div className={'flex flex-col items-center justify-center shadow-black h-10 w-10 bg-white rounded-full'}>
            <div className={'h-3 w-3 rounded-full bg-green-500'} /> 
            <div className={'flex mb-0.5'}>
                <div className={'h-3 w-3 rounded-full bg-purple-500 mr-0.5'} />
                <div className={'h-3 w-3 rounded-full bg-purple-500 ml-0.5'} />
            </div>
        </div> */}