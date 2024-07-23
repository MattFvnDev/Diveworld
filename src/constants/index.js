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
  cave,
  cave2,
  cave3,
  deep,
  deep2,
  deep3,
  sidemount,
  sidemount2,
  sidemount3,
  wreck,
  wreck2,
  wreck3,
  scubatanks,
  caveentrance,
  shipwreck,
  deepdiver,
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
    mainTitle: "Dlaczego Diveworld?",
    content: [
      {
        title: "Cel",
        icon: target,
        info: [
          {
            title: "Cel",
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
            title: "Doświadczenie",
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
            title: "Podejście",
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

export const diveWorldFeatures = [
  {
    id: "0",
    path: "/oferta",
    title: "Oferta",
    description: "Nurkowania rekreacyjne i techniczne",
    features: [
      "Odkryj i wpłyń do przepięknych jaskiń",
      "Zanuż się i eksploruj zatopione wraki",
      "Zanurkuj głęboko z wykorzystaniem technik dekompresyjnych",
      "Sprawdź nurkowania w konfiguracji Sidemount",
    ],
  },
  {
    id: "1",
    path: "/szkolenia",
    title: "Szkolenia",
    description: "Szeroki wachlarz szkoleń",
    features: [
      "Szkolenia dla nurków początkujących",
      "Programy poziomu podstawowego",
      "Programy specjalizacji dla nurków certyfikowanych",
      "Szkolenia Extendend Range (XR) dla nurków zaawansowanych ",
      "Szkolenia profesjonalistów nurkowych (DIVE PRO)",
    ],
  },
  {
    id: "2",
    path: "/",
    title: "Gozo",
    description: "Sprawdź gdzie warto zanurkować na Gozo",
    features: [
      "Archipelag Wysp Maltańskich to niewątpliwie jedno z najciekawszych miejsc do nurkowania w Europie",
      "Zanurkuj na Gozo i zobacz Inland Sea, Citadel czy Cathedral Cave",
      "Gozo jest atrakcyjne dla nurków o różnym poziomie zaawansowania",
    ],
  },
]

export const diveWorldTrendings = [
  {
    id: "1",
    path: "/oferta/nurkowania-glebokie",
    title: "Nurkowania Głębokie",
    img: deep,
    description: "Skorzystaj z mieszanek Nitrox i Trymix",
    icon: deepdiver,
  },
  {
    id: "2",
    path: "/oferta/nurkowania-jaskiniowe",
    title: "Nurkowania Jaskiniowe",
    img: cave2,
    description: "Wpłyń do malowniczych jaskiń na Gozo",
    icon: caveentrance,
  },
  {
    id: "3",
    path: "/oferta/nurkowania-wrakowe",
    title: "Nurkowania Wrakowe",
    img: wreck3,
    description: "Eksploruj pokłady zatopionych wraków",
    icon: shipwreck,
  },
  {
    id: "4",
    path: "/oferta/sidemount-diving",
    title: "Nurkowania Sidemount",
    img: sidemount2,
    description: "Zanurkuj z butlami w konfiguracji bocznej",
    icon: scubatanks,
  },
]

export const diveWorldOffers = [
  {
    id: "1",
    path: "/oferta/nurkowania-glebokie",
    title: "Nurkowania Głębokie",
    img: deep,
    description: "Skorzystaj z mieszanek Nitrox i Trymix",
    icon: deepdiver,
    content: [
      "Nurkowania głębokie nazywane nurkowaniami Extendend Range wymagające technik dekompresyjnych są jedną z popularnych form nurkowania na Gozo",
      "Duże głębokości dostępne bezpośrednio z brzegu, ciepła woda, duża przejrzystość, wraki czy jaskinie sprzyjają długim nurkowaniom dekompresyjnym",
      "Gozo stanowi idealne miejsca do szkoleń Extendend Range zarówno w konfiguracji Back Mount jak i Sidemount wykorzystując dostępne mieszaniny gazowe takie jak Nitrox czy Trimix",
    ],
    paragraph:
      "Zainteresowanych zapraszamy na szkolenia Deep Diver, Decompresion Diver lub Extended Range Diver",
    otherImgs: [deep2, deep3],
  },
  {
    id: "2",
    path: "/oferta/nurkowania-jaskiniowe",
    title: "Nurkowania Jaskiniowe",
    img: cave2,
    description: "Wpłyń do malowniczych jaskiń na Gozo",
    icon: caveentrance,
    content: [
      "U wybrzeży Malty a szczególnie Gozo znajduje się wiele Cavern dostępnych z brzegu jak i tych do których musimy dopłynąć łodzią",
      "Większość z nich to typowe jaskinie morskie, które nie wymagają skomplikowanych technik nawigacyjnych",
      "Duża przejrzystość wody, temperatura i nie wielka ilość osadów dennych stanowi doskonałe warunki do szkoleń cavernowych czy do doskonalenia poznanych już technik",
      "Wiele z nich posiada ciekawe komory powietrzne inne zalane są całkowicie",
    ],
    paragraph:
      "Zainteresowanych zapraszamy na szkolenia Cavern Diver i Cave Diver",
    otherImgs: [cave, cave3],
  },
  {
    id: "3",
    path: "/oferta/nurkowania-wrakowe",
    title: "Nurkowania Wrakowe",
    img: wreck3,
    description: "Eksploruj pokłady zatopionych wraków",
    icon: shipwreck,
    content: [
      "Archipelag wysp Maltańskich oferuje wiele możliwości do nurkowania na wrakach",
      "Na dnie leżą wraki historyczne jak i te komercyjne osadzone jako atrakcja dla nurków.",
      "Na Gozo bezpośrednio z brzegu mamy 4 wraki, tj. MV Karwela, MV Cominoland, MV Xlendi oraz najnowszy MV Hephaestus",
      "Do często odwiedzanych wraków dostępnych z łodzi należą, leżący u brzegu wyspy Comino patrolowiec P31 czy zatopiony przy Quawra point MV Imperial Eagle.",
    ],
    paragraph:
      "Zainteresowanych zapraszamy na szkolenia Wreck Diver, Advanced Wreck Diver lub Extendend Wreck Diver",
    otherImgs: [wreck2, wreck],
  },
  {
    id: "4",
    path: "/oferta/sidemount-diving",
    title: "Nurkowania Sidemount",
    img: sidemount2,
    description: "Zanurkuj z butlami w konfiguracji bocznej",
    icon: scubatanks,
    content: [
      "Konfiguracja Sidemount staje się coraz bardziej popularna",
      "Sidemount wymaga specjalnego sprzętu i szkolenia, jednak coraz częściej nurkowie wykorzystują ją w nurkowaniach technicznych i rekreacyjnych",
      "",
      "Butle w konfiguracji bocznej idealnie sprawdzają się podczas nurkowań wrakowych i jaskiniowych, gdzie towarzyszy nam ograniczona przestrzeń",
    ],
    paragraph:
      "Zainteresowanych zapraszamy na szkolenia Sidemount i Technical Sidemount",
    otherImgs: [sidemount, sidemount3],
  },
]