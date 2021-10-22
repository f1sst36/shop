import React from "react";
import Link from "next/link";

interface AProps {
    text: string
    href: string
}

export const A: React.FC<AProps> = ({text, href}) => {
    return <Link href={href}>
        <a>{text}</a>
    </Link>
}