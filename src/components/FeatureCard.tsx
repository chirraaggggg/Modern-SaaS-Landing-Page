import { twMerge } from "tailwind-merge";

export default function FeatureCard(props: { title: string; description: string; children?: React.ReactNode; className?: string; }) {
    const { title, description, children, className } = props;
    return (
        <div className={twMerge("bg-neutral-900 border border-white/10 p-6 rounded-3xl group hover:border-lime-400/30 transition-colors duration-300", className)}>
            <div className="aspect-video rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105">{children}</div>
            <div>
                <h3 className="text-3xl font-medium mt-6 group-hover:text-lime-400 transition-colors duration-300">{title}</h3>
                <p className="text-white/50 mt-2">{description}</p>
            </div>
        </div>
    )
}