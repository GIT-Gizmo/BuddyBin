import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const whatsapp = () => {
    return (
        <div className="shadow-slate-800 shadow-xl">
            <a
                href="https://wa.me/+2349072256332"
                target="_blank"
                rel="noreferrer"
                className={cn(
                    buttonVariants({ size: "icon", variant: "ghost" }),
                    "rounded-full flex justify-center items-center bg-blue-700 transition-all hover:scale-110 fixed z-50 bottom-5 right-5 w-[52px] h-[52px] sm:w-16 sm:h-16 border-none"
                )}
            >
                <IconBrandWhatsapp className="h-[75%] w-[75%] text-green-600" />
            </a>
        </div>
    )
}

export default whatsapp