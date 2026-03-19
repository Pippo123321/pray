export interface Prayer {
  id: string;
  title: string;
  category: string;
  content: string;
  author?: string;
  date?: string;
}

export const prayers: Prayer[] = [
  {
    id: "prayer-1",
    title: "Preghiera di Consacrazione",
    category: "Consacrazione",
    author: "Preghiera Tradizionale",
    content: `Signore,
io sono tuo servo.
La mia vita viene da te e a te desidero restituirla.
Non conosco sempre la strada giusta
e spesso il mio cuore si smarrisce tra paure e desideri confusi;
ma tu vedi più lontano di me
e conosci ciò di cui ho bisogno più di quanto io possa immaginare.

Prendi ciò che sono:
i miei talenti e i miei limiti,
la mia forza e la mia debolezza.
Non permettere che la mia vita sia sterile o inutile.
Guidami nella tua volontà
anche quando non la comprendo fino in fondo.
Rendimi strumento del bene che vuoi compiere nel mondo.

Se posso essere di aiuto a qualcuno, usami.
Se posso portare luce dove c'è oscurità, mandami.
Se posso dare speranza a chi l'ha perduta, sostienimi.
Non cerco gloria per me stesso, Signore,
ma che la mia vita, anche nel silenzio delle cose piccole,
possa servire i tuoi disegni.

Dammi un cuore fedele,
una mente che cerchi la verità
e una volontà capace di seguirti.
E quando la mia fede sarà debole,
ricordami che appartengo a te.

Amen.`,
  },
  {
    id: "prayer-2",
    title: "Preghiera a Maria Madre di Dio",
    category: "Intercessione",
    author: "Preghiera Tradizionale",
    content: `Santa Maria, Madre di Dio,
tu che mai trascuri chi ti chiama,
rendimi saldo nella fede e pronto al servizio di Dio.
Fa' che la mia vita sia uno strumento nelle mani di Dio.

In questo momento affido a te i miei pensieri e desideri:
[posso scrivere qui ciò che chiedo, oppure lasciare vuoto]

Guida i miei passi, rafforza la mia volontà,
e rendimi capace di compiere il bene che vuoi.
Mantienimi saldo nelle prove,
fai brillare la tua luce dove c'è oscurità,
e insegnami a camminare con coraggio sulla via della fede.

Amen.`,
  },
  {
    id: "prayer-3",
    title: "Preghiera nella Tentazione",
    category: "Forza",
    author: "Preghiera Tradizionale",
    content: `Signore Gesù,
donami coraggio e forza in questo momento di tentazione.
Aiutami a riconoscere ciò che è veramente bene
e a non distrarmi né cedere a compromessi ingannevoli.

Fa' che sia in questi attimi, quando tutto sembra vacillare,
che la mia fede si riveli e cresca.

Maria, Madre potente,
intercedi per me e proteggimi dal peccato.

Amen.`,
  },
  {
    id: "prayer-4",
    title: "Preghiera di Affidamento",
    category: "Affidamento",
    author: "Preghiera Tradizionale",
    content: `Gesù,
mentre inizio ciò [...],
ti affido tutto me stesso.
Guidami affinché tutto ciò che faccio possa servirTi davvero.

Illumina i miei pensieri e guidami nelle scelte,
fa' che ogni mio sforzo diventi strumento per Te.

Amen.`,
  },
  {
    id: "prayer-5",
    title: "Preghiera di Perdono e Rialzamento",
    category: "Perdono",
    author: "Preghiera Tradizionale",
    content: `Signore,
tu hai visto la mia lotta e sai che non volevo cadere,
eppure sono caduto.
Il mio cuore è confuso e mi sento debole,
ma non voglio allontanarmi da Te proprio adesso.

Perdonami, Signore.
Rialzami ancora una volta.
Non lasciare che la mia caduta diventi disperazione
o che il nemico mi convinca che ormai è tutto perduto.

Tu conosci la mia fragilità meglio di me:
insegnami a ricominciare con più umiltà,
con più vigilanza
e con più fiducia nella Tua grazia.

Rimettimi in piedi, Signore,
e guidami di nuovo sulla Tua strada.

Amen.`,
  },
];

export const categories = [
  "Consacrazione",
  "Intercessione",
  "Forza",
  "Affidamento",
  "Perdono",
];
