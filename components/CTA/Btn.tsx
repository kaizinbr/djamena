"use client";

import { motion } from "framer-motion";

export default function Btn({ className } : { className?: string }) {
    return (
        <motion.a
            className={`
                bg-[#1C3A60]
                rounded-lg p-[3px]
                w-full text-neutral-100
                flex items-center justify-center
                ${className}
            `}
            animate={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            href="/orcamento"
        >
            <p className="font-bold text-lg px-4 py-3 rounded-md">Orçamento</p>
        </motion.a>
    );
}
