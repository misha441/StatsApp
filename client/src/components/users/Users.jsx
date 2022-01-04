import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {connect} from "react-redux";
import styles from './Users.module.scss';
import UserList from './usersList/UserList'
import UserStatistics from './userStatistics/UserStatistics'
import {getUsersAmount, requestUsers, requestUserStats, requestUserInfo} from "../../redux/userReducer";

export function Users(props) {

    function setUsers(currentPage){
        props.requestUsers(currentPage,10)
    }

    function getUsersCount(){
        props.getUsersAmount()
    }

    useEffect(() => {
        setUsers(props.currentPage)
        getUsersCount()
    }, [])

    return (
        <div>
            <header className={styles.header}>
                <div className="container">
                    <div className="logo">StatsApp</div>
                </div>
            </header>

            <div>
                <Routes>
                    <Route exact path='/' element={<UserList users={props.users} pageSize={props.pageSize}
                                                             setUsers={setUsers} currentPage={props.currentPage}
                                                             usersAmount={props.usersAmount}
                                                             requestUserStats={props.requestUserStats}
                                                             loading={props.loading}/>}/>
                    <Route path='/:id' element={<UserStatistics user={props.user}
                                                                stats={props.stats}
                                                                userId={props.userId}
                                                                requestUserInfo={props.requestUserInfo}
                                                                requestUserStats={props.requestUserStats}
                                                                date={props.date}
                                                                loading={props.loading}/>}/>
                </Routes>
            </div>

            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footer__inner}>
                        <div className={styles.logo + ' logo'}>StatsApp</div>
                        <div className={styles.footer__reservedBy}>All rights reserved by ThemeTags</div>
                        <div className={styles.footer__info}>Copyrights © 2019.</div>
                    </div>
                </div>
            </footer>

        </div>

    );
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    usersAmount: state.usersPage.usersAmount,
    user: state.usersPage.user,
    userId: state.usersPage.userId,
    date: state.usersPage.date,
    stats: state.usersPage.stats,
    loading: state.usersPage.loading

})

export default connect(mapStateToProps, {requestUsers, getUsersAmount,requestUserInfo, requestUserStats})(Users);