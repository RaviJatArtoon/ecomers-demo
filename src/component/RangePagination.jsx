import React from 'react'

const RangePagination = () => {
    const DOTS = '...';

    const range = (start, end) => {
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
    };

    const paginationRange = (siblingCount = 1) => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
        const totalPageNumbers = siblingCount + 5;

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }
    }


    return (
        <div>

        </div>
    )
}

export default RangePagination
