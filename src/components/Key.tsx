import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge";

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return (
        <div className={twMerge("h-14 min-w-14 px-4 bg-gradient-to-b from-neutral-200 to-neutral-300 inline-flex items-center justify-center rounded-xl text-xl text-neutral-950 font-medium border border-neutral-400/50 border-b-[3px] border-b-neutral-400 shadow-[0_2px_0_0_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.5)]", className)} {...otherProps}>
            {children}
        </div>
    )
}