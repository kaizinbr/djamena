"use client";

import React from "react";
import { DatePicker } from "@nextui-org/react";
import {
    DateValue,
    parseDate,
    getLocalTimeZone,
} from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";

export default function DateSelector() {
    const [value, setValue] = React.useState<DateValue>(
        parseDate("2024-04-04")
    );

    let formatter = useDateFormatter({ dateStyle: "full" });

    return (
        <div className="flex flex-row gap-2">
                <DatePicker
                    className="md:max-w-[284px]"
                    label="Ida:"
                    value={value}
                    labelPlacement="outside"
                    classNames={{
                        input: "w-full",
                        timeInputLabel: "text-gray-700 text-sm font-bold mb-2",
                    }}
                    onChange={setValue}
                />
        </div>
    );
}

// import React, { useState } from "react";
// import { format } from "date-fns";
// import { ptBR } from "date-fns/locale";
// import { Calendar as CalendarIcon } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover";

// let formatDate = (date: any) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     const localDate = `${year}-${month}-${day}`;
//     return localDate;
// };

// export default function DatePicker({
//     disabled,
//     spanText,
//     date,
//     setDate,
// }: {
//     disabled: boolean;
//     spanText: string;
//     date: string;
//     setDate: Function;
// }) {
//     const [dateObj, setDateObj] = React.useState<Date>();
//     const [selectedDate, setSelectedDate] = useState<Date | undefined>(
//         undefined
//     );
//     const [inputValue, setInputValue] = useState("");
//     const handleSelect = (date: Date | undefined) => {
//         if (!date) {
//             setInputValue("");
//             setSelectedDate(undefined);
//         } else {
//             setSelectedDate(date);
//             setInputValue(format(date, "PPP", { locale: ptBR }));
//             setDateObj(date);
//             setDate(formatDate(date));
//             console.log(formatDate(date), date);
//         }
//     };

//     return (
//         <Popover>
//             <PopoverTrigger asChild>
//                 <Button
//                     variant={"outline"}
//                     className={cn(
//                         `w-full  max-w-xs justify-start text-left font-normal bg-stone-800/50
//                         border-stone-800/50 hover:bg-stone-700/75 hover:border-stone-800/75
//                         hover:text-primary-foreground focus:bg-stone-700/75 focus:border-stone-800/75
//                         py-2 px-3 rounded-xl
//                         `,
//                         !date && "text-muted-foreground"
//                     )}
//                     disabled={disabled}
//                 >
//                     <CalendarIcon className="mr-2 h-4 w-4" />
//                     <span className="mr-2">{spanText}:</span>
//                     {inputValue}
//                 </Button>
//             </PopoverTrigger>
//             <PopoverContent
//                 className={`
//                 w-auto p-0 bg-stone-700/75 backdrop-blur-md border-stone-700/50
//                 text-primary-foreground border
//             `}
//             >
//                 <Calendar
//                     mode="single"
//                     selected={dateObj}
//                     onSelect={handleSelect}
//                     initialFocus
//                 />
//             </PopoverContent>
//         </Popover>
//     );
// }
