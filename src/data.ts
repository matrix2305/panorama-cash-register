
export type Place = {
    name: string,
    position: number,
    slots: number,
    activeSlots: number,
    articles: {article: Article; quantity: number}[];
    paymentAccountPrice: number
}

export type Article = {
    name: string;
    price: number,
    type: string,
    image: string
}

export type Category = {
    name: string,
    value: string,
}

// Places
export const PlacesData: Place[] = [
    {name: 'Mesto 1', position: 1, slots: 2, activeSlots: 0, articles: [], paymentAccountPrice: 0},
    {name: 'Mesto 2', position: 2, slots: 4, activeSlots: 0,articles: [], paymentAccountPrice: 0},
    {name: 'Mesto 3', position: 3, slots: 6, activeSlots: 0,articles: [], paymentAccountPrice: 0},
    {name: 'Mesto 4', position: 4, slots: 8, activeSlots: 0,articles: [], paymentAccountPrice: 0},
    {name: 'Mesto 5', position: 5, slots: 4, activeSlots: 0,articles: [], paymentAccountPrice: 0},
    {name: 'Mesto 6', position: 6, slots: 4, activeSlots: 0,articles: [], paymentAccountPrice: 0},

];

export const ArticlesData: Article[] = [
    // sokovi
    {name: 'Koka kola 0.5', type: 'sok', price: 150, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/15-09-26-RalfR-WLC-0098.jpg/1200px-15-09-26-RalfR-WLC-0098.jpg'},
    {name: 'Fanta 0.5', type: 'sok', price: 130, image: 'data:image/jpeg;base64,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'},
    {name: 'Sprite 0.5', type: 'sok', price: 130, image: 'https://cenoteka.rs/assets/images/articles/sprite-1-5l-1009084-large.jpg'},
    {name: 'Cedjena narandža 0.3', type: 'sok', price: 190, image: 'https://coolinarika.azureedge.net/images/_variations/6/5/65d94b99fee74436a92ce280fe3faf41_view_l.png?v=2'},
    {name: 'Limunada 0.3', type: 'sok', price: 130, image: 'https://coolinarika.azureedge.net/images/_variations/c/a/cab2ea358d10ede0a55cb9644e378633_view_l.jpg?v=1'},
    {name: 'Mix voćni sok', type: 'sok', price: 200, image: 'https://stil.kurir.rs/data/images/2017/05/18/16/117661_cedjeni-sokovi_ls.jpg'},

    //Kafe
    {name: 'Espreso duži sa mlekom', type: 'kafa', price: 150, image: 'https://4.bp.blogspot.com/-aL4rndU2LUk/WNrJfDRga0I/AAAAAAAAFU4/TsrHLjuhsNcd10g0mcl31MIB9BZ1NtMxQCLcB/s1600/377c71f2069b1dba47f10aeb701d576d889101ee.jpg'},
    {name: 'Espreso kraći sa mlekom', type: 'kafa', price: 150, image: 'https://lh3.googleusercontent.com/proxy/dZil1zUZgRvtHZ0k1Om_X3Fu27f63WmRvsli8vdNrBogauia3ICL3iovDGxAcMXmrSj1ZXng99--UPyRxfVYABfi3uf-VFSbjdgN9julYCUh4uT55lAseZ5x'},
    {name: 'Espreso duži bez mleka', type: 'kafa', price: 150, image: 'https://4.bp.blogspot.com/-aL4rndU2LUk/WNrJfDRga0I/AAAAAAAAFU4/TsrHLjuhsNcd10g0mcl31MIB9BZ1NtMxQCLcB/s1600/377c71f2069b1dba47f10aeb701d576d889101ee.jpg'},
    {name: 'Espreso kraći bez mleka', type: 'kafa', price: 150, image: 'https://lh3.googleusercontent.com/proxy/dZil1zUZgRvtHZ0k1Om_X3Fu27f63WmRvsli8vdNrBogauia3ICL3iovDGxAcMXmrSj1ZXng99--UPyRxfVYABfi3uf-VFSbjdgN9julYCUh4uT55lAseZ5x'},

    //Jela
    {name: 'Ćevapi', type: 'hrana', price: 300, image: 'https://coolinarika.azureedge.net/images/_variations/7/1/7101b77fb166b5d26479048e0ef9831d_view_l.jpg?v=29'},
    {name: 'Pljeskavica', type: 'hrana', price: 300, image: 'https://www.navidiku.rs/firme/proizvodgalerija/galerija49051/velike/gurmanska-pljeskavica-250g56878.jpg'},
    {name: 'Pileća supa', type: 'hrana', price: 250, image: 'https://www.recepti.com/images/stories/kuvar/supe-i-corbe/01507-pileca-supa-sa-rezancima_zoom.jpg,'},
    {name: 'Teleća čorba', type: 'hrana', price: 250, image: 'https://stil.kurir.rs/data/images/2019/10/03/20/200507_shutterstock-378437188_ff.jpg'}
]


export const CategoriesData: Category[] = [
    {name: 'Sokovi', value: 'sok'},
    {name: 'Topli napici', value: 'kafa'},
    {name: 'Hrana', value: 'hrana'},
];


