import React from 'react';
import classes from "./Header.module.css"

const Header = () => {
    const date = new Date()
    let Days = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let Months = ['January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'];
    return (
        <div className={classes["main-date-wrapper"]}>
            <div className={classes["left"]}>
                <div className={classes["date"]}>
                    {date.getDate()}
                </div>
                <div className={classes["year"]}>
                    <div>{Months[date.getMonth()].slice(0,3)}</div>
                    <div>{date.getFullYear()}</div>
                </div>

            </div>
            <div className="right">
                <p className={classes["day"]}>{Days[date.getDay()]}</p>
            </div>
        </div>
    );
}

export default Header;
