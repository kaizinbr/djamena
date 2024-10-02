"use client";

import { motion } from "framer-motion";

export default function Btn({ className } : { className?: string }) {
    return (
        <motion.a
            className={`
                bg-primary border-2 border-primary
                rounded-xl p-[3px]
                w-full text-white font-bold
                flex items-center justify-center 
                hover:bg-transparent hover:text-primary 
                transition-all duration-300
                ${className}
            `}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            href="/orcamento"
        >
            <p className="font-bold text-lg px-4 py-3 rounded-md">Faça um orçamento</p>
        </motion.a>
    );
}
