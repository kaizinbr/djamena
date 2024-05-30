"use client";
import { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import DateSelector from "./DatePicker";
import { DatePicker } from "@nextui-org/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import {
    DateValue,
    parseDate,
    getLocalTimeZone,
} from "@internationalized/date";
import { Switch } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Textarea } from "@nextui-org/react";
import { Plus, Minus, User, CircleAlert } from "lucide-react";

export function Form() {
    const [campoNome, setCampoNome] = useState("");
    const [campoCelular, setCampoCelular] = useState("");
    const [campoEmail, setCampoEmail] = useState("");
    const [campoOrigem, setCampoOrigem] = useState("");
    const [campoDestino, setCampoDestino] = useState("");
    const [campoDataInicial, setCampoDataInicial] = useState<DateValue>();
    const [campoDataFinal, setCampoDataFinal] = useState<DateValue>();
    const [campoPassageiroAdulto, setCampoPassageiroAdulto] = useState(1);
    const [campoPassageiroCrianca, setCampoPassageiroCrianca] = useState(0);
    const [campoPassageiroBebe, setCampoPassageiroBebe] = useState(0);
    const [campoFlexibilidade, setCampoFlexibilidade] = useState(false);
    const [campoMalaDespachada, setCampoMalaDespachada] = useState(0);
    const [campoServicos, setCampoServicos] = useState([] as string[]);
    const [campoCupomDesconto, setCampoCupomDesconto] = useState("");
    const [campoObservacao, setCampoObservacao] = useState("");

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = useState("opaque");

    // Function to format phone number
    const formatPhoneNumber = (phoneNumber: string) => {
        const cleaned = phoneNumber.replace(/\D/g, "");
        const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return phoneNumber;
    };

    const cleanNumber = (phoneNumber: string) => {
        return phoneNumber.replace(/\D/g, "");
    };

    // parse date to YYYY-MM-DD
    const parseDateToISO = (date: DateValue | any) => {
        if (date) {
            return parseDate(date.toString()).toString().split("T")[0];
        }
        return "";
    };

    // UseEffect to format phone number on change
    useEffect(() => {
        setCampoCelular(formatPhoneNumber(campoCelular));
    }, [campoCelular]);

    // Rest of the code...

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const flexRes = campoFlexibilidade ? "S" : "N";

            if (
                !campoNome ||
                !campoCelular ||
                !campoEmail ||
                !campoOrigem ||
                !campoDestino ||
                !campoDataInicial
            ) {
                onOpen();
                return;
            }

            const response = await fetch("/api/orcamento", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    campoNome,
                    campoCelular: `+55${cleanNumber(campoCelular)}`,
                    campoEmail,
                    campoOrigem,
                    campoDestino,
                    campoDataInicial: parseDateToISO(campoDataInicial),
                    campoDataFinal: parseDateToISO(campoDataFinal),
                    campoPassageiroAdulto,
                    campoPassageiroCrianca,
                    campoPassageiroBebe,
                    campoFlexibilidade: flexRes,
                    campoMalaDespachada,
                    campoServicos,
                    campoCupomDesconto,
                    campoObservacao,
                }),
            });
            if (response.ok) {
                // Handle success
            } else {
                // Handle error
            }
        } catch (error) {
            // Handle error
        }
    };

    return (
        <>
            <div className="w-full lg:max-w-screen-lg m-auto py-8 px-4">
                <h2 className="text-2xl font-bold mb-4">
                    Solicitação de Orçamento
                </h2>
                <form onSubmit={handleSubmit}>
                    <section
                        className={`
                    grid
                    grid-cols-1
                    gap-4
                    md:grid-cols-2 md:gap-x-8 md:px-6
                    p-4 rounded-2xl bg-neutral-50
                
                `}
                    >
                        <h3 className="col-span-full font-bold text-lg">
                            Conte um pouco sobre você
                        </h3>
                        <div className="col-span-1">
                            <Input
                                type="text"
                                label="Nome"
                                placeholder="Digite seu nome"
                                labelPlacement="outside"
                                autoComplete="off"
                                value={campoNome}
                                classNames={{
                                    input: "w-full",
                                    label: "text-gray-700 text-sm font-bold mb-2",
                                }}
                                onValueChange={setCampoNome}
                                isRequired
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type="tel"
                                label="Número de celular"
                                placeholder="Digite seu número de celular"
                                labelPlacement="outside"
                                autoComplete="off"
                                value={campoCelular}
                                classNames={{
                                    input: "w-full",
                                    label: "text-gray-700 text-sm font-bold mb-2",
                                }}
                                onValueChange={setCampoCelular}
                                isRequired
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type="email"
                                label="Email"
                                placeholder="you@example.com"
                                labelPlacement="outside"
                                autoComplete="off"
                                value={campoEmail}
                                classNames={{
                                    input: "w-full",
                                    label: "text-gray-700 text-sm font-bold mb-2",
                                }}
                                onValueChange={setCampoEmail}
                                isRequired
                            />
                        </div>
                    </section>

                    <section
                        className={`
                    grid
                    grid-cols-1
                    gap-4
                    md:grid-cols-2 md:gap-x-8 md:px-6
                    mt-4
                    
                    p-4 rounded-2xl bg-neutral-50
                `}
                    >
                        <h3 className="col-span-full font-bold text-lg">
                            Agora um pouco sobre sua viagem
                        </h3>
                        <div className="col-span-1">
                            <Input
                                type="text"
                                label="Origem"
                                placeholder="Digite a cidade de origem"
                                labelPlacement="outside"
                                autoComplete="off"
                                value={campoOrigem}
                                classNames={{
                                    input: "w-full",
                                    label: "text-gray-700 text-sm font-bold mb-2",
                                }}
                                onValueChange={setCampoOrigem}
                                isRequired
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type="text"
                                label="Destino"
                                placeholder="Digite a cidade de destino"
                                labelPlacement="outside"
                                autoComplete="off"
                                value={campoDestino}
                                classNames={{
                                    input: "w-full",
                                    label: "text-gray-700 text-sm font-bold mb-2",
                                }}
                                onValueChange={setCampoDestino}
                                isRequired
                            />
                        </div>
                        <div className="col-span-1 dataPicker">
                            <DatePicker
                                className=""
                                label="Ida"
                                value={campoDataInicial}
                                labelPlacement="outside"
                                classNames={{
                                    input: "w-full",
                                    label: "text-gray-700 text-sm font-bold mb-2",
                                }}
                                onChange={setCampoDataInicial}
                                isRequired
                            />
                        </div>
                        <div className="col-span-1 dataPicker">
                            <DatePicker
                                className=""
                                label="Volta"
                                value={campoDataFinal}
                                labelPlacement="outside"
                                classNames={{
                                    input: "w-full",
                                    timeInputLabel:
                                        "text-gray-700 text-sm font-bold mb-2",
                                }}
                                onChange={setCampoDataFinal}
                            />
                        </div>

                        <div className="mb-4">
                            <div className="grid grid-cols-2 items-center gap-4">
                                <div className="flex flex-col">
                                    <label className="font-bold">Adultos</label>
                                    <span className="text-xs font-normal text-slate-600">
                                        Acima de 18 anos
                                    </span>
                                </div>
                                <div className="flex items-center justify-end">
                                    <button
                                        onClick={() => {
                                            if (campoPassageiroAdulto > 1) {
                                                setCampoPassageiroAdulto(
                                                    campoPassageiroAdulto - 1
                                                );
                                            }
                                        }}
                                        type="button"
                                        className="px-2 size-10 rounded-md bg-[#f4f4f5] hover:bg-[#e4e4e7] transition-all duration-150 ease-in-out"
                                    >
                                        <Minus />
                                    </button>
                                    <span className="px-2 w-9 flex justify-center items-center">
                                        {campoPassageiroAdulto}
                                    </span>
                                    <button
                                        onClick={() => {
                                            if (campoPassageiroAdulto < 5) {
                                                setCampoPassageiroAdulto(
                                                    campoPassageiroAdulto + 1
                                                );
                                            }
                                        }}
                                        type="button"
                                        className="px-2 size-10 rounded-md bg-[#f4f4f5] hover:bg-[#e4e4e7] transition-all duration-150 ease-in-out"
                                    >
                                        <Plus />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="grid grid-cols-2 items-center gap-4">
                                <div className="flex flex-col">
                                    <label className="font-bold">
                                        Crianças
                                    </label>
                                    <span className="text-xs font-normal text-slate-600">
                                        De 2 a 17 anos
                                    </span>
                                </div>
                                <div className="flex items-center justify-end">
                                    <button
                                        onClick={() => {
                                            if (campoPassageiroCrianca > 1) {
                                                setCampoPassageiroCrianca(
                                                    campoPassageiroCrianca - 1
                                                );
                                            }
                                        }}
                                        type="button"
                                        className="px-2 size-10 rounded-md bg-[#f4f4f5] hover:bg-[#e4e4e7] transition-all duration-150 ease-in-out"
                                    >
                                        <Minus />
                                    </button>
                                    <span className="px-2 w-9 flex justify-center items-center">
                                        {campoPassageiroCrianca}
                                    </span>
                                    <button
                                        onClick={() => {
                                            if (campoPassageiroCrianca < 5) {
                                                setCampoPassageiroCrianca(
                                                    campoPassageiroCrianca + 1
                                                );
                                            }
                                        }}
                                        type="button"
                                        className="px-2 size-10 rounded-md bg-[#f4f4f5] hover:bg-[#e4e4e7] transition-all duration-150 ease-in-out"
                                    >
                                        <Plus />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="grid grid-cols-2 items-center gap-4">
                                <div className="flex flex-col">
                                    <label className="font-bold">Bebês</label>
                                    <span className="text-xs font-normal text-slate-600">
                                        De 0 a 23 meses
                                    </span>
                                </div>
                                <div className="flex items-center justify-end">
                                    <button
                                        onClick={() => {
                                            if (campoPassageiroBebe > 1) {
                                                setCampoPassageiroBebe(
                                                    campoPassageiroBebe - 1
                                                );
                                            }
                                        }}
                                        type="button"
                                        className="px-2 size-10 rounded-md bg-[#f4f4f5] hover:bg-[#e4e4e7] transition-all duration-150 ease-in-out"
                                    >
                                        <Minus />
                                    </button>
                                    <span className="px-2 w-9 flex justify-center items-center">
                                        {campoPassageiroBebe}
                                    </span>
                                    <button
                                        onClick={() => {
                                            if (campoPassageiroBebe < 5) {
                                                setCampoPassageiroBebe(
                                                    campoPassageiroBebe + 1
                                                );
                                            }
                                        }}
                                        type="button"
                                        className="px-2 size-10 rounded-md bg-[#f4f4f5]  hover:bg-[#e4e4e7] transition-all duration-150 ease-in-out"
                                    >
                                        <Plus />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="grid grid-cols-2 items-center gap-4">
                                <div className="flex flex-col">
                                    <label className="font-bold">
                                        Bagagem despachada
                                    </label>
                                </div>
                                <div className="flex items-center justify-end">
                                    <button
                                        onClick={() => {
                                            if (campoMalaDespachada > 1) {
                                                setCampoMalaDespachada(
                                                    campoMalaDespachada - 1
                                                );
                                            }
                                        }}
                                        type="button"
                                        className="px-2 size-10 rounded-md bg-[#f4f4f5] hover:bg-[#e4e4e7] transition-all duration-150 ease-in-out"
                                    >
                                        <Minus />
                                    </button>
                                    <span className="px-2 w-9 flex justify-center items-center">
                                        {campoMalaDespachada}
                                    </span>
                                    <button
                                        onClick={() => {
                                            if (campoMalaDespachada < 5) {
                                                setCampoMalaDespachada(
                                                    campoMalaDespachada + 1
                                                );
                                            }
                                        }}
                                        type="button"
                                        className="px-2 size-10 rounded-md bg-[#f4f4f5]  hover:bg-[#e4e4e7] transition-all duration-150 ease-in-out"
                                    >
                                        <Plus />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 col-span-full">
                            <Switch
                                isSelected={campoFlexibilidade}
                                onValueChange={setCampoFlexibilidade}
                                color="primary"
                                classNames={{
                                    wrapper:
                                        "group-data-[selected=true]:bg-[#39B5FF]",
                                }}
                            >
                                Possuo flexibilidade para datas próximas
                            </Switch>
                        </div>

                        <div className="mb-4">
                            <CheckboxGroup
                                label="Serviços adicionais desejados"
                                classNames={{
                                    label: "text-gray-700 text-sm font-bold mb-2",
                                    wrapper:
                                        "group-data-[selected=true]:bg-[#39B5FF]",
                                }}
                                color="primary"
                                value={campoServicos}
                                onValueChange={setCampoServicos}
                            >
                                <Checkbox
                                    classNames={{
                                        wrapper:
                                            "data-[selected=true]:bg-[#39B5FF] check",
                                    }}
                                    color="primary"
                                    value="H"
                                >
                                    Hospedagem
                                </Checkbox>
                                <Checkbox
                                    classNames={{
                                        wrapper:
                                            "data-[selected=true]:bg-[#39B5FF] check",
                                    }}
                                    value="P"
                                >
                                    Passeios
                                </Checkbox>
                                <Checkbox
                                    classNames={{
                                        wrapper:
                                            "data-[selected=true]:bg-[#39B5FF] check",
                                    }}
                                    value="S"
                                >
                                    Seguros
                                </Checkbox>
                                <Checkbox
                                    classNames={{
                                        wrapper:
                                            "data-[selected=true]:bg-[#39B5FF] check",
                                    }}
                                    value="C"
                                >
                                    Cruzeiro
                                </Checkbox>
                            </CheckboxGroup>
                        </div>
                    </section>

                    <div className="my-4 p-4 rounded-2xl bg-neutral-50 md:px-6">
                        <Textarea
                            classNames={{
                                input: "w-full",
                                label: "text-gray-700 text-sm font-bold mb-2",
                            }}
                            label="Observações"
                            labelPlacement="outside"
                            placeholder="Adicione observações adicionais aqui"
                            value={campoObservacao}
                            onValueChange={setCampoObservacao}
                        />
                    </div>
                    {/* Add the remaining form fields based on the provided instructions */}

                    <div className="flex justify-end">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
            <Modal isOpen={isOpen} onClose={onClose} placement="center">
                <ModalContent>
                    {(onClose) => (
                        <>
                            {/* <ModalHeader className="flex flex-col gap-1">
                                Modal Title
                            </ModalHeader> */}
                            <ModalBody>
                                <div className="flex flex-col w-full justify-center items-center py-8 ">
                                    <CircleAlert className="size-16 text-red-500 mb-6" />
                                    <p>Preencha os dados corretamente!</p>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Ok
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
