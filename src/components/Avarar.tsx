interface AvatarProps {
    img?: string;
}

const avatar = ({ img = 'https://s3-alpha-sig.figma.com/img/31bf/53dd/793e620cdcc8c3760cae89e5063f5690?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VYafboFS~Fb9DTE09iAA9hEHqBvBWjwyBOWeUhIK6iSjpfP0Vvme9B3j~jXoJuU6mUErvsqEZh6LhPE1oFRL~XzAlY~yLP-HEFLrBfHwhWifLTkjFPTnYC62XIX3Pm5c6Z5~ZRZVWQz1~fz2pdv5Ozbv5nXqjX2462KiLMN1f~-9VTkt0xBBG72yKr~grHQz~sNGSH9yBOdLQgeTvc0Rwjlr6EeKk1kpxCURP~udEcsyG89EoaLKqhjgP-g~Rxrzx7BJeuIQnR69ZZBfzDFBKzExgXx3R8DvaZC8sKGOMziY5uyNFmtlSVMQIfG-MVsUoOLqCOtGubuaOYb4gVSn7Q__' }: AvatarProps) => {
    return (
            <img className="size-10 rounded-full inline-block" src={img} alt="avatar" />
    )
}

export default avatar;
