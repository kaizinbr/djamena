"use client";
import { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";

import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Spinner,
} from "@nextui-org/react";
import {
    DateValue,
    parseDate,
    getLocalTimeZone,
    today,
} from "@internationalized/date";
import { Switch } from "@nextui-org/react";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Textarea } from "@nextui-org/react";
import { Plus, Minus, CircleAlert, X, Instagram, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";

export function Form() {
    const [campoNome, setCampoNome] = useState(""); //string
    const [campoCelular, setCampoCelular] = useState(+0); //number
    const [celularFormValue, setCelularFormValue] = useState(""); //string
    const [campoEmail, setCampoEmail] = useState(""); //string
    const [campoOrigem, setCampoOrigem] = useState(""); //string
    const [campoDestino, setCampoDestino] = useState(""); //string
    const [campoDataInicial, setCampoDataInicial] = useState<DateValue>(); //string (date)
    const [campoDataFinal, setCampoDataFinal] = useState<DateValue>(); //string (date)
    const [campoPassageiroAdulto, setCampoPassageiroAdulto] = useState(1); //number => 1
    const [campoPassageiroCrianca, setCampoPassageiroCrianca] = useState(0); //number => 0
    const [campoPassageiroBebe, setCampoPassageiroBebe] = useState(0); //number => 0
    const [campoFlexibilidade, setCampoFlexibilidade] = useState(false); //S or N
    const [campoMalaDespachada, setCampoMalaDespachada] = useState(0); //number => 0
    const [campoServicos, setCampoServicos] = useState([] as string[]); //array of strings
    const [campoCupomDesconto, setCampoCupomDesconto] = useState("");
    const [campoObservacao, setCampoObservacao] = useState(""); //string
    const [campoDataNascimento, setCampoDataNascimento] = useState<DateValue>(); //string (date)

    const { isOpen, onOpen, onClose } = useDisclosure();

    // states para controlar as mensagens de resposta
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    // formata o numero de celular para o formato (XX) XXXXX-XXXX
    const formatPhoneNumber = (phoneNumber: string) => {
        const cleaned = phoneNumber.replace(/\D/g, "");
        const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return phoneNumber;
    };

    // limpa o número de celular e adiciona o prefixo 55
    const cleanNumber = (phoneNumber: string) => {
        const numCleaned = phoneNumber.replace(/\D/g, "");
        let numeroComPrefixo = Number(numCleaned) + 5500000000000;
        return numeroComPrefixo;
    };

    // converte data para o formato YYYY-MM-DD
    const parseDateToISO = (date: DateValue | any) => {
        if (date) {
            return parseDate(date.toString()).toString().split("T")[0];
        }
        return "";
    };

    // UseEffect to format phone number on change
    useEffect(() => {
        setCelularFormValue(formatPhoneNumber(celularFormValue));
    }, [celularFormValue]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
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
                setLoading(false);
                return;
            }

            const formData = new FormData();
            formData.append("campoNome", campoNome);
            formData.append("campoCelular", campoCelular.toString());
            formData.append("campoEmail", campoEmail);
            formData.append("campoOrigem", campoOrigem);
            formData.append("campoDestino", campoDestino);
            formData.append(
                "campoDataInicial",
                parseDateToISO(campoDataInicial)
            );
            formData.append("campoDataFinal", parseDateToISO(campoDataFinal));
            formData.append(
                "campoPassageiroAdulto",
                campoPassageiroAdulto.toString()
            );
            formData.append(
                "campoPassageiroCrianca",
                campoPassageiroCrianca.toString()
            );
            formData.append(
                "campoPassageiroBebe",
                campoPassageiroBebe.toString()
            );
            formData.append("campoFlexibilidade", flexRes);
            formData.append(
                "campoMalaDespachada",
                campoMalaDespachada.toString()
            );
            campoServicos.forEach((servico, index) => {
                formData.append(`campoServicos[]`, servico);
            });
            formData.append("campoCupomDesconto", campoCupomDesconto);
            const obsString =
                "Data de nascimento:" +
                campoDataNascimento +
                "\n" +
                campoObservacao;
            formData.append("campoObservacao", obsString);

            const response = await fetch("/api/orcamento", {
                method: "POST",
                body: formData,
            }).then((res) => res.json());
            console.log(response.sucesso);
            if (response.sucesso == "S") {
                // Handle success
                setLoading(false);
                setSuccess(true);
            } else {
                // Handle error
                setLoading(false);
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 10000);
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
                    {/* parte de dados pessoais */}
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
                                inputMode="numeric"
                                label="Número de celular"
                                placeholder="(XX) XXXXX-XXXX"
                                labelPlacement="outside"
                                autoComplete="off"
                                value={celularFormValue}
                                classNames={{
                                    input: "w-full",
                                    label: "text-gray-700 text-sm font-bold mb-2",
                                }}
                                onValueChange={(value) => {
                                    setCelularFormValue(value);
                                    setCampoCelular(+cleanNumber(value));
                                }}
                                isRequired
                            />
                        </div>
                        <div className="col-span-1">
                            <Input
                                type="email"
                                label="Email"
                                placeholder="seunome@email.com"
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
                        {/* o iddas nao mantem um campo para isso, então é adicionada as observações */}
                        <div className="col-span-1 dataPicker">
                            <DatePicker
                                className=""
                                label="Data de nascimento"
                                value={campoDataNascimento}
                                labelPlacement="outside"
                                classNames={{
                                    input: "w-full",
                                    label: "text-gray-700 text-sm font-bold mb-2",
                                }}
                                onChange={setCampoDataNascimento}
                                maxValue={today(getLocalTimeZone())}
                                showMonthAndYearPickers
                            />
                        </div>
                    </section>

                    {/* seção de dados sobre a viagem */}
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
                                minValue={today(getLocalTimeZone())}
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
                                minValue={today(getLocalTimeZone())}
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
                                            setCampoPassageiroAdulto(
                                                campoPassageiroAdulto + 1
                                            );
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
                                            setCampoPassageiroCrianca(
                                                campoPassageiroCrianca - 1
                                            );
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
                                            setCampoPassageiroCrianca(
                                                campoPassageiroCrianca + 1
                                            );
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
                                            setCampoPassageiroBebe(
                                                campoPassageiroBebe - 1
                                            );
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
                                            setCampoPassageiroBebe(
                                                campoPassageiroBebe + 1
                                            );
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
                                            setCampoMalaDespachada(
                                                campoMalaDespachada - 1
                                            );
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
                                            setCampoMalaDespachada(
                                                campoMalaDespachada + 1
                                            );
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

                    <div className="flex justify-end">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-150 ease-in-out focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                placement="center"
                classNames={{
                    wrapper: "px-4",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
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
                                    className="bg-neutral-200 hover:bg-neutral-400"
                                    onPress={onClose}
                                >
                                    Ok
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            {loading && (
                <div className="-1">
                    <div
                        className={`
                    z-50 bg-overlay/50 backdrop-opacity-disabled w-screen h-screen fixed inset-0
                `}
                    >
                        <div className="flex justify-center items-center w-full h-full">
                            <Spinner
                                color="primary"
                                size="md"
                                classNames={{
                                    circle1: "border-b-[#39B5FF]",
                                    circle2: "border-b-[#39B5FF]",
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}

            <div className="-1">
                <div
                    className={`
                            fixed z-50 left-4 right-4 max-w-[400px] mx-auto
                            p-6 rounded-xl bg-neutral-50 border border-red-500/50 shadow-sm
                            transition-all duration-300 ease-in-out
                            ${error ? "top-4 " : "-top-full"}
                            flex flex-col
                        `}
                >
                    <p className="text-center mb-4">
                        Ocorreu um erro, verifique os dados e tente novamente.
                        <br />
                        Se o erro persistir, nos contate em algum dos canais
                        abaixo.
                    </p>

                    <div className="flex flex-col gap-4 justify-center items-center mb-4">
                        <div className="flex flex-row">
                            <Instagram size={24} />
                            <Link
                                href="https://www.instagram.com/djamena_viagens/"
                                target="_blank"
                                rel="noreferrer"
                                className="ml-2"
                            >
                                @djamena_viagens
                            </Link>
                        </div>
                        <div className="flex flex-row">
                            <Mail size={24} />
                            <a
                                href="mailto:djamenaviagens24@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="ml-2"
                            >
                                djamenaviagens24@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-row">
                            <SiWhatsapp className="size-6" />
                            <Link
                                href="https://api.whatsapp.com/send?phone=5585987688781"
                                target="_blank"
                                rel="noreferrer"
                                className="ml-2"
                            >
                                (85) 98768-8781
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="-1">
                <div
                    className={`
                            fixed z-50 left-4 right-4 max-w-[400px] mx-auto
                            p-2 rounded-xl bg-neutral-50 border border-green-500/50 shadow-sm
                            transition-all duration-300 ease-in-out
                            ${success ? "top-4" : "-top-full"}
                            flex flex-col
                        `}
                >
                    <div className="flex justify-end">
                        <button
                            onClick={() => {
                                setSuccess(false);
                            }}
                            className="hover:bg-red-500 rounded-full p-1"
                        >
                            <X />
                        </button>
                    </div>
                    <p className="text-center mb-4">
                        Sua solicitação foi feita com sucesso! Entraremos em
                        contato em breve.
                    </p>
                    <div className="flex flex-col gap-4 justify-center items-center mb-4">
                        <div className="flex flex-row">
                            <Instagram size={24} />
                            <Link
                                href="https://www.instagram.com/djamena_viagens/"
                                target="_blank"
                                rel="noreferrer"
                                className="ml-2"
                            >
                                @djamena_viagens
                            </Link>
                        </div>
                        <div className="flex flex-row">
                            <Mail size={24} />
                            <a
                                href="mailto:djamenaviagens24@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="ml-2"
                            >
                                djamenaviagens24@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-row">
                            <SiWhatsapp className="size-6" />
                            <Link
                                href="https://api.whatsapp.com/send?phone=5585987688781"
                                target="_blank"
                                rel="noreferrer"
                                className="ml-2"
                            >
                                (85) 98768-8781
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
