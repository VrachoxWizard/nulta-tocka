// Koraci od rezervacije do razgovora. Isti nazivi na početnoj (Close) i na stranici Rezervacija,
// da korak koji jednom zovemo „Stiže potvrda“ ne postane negdje drugdje „Stiže ti mail“.
export const bookingSteps = [
  {
    title: 'Odabereš termin',
    text: 'U kalendaru biraš slobodan termin koji ti odgovara. Uvodni razgovor traje 45 minuta i košta 10 €.',
  },
  { title: 'Stiže potvrda', text: 'Na mail dobivaš potvrdu, upute za uplatu i link za video poziv.' },
  {
    title: 'Razgovaramo',
    text: 'U dogovoreno vrijeme otvoriš link. Treba ti samo mirno mjesto i mobitel ili laptop.',
  },
];
