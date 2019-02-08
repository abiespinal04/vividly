import React from 'react';
import _ from 'lodash';

const Pagination = props => {
    const {itemCounts, pageSize,currentPage,onPageChange } = props;
    const pageCount = Math.ceil(itemCounts / pageSize);
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
   

    return ( 
    
        <nav>
        <ul className="pagination">
        { console.log(pageCount)}
        {pages.map(page => (
        <li key={page} className={currentPage === page ? "page-item active" : "page-item"}>
        <a className="page-link"  onClick={() => onPageChange(page)}>{page}</a>
        </li>))}
          
        </ul>
      </nav>

     );
}
 
export default Pagination;


 
 