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
    description: "Skorzystaj z mieszanek Nitrox i Trimix",
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
    id: "nurkowania-glebokie",
    path: "/oferta/nurkowania-glebokie",
    title: "Nurkowania Głębokie",
    img: deep,
    description: "Skorzystaj z mieszanek Nitrox i Trymix",
    specDescription: "Wejdź do świata nurkowań technicznych z Diveworld",
    icon: deepdiver,
    content: [
      "Nurkowania głębokie nazywane nurkowaniami Extendend Range (XR) to nurkowania wymagające technik dekompresyjnych",
      "Gozo i Malta oferują wiele miejsc do nurkowania w zakresie głębokości od 40 metrów i głębiej",
      "Do takich miejsc należą m.in. Inland Sea, Ras Hobz, Reqqa Point, Bottle Neck, Double Arch, Triple Arch oraz wraki.",
      "Wszystkie głębokie nurkowania są dostępne bezpośrednio z brzegu oferując niezapomniane wrażenia",
      "Gozo to idealne miejsca do szkoleń Extendend Range zarówno w konfiguracji Backmount jak i Sidemount",
    ],
    paragraph:
      "Zainteresowanych zapraszamy na szkolenia Deep Diver, Decompresion Diver lub Extended Range Diver",
    otherImgs: [deep, deep2, deep3],
  },
  {
    id: "nurkowania-jaskiniowe",
    path: "/oferta/nurkowania-jaskiniowe",
    title: "Nurkowania Jaskiniowe",
    img: cave2,
    description: "Wpłyń do malowniczych jaskiń na Gozo",
    specDescription: "Wejdź do świata nurkowań jaskiniowych z Diveworld",
    icon: caveentrance,
    content: [
      "U wybrzeży Malty a szczególnie Gozo znajduje się wiele Cavern dostępnych z brzegu jak i tych do których musimy dopłynąć łodzią",
      "Większość z nich to typowe jaskinie morskie, które nie wymagają skomplikowanych technik nawigacyjnych",
      "Duża przejrzystość wody, temperatura i znikoma ilość osadów dennych stanowi doskonałe warunki do szkoleń cavernowych i do doskonalenia poznanych już technik",
      "Wiele z nich posiada ciekawe komory powietrzne inne zalane są całkowicie",
    ],
    paragraph:
      "Zainteresowanych zapraszamy na szkolenia Cavern Diver i Cave Diver",
    otherImgs: [cave, cave2, cave3],
  },
  {
    id: "nurkowania-wrakowe",
    path: "/oferta/nurkowania-wrakowe",
    title: "Nurkowania Wrakowe",
    img: wreck3,
    description: "Eksploruj pokłady zatopionych wraków",
    specDescription: "Wejdź do świata nurkowań wrakowych z Diveworld",
    icon: shipwreck,
    content: [
      "Archipelag wysp Maltańskich oferuje wiele możliwości do nurkowania na wrakach",
      "Na dnie leżą wraki historyczne jak i te komercyjne osadzone jako atrakcja dla nurków.",
      "Na Gozo bezpośrednio z brzegu dostepne są 4 wraki, tj. MV Karwela, MV Cominoland, MV Xlendi oraz najnowszy MV Hephaestus",
      "Do często odwiedzanych wraków dostępnych z łodzi należą m.in. leżący u brzegu wyspy Comino patrolowiec P31 czy zatopiony przy Quawra point MV Imperial Eagle.",
    ],
    paragraph:
      "Zainteresowanych zapraszamy na szkolenia Wreck Diver, Advanced Wreck Diver lub Extendend Wreck Diver",
    otherImgs: [wreck, wreck2, wreck3],
  },
  {
    id: "sidemount-diving",
    path: "/oferta/sidemount-diving",
    title: "Nurkowania Sidemount",
    img: sidemount2,
    description: "Zanurkuj z butlami w konfiguracji bocznej",
    specDescription: "Wejdź do świata Sidemount z Diveworld",
    icon: scubatanks,
    content: [
      "Konfiguracja Sidemount staje się coraz bardziej popularna",
      "Sidemount wymaga specjalnego sprzętu i szkolenia, jednak coraz częściej nurkowie wykorzystują ją w nurkowaniach technicznych i rekreacyjnych",
      "Butle w konfiguracji bocznej idealnie sprawdzają się podczas nurkowań wrakowych i jaskiniowych, gdzie towarzyszy nam ograniczona przestrzeń",
      " Dzięki odpowiedniemu treningowi sidemount odblokujesz zupełnie nowy poziom doświadczenia i wolności w podwodnym świecie",
    ],
    paragraph:
      "Zainteresowanych zapraszamy na szkolenia Sidemount i Technical Sidemount",
    otherImgs: [sidemount, sidemount2, sidemount3],
  },
]

export const diveWorldCourses = [

  {
    id:"1",
    path: "",
    title: "Try Scuba",
    category:"Scuba Experience",
    // img: ,
    description: "",
    content:"Program SSI Try Scuba to najlepszy sposób na spróbowanie nurkowania po raz pierwszy. Będziesz na wodach basenowych lub płytkich wodach ograniczonych pod opieką instruktora. Program jest skierowany do osób bez doświadczenia w nurkowaniu. Celem programu jest wprowadzenie do powszechnie wykorzystywanego sprzętu i umiejętności, które są niezbędne do bezpiecznego nurkowania. Po kursie otrzymasz kartę uznaniową SSI Try Scuba",
    details:[
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 8,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 1,
        classesCondition: "Ilość zajęć w basenie / wodach ograniczonych:",
        classes: 1,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "0 m / 0 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"Zdolny do pływania, brak wymaganych uprawnień",
      }
    ],
  },
  {
    id:"2",
    path: "",
    title: "Basic Diver",
    category:"Scuba Experience",
    // img: ,
    description: "",
    content:"Program SSI Basic Diver nauczysz się umiejętności i wiedzy, których potrzebujesz, aby spróbować nurkować na głębokości do 12 metrów z Profesjonalistą SSI. Cały program Basic Diver może zostać zaliczony na poczet programów Scuba Diver lub Open Water Dive w ciągu 6 miesięcy.",
    details: [
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 10,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 1,
        classesCondition: "Ilość zajęć w basenie / wodach ograniczonych:",
        classes: 1,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "12 m / 40 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"brak wymaganych uprawnień",
      }
    ],
  },
  {
    id:"3",
    path: "",
    title: "Scuba Diver",
    category:"Scuba Experience",
    // img: ,
    description: "",
    content:"Program SSI Scuba Diver, to program wprowadzający wiedzę i niezbędne ćwiczenia do nurkowania na wodach basenopodobnych i na wodach otwartych. Dowiesz się wszystkiego, czego potrzebujesz, aby nurkować w wodach otwartych na głębokości 12 metrów z Profesjonalistą SSI. W tym programie ukończysz prawie połowę kursu Open Water Diver i możesz łatwo podnieść swoje kwalifikacje.",
    details: [
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 10,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 3,
        classesCondition: "Ilość zajęć w basenie / wodach ograniczonych:",
        classes: 2,
        divesCondition: "Ilość zajęć na Wodach Otwartych:",
        divess: 2,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "12 m / 40 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"brak wymaganych uprawnień",
      }
    ],
  },
  {
    id:"4",
    path: "",
    title: "Open Water Diver",
    category:"Scuba Experience",
    // img: ,
    description: "",
    content:"Program SSI Scuba Diver, to program wprowadzający wiedzę i niezbędne ćwiczenia do nurkowania na wodach basenopodobnych i na wodach otwartych. Dowiesz się wszystkiego, czego potrzebujesz, aby nurkować w wodach otwartych na głębokości 12 metrów z Profesjonalistą SSI. W tym programie ukończysz prawie połowę kursu Open Water Diver i możesz łatwo podnieść swoje kwalifikacje.",
    details: [
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 10,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 6,
        classesCondition: "Ilość zajęć w basenie / wodach ograniczonych:",
        classes: 6,
        divesCondition: "Ilość zajęć na Wodach Otwartych:",
        divess: 4,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "18 m / 60 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"brak wymaganych uprawnień",
        duration:"Czas trwania kursu:",
        durationCondition: 5,
      }
    ],
  },
  {
    id:"5",
    path: "",
    title: "Recreational Sidemount Diving",
    category:"Programy Specjalizacji nurkowych",
    // img: ,
    description: "",
    content:"Program SSI Recreational Sidemount Diving zapewnia wiedzę i umiejętności do samodzielnego planowania i przeprowadzenia nurkowań Extendend Range z wykorzystaniem konfiguracji Sidemount dla dwóch butli z gazem dennym i butli dekompresyjnych w granicach zdobytych uprawnień.",
    details: [
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 12,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 5,
        classesCondition: "Ilość zajęć w basenie / wodach ograniczonych:",
        classes: 1,
        divesCondition: "Ilość zajęć na Wodach Otwartych:",
        divess: 3,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "30 m / 100 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"certyfikat Open Water Diver",
        duration:"Czas trwania kursu:",
        durationCondition: 3,
      }
    ],
  },
  {
    id:"6",
    path: "",
    title: "Navigation",
    category:"Programy Specjalizacji nurkowych",
    // img: ,
    description: "",
    content:"Program SSI Navigation jest przeznaczony dla nurków którzy chcą uzyskać odpowiednią wiedzę i umiejętności które pozwolą im poruszać się pod wodą wykorzystując techniki nawigacyjne. Po ukończeniu programu, kursant będzie w stanie przeprowadzić nurkowanie samodzielnie nawigując i wynurzyć się w zaplanowanym miejscu.",
    details: [
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 10,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 5,
        divesCondition: "Ilość zajęć na Wodach Otwartych:",
        divess: 2,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "30 m / 100 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"certyfikat Open Water Diver",
        duration:"Czas trwania kursu:",
        durationCondition: 1,
      }
    ],
  },
  {
    id:"7",
    path: "",
    title: "Night Diving and Limited Visibility",
    category:"Programy Specjalizacji nurkowych",
    // img: ,
    description: "",
    content:"Celem szkolenia Night Diving and Limited Visibility jest przekazanie kursantom niezbędnej wiedzy i umiejętności aby bezpiecznie nurkować w nocy lub w warunkach ograniczonej widoczności. W trakcie szkolenia kursanci zdobędą wiedzę na temat rodzaju i ilości wymaganych świateł sztucznych, sposobie komunikowania się w ograniczonej widoczności oraz przećwiczą stosowane procedury awaryjne.",
    details: [
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 10,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 5,
        divesCondition: "Ilość zajęć na Wodach Otwartych:",
        divess: 2,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "30 m / 100 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"certyfikat Open Water Diver",
        duration:"Czas trwania kursu:",
        durationCondition: 1,
      }
    ],
  },
  {
    id:"8",
    path: "",
    title: "Wreck Diving",
    category:"Programy Specjalizacji nurkowych",
    // img: ,
    description: "",
    content:"Program SSI Wreck Diving to program który daje kursantom wiedzę teoretyczną na temat nurkowania na wrakach. Dostarcza umiejętności do samodzielnego planowania nurkowania do i w okolice wraku. Nawigowanie w obrębie wraku jak i procedury awaryjne. Program nie daje uprawnień do wpływania do środka i penetracji wraków.",
    details: [
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 10,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 6,
        divesCondition: "Ilość zajęć na Wodach Otwartych:",
        divess: 2,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "30 m / 100 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"certyfikat Open Water Diver",
        duration:"Czas trwania kursu:",
        durationCondition: 1,
      }
    ],
  },
  {
    id:"9",
    path: "",
    title: "Deep Diving",
    category:"Programy Specjalizacji nurkowych",
    // img: ,
    description: "",
    content:"Program SSI Deep Diving zapewni kursantom odpowiednią wiedzę i umiejętności w planowaniu i przeprowadzeniu nurkowań do maksymalnej głębokości 40m w granicach limitów bez dekompresyjnych (NDL). Po ukończeniu szkolenia kursant będzie potrafił zaplanować max. czas nurkowania do określonej głębokości oraz zarządzać ilością gazu oddechowego do planowanego nurkowania.",
    details: [
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 15,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 5,
        divesCondition: "Ilość zajęć na Wodach Otwartych:",
        divess: 3,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "40 m / 130 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"certyfikat Open Water Diver",
        duration:"Czas trwania kursu:",
        durationCondition: 2,
      }
    ],
  },
  {
    id:"10",
    path: "",
    title: "Advanced Adventurer",
    category:"Programy Specjalizacji nurkowych",
    // img: ,
    description: "",
    content:"Program SSI Advanced Adventurer został stworzony dla nurków którzy chcą zaznajomić się z różnymi formami nurkowania pod bezpośrednim nadzorem SSI Dive Proffesional. Program obejmuje 5 nurkowań z dowolnie wybranych specjalizacji nurkowych. Po ukończeniu programu kursant będzie mógł nurkować na zalecaną głębokość z partnerem o równych lub wyższych uprawnieniach.",
    details: [
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 10,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 5,
        divesCondition: "Ilość zajęć na Wodach Otwartych:",
        divess: 5,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "30 m / 100 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"certyfikat Open Water Diver",
        duration:"Czas trwania kursu:",
        durationCondition: 3,
      }
    ],
  },
  {
    id:"11",
    path: "",
    title: "Decompression Diving",
    category:"Programy Specjalizacji nurkowych",
    // img: ,
    description: "",
    content:"Program SSI Decompression Diving zapewnia wiedzę i umiejętności do samodzielnego planowania i przeprowadzenia nurkowań w konfiguracji rekreacyjnej do maksymalnej głębokości 40m z wykorzystaniem gazów dekompresyjnych o frakcji tlenu do 40% o maksymalnym czasie dekompresji do 15 minut.",
    details: [
      {
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 4,
        classesCondition: "Ilość zajęć w basenie / wodach ograniczonych:",
        classes: 1,
        divesCondition: "Ilość zajęć na Wodach Otwartych:",
        divess: 3,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "40 m / 130 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"certyfikat Open Water Diver, certyfikat Deep Diving, Certyfikat Enriched Air Nitrox 40, co najmniej 24 zalogowane nurkowania",
        duration:"Czas trwania kursu:",
        durationCondition: 2,
      }
    ],
  },
  {
    id:"12",
    path: "",
    title: "Enriched Air Nitrox",
    category:"Programy Specjalizacji nurkowych",
    // img: ,
    description: "",
    content:"Jeden z programów „No Water Program”, znacza to że nie jest wymagane szkolenie w wodzie. Program ten zapewnia dostateczną wiedzę w zakresie planowania i nurkowania z wykorzystaniem mieszanin oddechowych o wyższych frakcjach tlenu. Program ten posiada dwa niezależne od siebie poziomy. Poziom I dla nurkowań z wykorzystaniem mieszaniny oddechowej EAN32%, oraz pozim II posiadający(ISO 111O7) dla planowania nurkowań dla mieszanin oddechowych posiadających do 40% tlenu. Uzyskanie poziomu II nie jest zależne od poziomu I.",
    details: [
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 10,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 4,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "30 m / 100 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"certyfikat Open Water Diver, w połączeniu z kursem OWD",
        duration:"Czas trwania kursu:",
        durationCondition: 2,
      }
    ],
  },
  {
    id:"13",
    path: "",
    title: "Science of Diving",
    category:"Programy Specjalizacji nurkowych",
    // img: ,
    description: "",
    content:"Jeden z programów „No Water Program” nie wymagający nurkowania w wodach otwartych. Zapewnia on wiedzę z dziedziny fizyki, fizjologii nurkowania, teorii dekompresji a także środowiska naturalnego i sprzętu wykorzystywanego do nurkowania. Obszerny program wymagany przy kursach na stopień DivePro – Dive Master i stopnie instruktorskie.",
    details: [
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 10,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 5,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "30 m / 100 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"certyfikat Open Water Diver, w połączeniu z kursem OWD",
        duration:"Czas trwania kursu:",
        durationCondition: "Do uzyskania wymaganej wiedzy",
      }
    ],
  },
  {
    id:"14",
    path: "",
    title: "Perfect Buoyancy",
    category:"Programy Specjalizacji nurkowych",
    // img: ,
    description: "",
    content:"Program SSI Perfect Buoyancy kontrola pływalności to kluczowa umiejętność, lecz każdy nurek powie Ci, że udoskonalenie jej wymaga czasu. Specjalizacja Perfect Buoyancy nauczy Cię zaawansowanych technik i sposobów kontroli pływalności, abyś mógł udoskonalić swoją pływalność szybciej.",
    details: [
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 10,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 4,
        classesCondition: "Ilość zajęć w basenie / wodach ograniczonych:",
        classes: 2,
        divesCondition: "Ilość zajęć na Wodach Otwartych:",
        divess: 3,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "18 m / 60 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"certyfikat Open Water Diver, w połączeniu z kursem OWD",
        duration:"Czas trwania kursu:",
        durationCondition: 1,
      }
    ],
  },
  {
    id:"15",
    path: "",
    title: "Diver Stress and Rescue",
    category:"Programy Specjalizacji nurkowych",
    // img: ,
    description: "",
    content:"Program SSI Diver Stress and Rescue zapewnia wiedzę i umiejętności przydatne do pomocy Tobie i innym nurkom. Dowiesz się jak rozpoznawać stres i zapobiegać wypadkom oraz nauczysz się praktycznych technik przeprowadzania akcji ratunkowych i udzielania pierwszej pomocy.  ",
    details: [
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 12,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 6,
        classesCondition: "Ilość zajęć w basenie / wodach ograniczonych:",
        classes: 3,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "18 m / 60 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"certyfikat Open Water Diver, ważny kurs pierwszej pomocy (dwa lata)",
        duration:"Czas trwania kursu:",
        durationCondition: 3,
      }
    ],
  },
  {
    id:"16",
    path: "",
    title: "Dry Suit Diving",
    category:"Programy Specjalizacji nurkowych",
    // img: ,
    description: "",
    content:"Program ten zapewnia odpowiednią wiedzę i umiejętności do nurkowania w suchym skafandrze. Kursant dowie się jak ważne jest utrzymanie komfortu cieplnego, pozna różne rodzaje suchych skafandrów, zasady ich przechowywania i konserwacji, oraz nauczy się bezpiecznego nurkowania w tym sprzęcie.",
    details: [
      {
        ageCondition: "Minimalny wiek do udziału w szkoleniu:",
        minimalAge: 10,
        quantityCondition:"Ilość zajęć teoretycznych:",
        minimalQuantity: 6,
        classesCondition: "Ilość zajęć w basenie / wodach ograniczonych:",
        classes: 1,
        divesCondition: "Ilość zajęć na Wodach Otwartych:",
        divess: 2,
        maxDepthCondition:"Max. głębokosć podczas szkolenia:",
        maxDepth: "30 m / 100 ft",
        otherConditions:"Wymagania do otrzymania certyfikatu:",
        other:"certyfikat Open Water Diver, w połączeniu z kursem OWD",
        duration:"Czas trwania kursu:",
        durationCondition: 3,
      }
    ],
  },
]
