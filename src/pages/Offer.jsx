import { Heading, Mask, PagesHeader } from "../components"

const Offer = () => {
  return (
    <>
      <Mask />
      <PagesHeader />
      <section>
        <div className="px-5 pt-20 text-center">
          <Heading
            title="Oferta Nurkowa"
            text="Nasza oferta skierowana jest do osób, które nigdy wcześniej nie miały kontaktu z nurkowaniem, a także dla początkujących i doświadczonych nurków. Przeprowadzamy nurkowania w małych grupach, dostosowując je do poziomu i preferancji naszych klientów. W naszej ofercie każdy znajdzie coś dla siebie, przeprowadzamy nurkowania głębokie, jaskiniowe, wrakowe oraz z wykorzystaniem konfiguracji bocznej, tj. Sidemount."
          />
        </div>
      </section>
    </>
  )
}

export default Offer
