"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carousel() {
    return (
        <>
            <Swiper
                pagination={{
                    type: "bullets",
                }}
                
                navigation={false}
                modules={[Pagination, Navigation]}
                centeredSlides={true}
                loop={true}
                loopAdditionalSlides={1}
                className="mySwiper"
            >
                <SwiperSlide className="w-full p-3">
                    <div
                        className={`
                            h-[560px] w-full md:w-[400px] lg:w-[800px] bg-[#39B5FF] rounded-2xl flex overflow-hidden
                        `}
                    >
                        <div className="m-auto p-4">
                            <p className="text-sm md:text-lg text-center text-neutral-100 font-medium mb-4">
                                &quot;A agência Djamena é a melhor que de todas
                                que eu já conheci. Os profissionais são
                                atenciosos, eficientes e ágeis no atendimento.
                                Eu nunca tive problemas com passagens e seguros
                                de viagem nacional e internacionais que comprei
                                nesta agência. Eu super indico as pessoas que
                                comprar as passagens, seguros e realizar
                                reservas de hospedagem nesta agência&quot;
                            </p>
                            <p className="text-base text-center text-neutral-100">
                                - Mike Amisi
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full flex justify-center items-center p-3">
                    <div
                        className={`
                            h-[560px] w-full md:w-[600px] lg:w-[800px] bg-[#39B5FF] rounded-2xl flex overflow-hidden
                        `}
                    >
                        <div className="m-auto p-4">
                            <p className="text-sm md:text-lg text-center text-neutral-100 font-medium mb-4">
                                &quot;A minha viagem foi tranquila e
                                Maravilhosa. Quero agradecer a agência, sempre
                                disposta a oferecer o melhor para tornar a
                                viagem ainda mais especial. Recomendo pela
                                atenção e pelo carinho.&quot;
                            </p>
                            <p className="text-base text-center text-neutral-100">
                                - Inyene Udom
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full p-3">
                    <div
                        className={`
                            h-[560px] w-full md:w-[400px] lg:w-[800px] bg-[#39B5FF] rounded-2xl flex overflow-hidden
                        `}
                    >
                        <div className="m-auto p-4">
                            <p className="text-sm md:text-lg text-center text-neutral-100 font-medium mb-4">
                                &quot;Viajar é bom mas viajar sem estresse é
                                melhor. E para nossas viagens de turismo de
                                trabalho e tais, é sempre bom consultar os
                                melhores profissionais. Desta forma, conheço a
                                djamena viagens, que de forma particular e
                                profissional me auxiliou na planificação e
                                realização de algumas viagens muito importante,
                                a djamena viagens ajudou a achar passagens para
                                meus destinos a preços muito razoáveis dando me
                                a oportunidade de beneficiar de alguns descontos
                                na compras de passagens todo isso com um ótimo
                                atendimento e um bom acompanhamento na
                                realização de check in e outros. A equipe é
                                talentosa e bem coordenada! Agradeço pelos
                                serviços, e acompanhamentos! Sucesso!&quot;
                            </p>
                            <p className="text-base text-center text-neutral-100">
                                - Adderley Merveil Heaven Koulone
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-full p-3">
                    <div
                        className={`
                            h-[560px] w-full md:w-[400px] lg:w-[800px] bg-[#39B5FF] rounded-2xl flex overflow-hidden
                        `}
                    >
                        <div className="m-auto p-4">
                            <p className="text-sm md:text-lg text-center text-neutral-100 font-medium mb-4">
                                &quot;Prezado, Respondo ao nome de Darel
                                Mavoungou, secretário da Associação dos
                                Estudantes Congolês no Brasil - AECB.
                                <br />
                                <br />
                                No mês de janeiro 2024, experimentei os serviços
                                da agência DJAMENA para uma longa viagem Porto
                                Alegre até João pessoa ( ir e volta).
                                <br />
                                <br />
                                <span className="font-bold">
                                    Quero deixar a minha satisfação que vai desde os
                                    primeiros contatos pela compra da passagem (um
                                    serviço de atendimento ao cliente impecável); Os
                                    preços da passagem que desafio toda
                                    concorrência; Uma agência confiável e
                                    responsável; Livre de estresse caso surge um
                                    problema, sei que poderia contar com os serviços
                                    da agência pós venda da passagem.❤
                                </span>
                                <br />
                                <br />
                                Fiz uma excelente viagem e recomendo fortemente
                                DJAMENA agência por todas viagens nacionais ou
                                internacionais. ✈&quot;
                            </p>
                            <p className="text-base text-center text-neutral-100">
                                - Darel Mavoungou
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
