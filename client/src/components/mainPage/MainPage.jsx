import React from 'react';
import {NavLink} from "react-router-dom";
import mainBg from './../../assets/mainPage/photos/mainBG.png';
import bottomBG from './../../assets/mainPage/photos/bottomBG.png';
import phone from './../../assets/mainPage/photos/mobile.png';
import styles from './MainPage.module.scss';
import design from './../../assets/mainPage/photos/design.svg';
import secure from './../../assets/mainPage/photos/secure.svg';
import device from './../../assets/mainPage/photos/device.svg';

export function MainPage(props) {
    return (
        <div className={styles.mainPage}>
            <header className={styles.header} style={{backgroundImage: `url(${mainBg})`}}>
                <div className={styles.header__inner + ' container'}>
                    <div className={styles.header__leftBox}>
                        <div className='logo'>StatsApp</div>
                        <div className={styles.header__slogan}><span>Brainstorming</span> for <br/> desired perfect Usability</div>
                        <div className={styles.header__text}>Our design projects are fresh and simple and will
                            benefit your business greatly. Learn more about our work!</div>
                        <div className={styles.header__users_linkWrapper}>
                            <NavLink className={styles.header__users_link} to="/stats">Views Stats</NavLink>
                        </div>
                    </div>
                    <div className={styles.header__rightBox}>
                        <img className={styles.phone} src={phone} alt="phone"/>
                    </div>
                </div>
            </header>

            <div className={styles.content}>
                <div className='container'>
                    <div className={styles.content__title}>Why <span>small business owners <br/>
                    love</span> StatsApp?</div>
                    <div className={styles.content__text}>Our design projects are fresh and simple
                        and will benefit your business greatly. Learn more about our work!</div>
                    <div className={styles.content__cards}>

                        <div className={styles.card}>
                            <div className={styles.card__photo}>
                                <img src={design} alt="design"/>
                            </div>
                            <div className={styles.card__title}>Clean Design</div>
                            <div className={styles.card__text}>Increase sales by showing true dynamics of your website.</div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.card__photo}>
                                <img src={secure} alt="secure"/>
                            </div>
                            <div className={styles.card__title}>Secure Data</div>
                            <div className={styles.card__text}>Build your online store’s trust using Social Proof & Urgency.</div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.card__photo}>
                                <img src={device} alt="device"/>
                            </div>
                            <div className={styles.card__title}>Retina Ready</div>
                            <div className={styles.card__text}>Realize importance of social proof in customer’s purchase decision.</div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className={styles.footer} style={{backgroundImage: `url(${bottomBG})`}}>
                <div className="container">
                    <div className={styles.footer__inner}>
                        <div className={styles.logo + ' logo'}>StatsApp</div>
                        <div className={styles.footer__reservedBy}>All rights reserved by ThemeTags</div>
                        <div className={styles.footer__info}>Copyrights © 2019. </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default MainPage;