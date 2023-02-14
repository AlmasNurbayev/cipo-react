import { useMemo } from "react";

export default function usePages(totalPages, limit) {
    
    const ArrayPages = useMemo(() => {
        console.log('recount pages');
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