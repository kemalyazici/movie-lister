function Pagination({page,totalPage,setPage}) {

    const createPagination = (page,totalPage) => {
        let pages = []
        if(totalPage<9){
            console.log(1)
            for(let i=1; i<=totalPage; i++){
                pages.push(i);
            }
        }
        else if(page<4 && totalPage>8) {
            console.log(2)
            pages = [1,2,3,4,5,'...',(totalPage-2),(totalPage-1),totalPage]
        }
        else if(page>3 && totalPage>8){
            console.log(3)
            if(page<(totalPage-2)) {
                console.log(4)
                pages = page === 4 ? [1, 2, 3, 4, 5] : (page === 5 ? [1, 2, 3, 4, 5, 6] : (page!==(totalPage-3) ? [1, 2, 3, "...", (page - 1), page, (page + 1)]  : [1, 2, 3, "...",(totalPage-4)]))
                pages = page !== (totalPage-3) ? [...pages, "...",(totalPage - 2), (totalPage - 1), totalPage] : [...pages, (totalPage - 3),(totalPage - 2), (totalPage - 1), totalPage]
            }else{
                console.log(5)
                pages = [1,2,3,"...",(totalPage - 3),(totalPage - 2), (totalPage - 1), totalPage];
            }
        }

        return pages
    }

    const pages = createPagination(parseInt(page),parseInt(totalPage))



    return totalPage>1 &&(
        <div className="btn-group mt-10">

            {
                pages.map((pg,key) => {
                    const active = pg === parseInt(page) ? " btn-active" : "";
                    return pg !== "..." ? <button className={`btn${active}`} key={key} onClick={() => setPage(pg)}>
                                            {pg}
                                            </button> :
                        <button className="btn btn-disabled" key={key}>...</button>
                })
            }

        </div>
    );
}



export default Pagination;