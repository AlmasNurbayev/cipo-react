import { useMemo } from "react";

export default function usePages(totalPages, limit) {
    console.log('recount pages');
    const ArrayPages = useMemo(() => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push({
                limit: limit,
                page: i 
            });
        }
        return pages;
      }, [totalPages, limit])

      return ArrayPages;    
}