import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import listStyles from "../usersList/UserList.module.scss";
import {NavLink} from "react-router-dom";
import { DateRangePicker }  from 'rsuite';
import 'rsuite/dist/rsuite.css';
import './datePicker.scss';
import styles from "../userStatistics/UserStatistics.module.scss";
import ChartElement from "./ChartElement";
import {startOfDay, endOfDay, isAfter} from 'date-fns';
import Loading from "../../common/Loading/Loading";



export function UserStatistics(props) {

    const params = useParams()
    const prodId = params.id

    const handleSelect = (date) => {
        const startDate = date[0].toISOString().split('T')[0]
        const endDate = date[1].toISOString().split('T')[0]
        props.requestUserStats(props.userId, startDate, endDate)
    }

    useEffect(() => {
        setValue([new Date(props.date[0] || ''), new Date(props.date[1] || '')])
    }, [props.date])

    useEffect(() => {
        props.requestUserInfo(prodId)
        props.requestUserStats(prodId)
        console.log(prodId)
    }, [])

    const [value, setValue] = React.useState([new Date(props.date[0]), new Date(props.date[1])]);

    const Ranges = [
        {
            label: 'today',
            value: [startOfDay(new Date('2019-10-01')), endOfDay(new Date('2019-10-20'))]
        }
    ]

    return (
        <div className={'container'}>
            <div className={listStyles.links}>
                <NavLink className={listStyles.pageLink} to={'/'}>Main page</NavLink>
                <NavLink className={listStyles.pageLink} to={'/stats'}>User satistics</NavLink>
                <div className={`${listStyles.pageLink} ${listStyles.disabledLink}`}>{props.user}</div>
            </div>
            <div className={styles.title_datePeaker}>
                <h2 className={styles.title}>
                    {props.user}
                </h2>
                <DateRangePicker className={styles.picker}
                                 onChange={(date) => {
                                     handleSelect(date)
                                     setValue(date)}}
                                 panges={Ranges}
                                 placement="autoVerticalEnd"
                                 placeholder="Select Date Range"
                                 value={value}/>
            </div>



            <div className={styles.chart}>
                {props.loading ? <Loading /> : ''}
                <ChartElement stats={props.stats} dataVal = {"clicks"}/>
            </div>
            <div className={styles.chart}>
                {props.loading ? <Loading /> : ''}
                <ChartElement stats={props.stats} dataVal = {"page_views"}/>
            </div>

        </div>

    );
}

export default UserStatistics;