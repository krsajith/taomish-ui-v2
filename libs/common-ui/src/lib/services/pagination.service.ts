import { Injectable } from "@angular/core";
import drop from 'lodash-es/drop';

@Injectable({ providedIn: 'root' })
export class PaginationService {

  getPaginatedItems(dataList: any, page: number, pageSize: number) {
    const pg = page || 1;
    const pgSize = pageSize || 100;
    const offset = (pg - 1) * pgSize;
    const pagedItems = drop(dataList, offset).slice(0, pgSize);
    return {
      page: pg,
      pageSize: pgSize,
      startRow: pgSize * (pg - 1) + 1,
      endRow: Math.min(pgSize * pg, dataList.length),
      total: dataList.length,
      total_pages: Math.ceil(dataList.length / pgSize),
      data: pagedItems,
      pageLinks: this.getPageLinks(Math.ceil(dataList.length / pgSize), page)
    };
  }

  getPageLinks(totalPages: number, currentPage: number) {
    const range = 2;
    const arr = [];
    let total = range * 2 + 1;
    const availableBefore = currentPage - 1;
    const availableAfter = totalPages - currentPage;

    let start = currentPage - Math.min(range, availableBefore);
    let end = currentPage + Math.min(availableAfter, range);

    total -= (end - start) + 1;

    if (end === totalPages) {
      start = Math.max(start - total, 1);
    } else {
      end = Math.min(totalPages, end + total);
    }

    for (let page = start; page <= end; page++) {
      arr.push(page);
    }
    return arr;
  }

}
