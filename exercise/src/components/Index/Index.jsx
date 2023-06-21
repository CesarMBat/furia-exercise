import { useRef } from 'react'
import Header from '../Header/Header'
import FURIA from '../../assets/furia.png'
import moletom1_1 from '../../assets/moletom/moletom1-2.webp'
import moletom1_2 from '../../assets/moletom/moletom1-2.webp'
import moletom2_1 from '../../assets/moletom/moletom2-1.webp'
import moletom2_2 from '../../assets/moletom/moletom2-2.webp'
import moletom3_1 from '../../assets/moletom/moletom3-1.webp'
import moletom3_2 from '../../assets/moletom/moletom3-2.webp'
import moletom4_1 from '../../assets/moletom/moletom4-1.webp'
import moletom4_2 from '../../assets/moletom/moletom4-2.jpg'
import camisa1_1 from '../../assets/camisas/camisa1-1.webp'
import camisa1_2 from '../../assets/camisas/camisa1-2.jpg'
import camisa2_1 from '../../assets/camisas/camisa2-1.webp'
import camisa2_2 from '../../assets/camisas/camisa2-2.webp'
import camisa3_1 from '../../assets/camisas/camisa3-1.webp'
import camisa3_2 from '../../assets/camisas/camisa3-2.webp'
import camisa4_1 from '../../assets/camisas/camisa4-1.webp'
import camisa4_2 from '../../assets/camisas/camisa4-2.webp'
import add1 from '../../assets/acessorios/add1.jpg'
import add2 from '../../assets/acessorios/add2.webp'
import add3 from '../../assets/acessorios/add3.webp'
import add4 from '../../assets/acessorios/add4.webp'

import '../../App.css'
import './index.css'
const Index = () => {
    
    const ref_Up = useRef(null)
    const ref_Moletom = useRef(null)
    const ref_Camisa = useRef(null)
    const ref_Add = useRef(null)
    const handleMenuClick = (item) => {

        switch (item) {
            case 'item0':
                ref_Up.current?.scrollIntoView({ behavior: 'smooth' })
                break

            case 'item1':
                ref_Moletom.current?.scrollIntoView({ behavior: 'smooth' })
                break
            case 'item2':
                ref_Camisa.current?.scrollIntoView({ behavior: 'smooth' })
                break
            case 'item3':
                ref_Add.current?.scrollIntoView({ behavior: 'smooth' })
                break
        }
    }
    return (
        <div>
            <div ref={ref_Up} >
                <Header onItemClick={handleMenuClick} />

            </div >
            <div style={{ height: '10rem' }}></div>
            <figure className='img-furia'>
                <img src={FURIA} alt="FURIA" />
            </figure>
            <div className="div-about">
                <h1 className="h1-about">"FURIA, NINGUÉM QUER ME VER VENCER MAIS DO QUE EU!"</h1>
                <div className="div-panthera">
                    <h2 className='h2-about'>Panthera.</h2>
                    <p>
                        Gênero de grandes felinos de características únicas: atitude, instinto e fúria.
                        O que mais chama atenção é sua pele — padrões particulares que diferem entre si,
                        ímpares, e estampam personalidade, marcam quem os vê. Uma obra de arte. Obra esta
                        que não se guarda no armário; se veste com orgulho.
                    </p>
                </div>

                <div className="div-panthera">
                    <h2 className='h2-about'>Panthera.</h2>
                    <p>
                        Representante de diversas espécies, está em todo o mundo. Segue singular: o único
                        grande felino capaz de rugir. A Panthera não se cala, mesmo diante do mais complexo
                        desafio. Sempre que se manifesta, algo diferente se desdobra. Adapte-se a ela, ou perca.
                    </p>
                </div>
                <small>            </small>
            </div>
            <div style={{ height: "50rem" }}></div>
            <div ref={ref_Moletom} className='ref_div'>
                <figure className='imgs-moletom'>
                    <div className='imgs-true'>
                        <img src={moletom1_1} height={'330px'} className='img-moletom-self front' />
                        <img src={moletom1_2} height={'330px'} className='img-moletom-self back' />
                        <img src={moletom2_1} height={'330px'} className='img-moletom-self front' />
                        <img src={moletom2_2} height={'330px'} className='img-moletom-self back' />
                        <img src={moletom3_1} height={'330px'} className='img-moletom-self front' />
                        <img src={moletom3_2} height={'330px'} className='img-moletom-self back' />
                        <img src={moletom4_1} height={'330px'} className='img-moletom-self front' />
                        <img src={moletom4_2} height={'330px'} className='img-moletom-self back' />
                    </div>
                    <div className='preco'>
                        <figcaption className='fig-preco'>Moletom R$209,99</figcaption>
                        <figcaption className='fig-preco'>Moletom R$199,99</figcaption>
                        <figcaption className='fig-preco'>Moletom R$169,99</figcaption>
                        <figcaption className='fig-preco'>Moletom R$189,99</figcaption>

                    </div>
                </figure>
            </div>
            <div style={{ height: "50rem" }}></div>

            <div ref={ref_Camisa} className='ref_div'>
                <figure className='imgs-moletom'>
                    <div className="imgs-true">
                        <img src={camisa1_1} height={'330px'} className='img-moletom-self front' />
                        <img src={camisa1_2} height={'330px'} className='img-moletom-self back' />
                        <img src={camisa2_1} height={'330px'} className='img-moletom-self front' />
                        <img src={camisa2_2} height={'330px'} className='img-moletom-self back' />
                        <img src={camisa3_1} height={'330px'} className='img-moletom-self front' />
                        <img src={camisa3_2} height={'330px'} className='img-moletom-self back' />
                        <img src={camisa4_1} height={'330px'} className='img-moletom-self front' />
                        <img src={camisa4_2} height={'330px'} className='img-moletom-self back' />
                    </div>
                    <div className='preco'>
                        <figcaption className='fig-preco'>Camiseta R$199,99</figcaption>
                        <figcaption className='fig-preco'>Camiseta R$99,99</figcaption>
                        <figcaption className='fig-preco'>Camiseta R$99,99</figcaption>
                        <figcaption className='fig-preco'>Camiseta R$99,99</figcaption>

                    </div>
                </figure>
            </div>
            <div style={{ height: "50rem" }}></div>


            <div ref={ref_Add} className='ref_div'>

                <figure className='imgs-moletom'>
                    <div className="imgs-true">
                        <img src={add1} height={'330px'} className='img-moletom-self' />
                        <img src={add2} height={'330px'} className='img-moletom-self' />
                        <img src={add3} height={'330px'} className='img-moletom-self' />
                        <img src={add4} height={'330px'} className='img-moletom-self' />
                    </div>
                    <div className='preco'>
                        <figcaption className='fig-preco'>Boné R$99,99</figcaption>
                        <figcaption className='fig-preco'>Bucket R$199,99</figcaption>
                        <figcaption className='fig-preco'>Meia R$89,99</figcaption>
                        <figcaption className='fig-preco'>Mochila R$439,99</figcaption>

                    </div>

                </figure>
            </div>
        </div>
    )
}

export default Index
