import Image from "next/image"

const Logo = ({ className }: PropsWithClassName) => {
    return <Image src="/logo.svg" alt="Logo" className={className} />
}