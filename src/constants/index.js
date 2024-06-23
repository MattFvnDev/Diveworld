import { facebook, instagram, whatsapp, telegram } from "../assets";

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
    url: "/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "/",
  },
];
