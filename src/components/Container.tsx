'use client';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({
    children,
    className
}) => {
    return (
        <div
            className={`
            ${className} 
            max-w-[1300px]
            mx-auto
            xl:px-20
            md:px-10
            px-5
            py-12
            md:py-20
            lg:py-0
        `}
        >
            {children}
        </div>
    )
}

export default Container;