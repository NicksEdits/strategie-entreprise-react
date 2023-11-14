import {useState} from 'react'
import './index.css'

import chateauImage from './assets/5.jpg'
import logo from './assets/logo.png'
import compte from './assets/air-france-11 1.png'
import vin from './assets/Group.png'
import jambon from './assets/Logos-_x2F_-Icons.png'
import jambon1 from './assets/orange-3 1.png'
import col1 from './assets/6.jpeg'
import actus1 from './assets/343-tracy-le-mont-tracy-mont-chateau-offemont-facade.jpg'
import col2 from './assets/7.jpg'
import actus2 from './assets/8.jpg'


function App() {
    return (
        <>
            <main>
                <header>
                    <img alt='' className='head' src={chateauImage}/>
                    <img className='logo' src={logo}/>
                    <h1><span>Chateau</span> <br/> <span>La Marquise </span></h1>
                    <div class='burger'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
                        </svg>
                    </div>
                    <div class='arrow'>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256"
                             height="1em"
                             width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm34.83-86.83a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,158.34V88a4,4,0,0,1,8,0v70.34l25.17-25.17A4,4,0,0,1,162.83,133.17Z"></path>
                        </svg>
                    </div>
                </header>
                <div className='cols'>
                    <div className='col1'>
                        <h2> Le chateau da Vinci</h2>
                        <p>Lorem ipsum dolor sit ametconsectetur. <br/> Eu leo tortor felis sodales urna
                            libero.<br/> Pretium risus sem nisl interdum nunc orci cursus sapien. <br/> Et porta
                            molestie id urna</p>
                        <a href="#">amet constiejcor.</a>
                    </div>
                    <div className='col2'>
                        <img src={col2}/>
                    </div>
                </div>
                <div className='titre'>
                    <div className='separator'></div>
                    <h3> Du bon vin ainsi que du bon paim </h3>
                </div>


                <div className='chiffres'>
                    <h4>Les chiffres clés</h4>
                    <div className='chif-txt'>
                        <div>
                            <span>100%</span>
                            <div className='txt'>DES VINS SONT PRODUIT SUR PLACE</div>

                        </div>
                        <div>
                            <span>80%</span>
                            <div className='txt'>DE NOS VINS SONT BIO</div>
                        </div>
                        <div>
                            <span>100%</span>
                            <div className='txt'>DES PRODUITS SONT TU TERROIRES DE LA RÉGION</div>
                        </div>
                    </div>
                </div>
                <div className='coldegu'>
                    <div className='coldegu1'>
                        <img src={col2}/>
                        <div>
                            <h4>Dégustation </h4>
                        </div>
                    </div>
                    <div className='coldegu2'>
                        <img src={col1}/>
                        <div>
                            <h4>Séjour</h4>
                        </div>
                    </div>

                </div>
                <div className='part'>
                    <h4> Nos partenaires</h4>
                    <div className='images-logo'>
                        <img src={jambon}/>
                        <img src={vin}/>
                        <img src={compte}/>
                        <img src={jambon1}/>
                    </div>
                </div>
                <div className='colsdevis'>
                    <div className='col2devis'>
                        <img src={col2}/>
                    </div>
                    <div className='col1devis'>
                        <h2> Je demande un devis</h2>
                        <p>Lorem ipsum dolor sit ametconsectetur. <br/> Eu leo tortor felis sodales urna
                            libero.<br/> Pretium risus sem nisl interdum nunc orci cursus sapien. <br/> Et porta
                            molestie id urna</p>
                        <a href="#">amet constiejcor.</a>
                    </div>

                </div>
                <div className='txt-apd'>
                    <div className='textes'>
                        <div>
                            <h3> Marco</h3>
                            <p> Directeur marketing hoost</p>
                            <span>Notre séjour au Chateau de Tracy fut exceptionnel ! La méthode de production du vin présentée avec passion a enrichi notre expérience. Le cadre du château, empreint d'élégance historique, a créé une atmosphère magique. Merci pour cette expérience mémorable.</span>
                        </div>
                        <div>
                            <h3> Marco</h3>
                            <p> Directeur marketing hoost</p>
                            <span>Notre séjour au Chateau de Tracy fut exceptionnel ! La méthode de production du vin présentée avec passion a enrichi notre expérience. Le cadre du château, empreint d'élégance historique, a créé une atmosphère magique. Merci pour cette expérience mémorable.</span>
                        </div>

                    </div>
                    <div className='textes'>
                        <div>
                            <h3> Marco</h3>
                            <p> Directeur marketing hoost</p>
                            <span>Notre séjour au Chateau de Tracy fut exceptionnel ! La méthode de production du vin présentée avec passion a enrichi notre expérience. Le cadre du château, empreint d'élégance historique, a créé une atmosphère magique. Merci pour cette expérience mémorable.</span>
                        </div>
                        <div>
                            <h3> Marco</h3>
                            <p> Directeur marketing hoost</p>
                            <span>Notre séjour au Chateau de Tracy fut exceptionnel ! La méthode de production du vin présentée avec passion a enrichi notre expérience. Le cadre du château, empreint d'élégance historique, a créé une atmosphère magique. Merci pour cette expérience mémorable.</span>
                        </div>

                    </div>
                </div>
                <div className='onacu'>
                <div className='actus'>
                    <div className='titres'>
                        <h4>Découvrez les actualités du château, les nouveautés !</h4>
                    </div>
                    <span className='sp'></span>
                    <div className='imagesactus'>
                        <div className='widthactu'>
                            <img src={actus1} alt=''/>
                            <p>LE CHATEAU</p>
                            <span>Comment le chateau est construit ?</span>
                        </div>

                    </div>
                    <div className='imagesactus'>
                        <div className='widthactu'>
                            <img src={actus2} alt=''/>
                            <p>LES VINS</p>
                            <span>Comment le vin est-il produit au coeur de nos vignobles ?</span>
                        </div>

                    </div>
                </div>
                </div>
                <footer>
                    <div className='colfoot'>
                        <div>
                            <img className='' src={logo}/>
                            <span>
                            <p>Le Château de Tracy,</p>
                            <p>58150 Tracy-sur-Loire</p>
                            <p>Ouverture Lundi - Vendredi</p>
                            </span>
                        </div>
                    </div>
                    <div className='colfoot2'>
                        <div>Mail</div>
                        <p>tracy@gmail.com</p>
                        <div>Numéro</div>
                        <p>06 95 67 10 10</p>
                        <div>
                            <a>Mentions légales</a>
                            <a>Instagram</a>
                            <a>Linkedin</a>
                        </div>
                    </div>


                </footer>
            </main>
        </>
    )
}

export default App
