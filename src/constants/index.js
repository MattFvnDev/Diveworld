import {
  facebook,
  instagram,
  whatsapp,
  messenger,
  poseidon,
  santi,
  sherwood,
  apex,
  xdeep,
  oms,
  bare,
  gralmarine,
  suunto,
  hollis,
  cressi,
  camaro,
  triton,
  approach,
  experience,
  target,
} from "../assets"

export const navigationLinks = [
  {
    id: "0",
    title: "Strona Główna",
    path: "/",
    onlyMobile: true,
  },
  {
    id: "1",
    title: "Oferta",
    path: "/oferta",
  },
  {
    id: "2",
    title: "Szkolenia",
    path: "/szkolenia",
  },
  {
    id: "3",
    title: "Oferta Grupowa",
    path: "/oferta-grupowa",
  },
  {
    id: "4",
    title: "O Nas",
    path: "/o-nas",
  },
  {
    id: "5",
    title: "Cennik",
    path: "/cennik",
  },
]

export const socialLinks = [
  {
    id: "0",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/profile.php?id=100046871105720",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/diveworld.gozo/",
  },
  {
    id: "2",
    title: "WhatsApp",
    iconUrl: whatsapp,
    url: "https://web.whatsapp.com/send?phone=+48606418530",
  },
  {
    id: "3",
    title: "Messenger",
    iconUrl: messenger,
    url: "https://www.messenger.com/t/221959344524463",
  },
]

export const carouselIcons = [
  {
    id: "0",
    title: "Cressi Logo",
    icon: cressi,
  },
  {
    id: "1",
    title: "Poseidon Logo",
    icon: poseidon,
  },
  {
    id: "2",
    title: "Apex Logo",
    icon: apex,
  },
  {
    id: "3",
    title: "Hollis Logo",
    icon: hollis,
  },
  {
    id: "4",
    title: "OMS Logo",
    icon: oms,
  },
  {
    id: "5",
    title: "Sherwood Logo",
    icon: sherwood,
  },
  {
    id: "6",
    title: "Triton Logo",
    icon: triton,
  },
  {
    id: "7",
    title: "GRALmarine Logo",
    icon: gralmarine,
  },
  {
    id: "8",
    title: "XDeep Logo",
    icon: xdeep,
  },
  {
    id: "9",
    title: "Santi Logo",
    icon: santi,
  },
  {
    id: "10",
    title: "Suunto Logo",
    icon: suunto,
  },
  {
    id: "11",
    title: "Camaro Logo",
    icon: camaro,
  },
  {
    id: "12",
    title: "Bare Logo",
    icon: bare,
  },
]

export const chooseUs = [
  {
    mainTitle: "Dlaczego DiveWorld?",
    content: [
      {
        title: "Cel",
        icon: target,
        info: [
          {
            subTitle: "Standard",
            stage:
              "Doświadczeni i certyfikowani instruktorzy zgodnie z poziomem organizacji m.in. SSI i IAND.",
          },
          {
            subTitle: "Wiedza",
            stage:
              "Nauczamy tak byś stał się świadomym i doświadczonym nurkiem.",
          },
          {
            subTitle: "Umiejętności",
            stage:
              "Umiejętności można powtarzać tyle razy, ile to konieczne, aż do ich opanowania.",
          },
          {
            subTitle: "Praktyka",
            stage:
              "Blisko 4 dekady doświadczenia w nurkowaniu i prowadzeniu centrów nurkowych.",
          },
        ],
      },
      {
        title: "Doświadczenie",
        icon: experience,
        info: [
          {
            subTitle: "Związany z nurkowaniem",
            stage: "Od 1987 roku",
          },
          {
            subTitle: "Instruktor Nurkowania",
            stage: "Od 2002 roku",
          },
          {
            subTitle: "Instruktor Nurkowania Technicznego",
            stage: "Od 2007 roku",
          },
          {
            subTitle: "Związany z Maltą i Gozo",
            stage: "Od 2017 roku",
          },
        ],
      },
      {
        title: "Podejście",
        icon: approach,
        info: [
          {
            subTitle: "Sprzęt i konfiguracja",
            stage:
              "Nasze kursy koncentrują się na budowaniu podstaw bezpiecznego nurkowania.",
          },
          {
            subTitle: "Indywidualizm i spójność",
            stage:
              "Do każdego klienta podchodzimy kompleksowo z uwzględnieniem jego indywidualnych potrzeb, co skutkuje ograniczoną liczbę miejsc na kursach, jak i nurkowaniach z przewodnikiem.",
          },
          {
            subTitle: "Planowanie i realizacja",
            stage:
              "Dla każdego nurkowania tworzymy i przestrzegany plan nurkowania.",
          },
          {
            subTitle: "Doradztwo i wsparcie",
            stage:
              "Oferujemy porady i wsparcie, a nie zmuszamy do udziału w kursie, którego faktycznie nie potrzebujesz.",
          },
        ],
      },
    ],
  },
]
