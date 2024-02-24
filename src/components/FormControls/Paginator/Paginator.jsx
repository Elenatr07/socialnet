import React, { useState } from 'react';
import style from './Paginator.module.css';
import cn from "classnames"

let Paginator = (props) => {

        let pagesCount = Math.ceil( props.totalItemsCount / props.pageSize) //определение кол-ва страниц
        let pages= [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
   
        }
   return (   <div className={style.paginator}>
                    {pages.map(p => {
                        if (p === 1 || p === pagesCount || (p >= props.currentPage - 9 && p <= props.currentPage + 9)) {
                            return (
                                <span 
                                    key={p}
                                    className={props.currentPage === p ? style.select_page : style.pageNumber}
                                    onClick={(e) => {
                                        props.onPageChanged(p)
                                    }}>{p} </span>
                            );
                        } else if (p === props.currentPage - 10 || p === props.currentPage + 10) {
                            return <span  key={p}>... </span>;
                        } else {
                            return null;
                        }
                    })}
            </div>)
            
  
}

export default Paginator;

/*let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize =10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let[portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNamber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNamber = portionNumber * portionSize;

    return <div className={style.paginator}>
        {portionNumber > 1 && 
        <button className={style.pageButton} onClick={() => {setPortionNumber(portionNumber -1)}}>PREV</button>}
        {pages.filter(p => p >=leftPortionPageNamber && p <=rightPortionPageNamber)
            .map((p)=> { 
                return <span className={cn ({
                    [style.select_page]: currentPage === p}, style.pageNumber)} key={p}
                onClick={(e) => {
                    onPageChanged(p);
                }}>{p}</span>
            })}
            {portionCount > portionNumber &&
                <button className={style.pageButton} onClick = {()=> {setPortionNumber(portionNumber +1)}}>NEXT</button>
            }
        

    </div>
}
export default Paginator;*/