import React, {useEffect, useState} from "react";
import {Article, Category, Place} from "../../data";
import './Checkout.scss';
import {useToasts} from "react-toast-notifications";
import {Modal, Button}  from "react-bootstrap";

type Props = {
    categories: Category[],
    articles: Article[],
    selectedPlace: Place|null,
    setSelectedPlace: Function,
    setProfit: Function
}

function Checkout({categories, articles, selectedPlace, setSelectedPlace, setProfit} : Props) : JSX.Element{
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [selectedArticle, setSelectedArticle] = useState<{article: Article, quantity: number} | null>(null)
    const [search, setSearch] = useState<string>('')
    const {addToast} = useToasts()
    const [paymentModal, setPaymentModal] = useState<boolean>(false)

    const addArticle: Function = () : void => {
        if (selectedArticle && selectedPlace){
            setSelectedPlace({...selectedPlace, articles: [...selectedPlace.articles, selectedArticle]})
            setSelectedArticle(null)
            addToast(`Uspešno dodat artikal ${selectedArticle.article.name}.`, {appearance: "success"})
        }
    }

    const deleteArticle: Function = (inputArticle: Article) : void => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm(`Da li sigurno želite da obrišete artikal: ${inputArticle.name} ?`)){
            if (selectedPlace){
                let newArticles = selectedPlace.articles.filter(article => article.article.name !== inputArticle.name)
                setSelectedPlace({...selectedPlace, articles: newArticles})
                addToast(`Uspešno obrisan artikal ${inputArticle.name}.`, {appearance: "info"})
            }
        }
    }

    const changeQuantityArticle: Function = (quantity: number, inputIndex: number) : void => {
        if (selectedPlace){
            let newArticles: {article: Article, quantity: number}[] = selectedPlace.articles.map(((article: {article: Article, quantity: number}, index: number) => {
                if (inputIndex === index){
                    article.quantity = quantity;
                }
                return article;
            }));
            setSelectedPlace({...selectedPlace, articles: newArticles})
        }
    }

    useEffect(() => {
        if (selectedPlace){
            let totalPrice: number = 0;
            selectedPlace.articles.forEach((article: {article: Article, quantity: number}) => {
                totalPrice += article.article.price * article.quantity;
            })
            setSelectedPlace({...selectedPlace, paymentAccountPrice: totalPrice})
        }
    }, [selectedPlace?.articles])

    const payment: Function = () : void => {
        if (selectedPlace){
            let finalSelectedPlace: Place = selectedPlace;
            setProfit((profit: number) => profit + finalSelectedPlace.paymentAccountPrice)
            finalSelectedPlace.articles = []
            finalSelectedPlace.activeSlots = 0;
            setSelectedPlace(finalSelectedPlace)
            setTimeout(() : void => {
                setSelectedPlace(null)
            }, 500)
            addToast('Uspešna naplata!', {appearance: "success"})
        }
    }



    return (
        <div>
            <Modal show={paymentModal} onHide={() => setPaymentModal(false)}>
                <Modal.Body className='p-0'><h2 className='bg-success text-center text-white'>Ukupno za naplatu: {selectedPlace?.paymentAccountPrice}</h2></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setPaymentModal(false)}>
                        Odustani
                    </Button>
                    <Button variant="primary" onClick={() => payment()}>
                        Naplati
                    </Button>
                </Modal.Footer>
            </Modal>
            <h4>{selectedPlace?.name}</h4>
            <input type='text' className='form-control mb-3' value={search} onChange={e => setSearch(e.target.value)} placeholder='Pretraži..'/>
            <select className='form-control'>
                <option onClick={() => setSelectedCategory(null)}>Svi proizvodi</option>
                {
                    categories.map(category => <option onClick={() => setSelectedCategory(category.value)}>{category.name}</option>)
                }
            </select>
            <ul className='w-100 article-list'>
                {
                    search === '' ? articles.map((article: Article) => {
                        if (selectedCategory){
                            if (article.type === selectedCategory){
                                return (
                                    <li className='article' onClick={() => setSelectedArticle({article: article, quantity: 1})}>
                                        <h6 className=''><img src={article.image} alt={article.name} width='20'/> | {article.name} | <span className='text-muted'>{article.type} | {article.price} din.</span></h6>
                                    </li>
                                )
                            }
                        }else {
                            return (
                                <li className='article' onClick={() => setSelectedArticle({article: article, quantity: 1})}>
                                    <h6 className=''><img src={article.image} alt={article.name} width='20'/> | {article.name} | <span className='text-muted'>{article.type} | {article.price} din.</span></h6>
                                </li>
                            )
                        }
                        return '';
                    }) : articles.filter((article: Article)=> article.name.includes(search)).map((article: Article) => {
                        if (selectedCategory){
                            if (article.type === selectedCategory){
                                return (
                                    <li className='article' onClick={() =>  setSelectedArticle({article: article, quantity: 1})}>
                                        <h6 className=''><img src={article.image} alt={article.name} width='20'/> | {article.name} | <span className='text-muted'>{article.type} | {article.price} din.</span></h6>
                                    </li>
                                )
                            }
                        }else {
                            return (
                                <li className='article' onClick={() => setSelectedArticle({article: article, quantity: 1})}>
                                   <h6 className=''><img src={article.image} alt={article.name} width='20'/> | {article.name} | <span className='text-muted'>{article.type} | {article.price} din.</span></h6>
                                </li>
                            )
                        }
                        return '';
                    })

                }
            </ul>
            {
                selectedArticle && <div className='selected-article d-flex align-items-center justify-content-between'>
                    <img className='m-2' src={selectedArticle.article.image} style={{maxWidth: '50px'}} alt={selectedArticle.article.name}/>
                    <div className='w-30'>
                        <h4>{selectedArticle.article.name}</h4>
                        Cena: <b>{selectedArticle.article.price} din.</b>
                    </div>
                    <div className='w-30 text-center'>
                        <div className='m-auto'>
                            <div className='w-100 d-flex'><label className='p-1'>Količina:</label> <input type='number' min={1} value={selectedArticle.quantity} onChange={e => setSelectedArticle({...selectedArticle, quantity: parseInt(e.target.value)})} className='form-control p-1' style={{width: '50px', fontSize: '15px'}}/></div>
                            <button className='btn btn-success btn-sm m-1' onClick={() => addArticle()}>Dodaj</button>
                            <button className='btn btn-danger btn-sm m-1' onClick={() => setSelectedArticle(null)}>Otkaži</button>
                        </div>
                    </div>
                </div>
            }
            {
                selectedPlace &&  <div className='d-flex w-100 justify-content-center align-items-center'>
                    <h5 className='m-2'>Zauzeta mesta: </h5>
                    <input type='number' className='form-control m-2' style={{width: '50px', fontSize: '15px'}} max={selectedPlace.slots} min={0} value={selectedPlace.activeSlots} onChange={e => setSelectedPlace({...selectedPlace, activeSlots: e.target.value})}/>
                </div>
            }

            <div className='w-100 article-list'>
                {
                    selectedPlace && selectedPlace.articles.map((article: {article: Article, quantity: number}, index: number) => {
                        return(
                            <div className='article clearfix'>
                                <h6 className='float-left p-3'>{article.article.name} | <span className='text-muted'>{article.article.type} | {article.article.price} din.</span></h6>
                                <div className='d-flex float-right p-2'>
                                    <input type='number' className='form-control mr-3' style={{width: '50px', fontSize: '15px'}} min={1} value={article.quantity} onChange={e => changeQuantityArticle(e.target.value, index)}/>
                                    <button className='btn btn-danger btn-sm mr-3' onClick={() => deleteArticle(article.article)}>Obriši</button>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    selectedPlace && <div className='w-100 position-absolute border-top' style={{bottom: 0}}>
                            <h5 className='float-left m-3'>Ukupna cena: {selectedPlace.paymentAccountPrice}</h5>
                        <button className='btn btn-success float-right m-3' onClick={() => setPaymentModal(true)}>Naplati</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Checkout;

