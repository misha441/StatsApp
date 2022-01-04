import React from 'react'
import {NavLink} from "react-router-dom";
import styles from './UserList.module.scss'
import Paginator from "../../common/Paginator";
import Loading from "../../common/Loading/Loading";

export function UserList(props) {

    const onPageChanged = (pageNumber) => {
        const {pageSize} = props;
        props.setUsers(pageNumber)
    }

    return (
        <div className='container'>
            <div className={styles.links}>
                <NavLink className={styles.pageLink} to={'/'}>Main page</NavLink>
                <div className={`${styles.pageLink} ${styles.disabledLink}`}>User satistics</div>
            </div>
            <h2 className={styles.title}>
                Users statistics
            </h2>
            <div className={styles.table}>
                {props.loading ? <Loading /> : ''}
                <table className={styles.usersTable}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>IP address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.users.map((el) => {
                        return <tr key = {el.id}>
                            <td>{el.id}</td>
                            <td><NavLink to={'/stats/' + el.id}>
                                         {el.first_name}
                                         </NavLink></td>
                            <td>{el.last_name}</td>
                            <td>{el.email}</td>
                            <td>{el.gender}</td>
                            <td>{el.ip_address}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
            <div className={styles.paginator}>
                <Paginator currentPage={props.currentPage} onPageChanged={onPageChanged}
                           totalUsersCount={props.usersAmount}
                           pageUsersSize={props.pageSize}
                           pageSize={5}/>
            </div>
        </div>
    );
}

export default UserList;