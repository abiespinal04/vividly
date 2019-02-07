import React from 'react';
import _ from 'lodash';

const Pagination = props => {
    const {itemCounts, pageSize } = props;
    const pageCount = itemCounts / pageSize;
    const pages = _.range(1, pageCount + 1);
   

    return ( 
    
        <nav>
        <ul className="pagination">
        { console.log(pageCount)}
        {pages.map(page => (
        <li key={page} className="page-item"><a class="page-link" href="/">{page}</a></li>))}
          
        </ul>
      </nav>

     );
}
 
export default Pagination;


 
 