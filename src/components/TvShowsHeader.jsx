function TvShowsHeader(){
    
    return(
        /* <!-- TVShows Header --> */
        <div className="row mt-5 mb-5">
            <div className="col-sm-10 col-12">
                <div className="d-flex align-items-center gap-3">
                    <h1 className="text-white mb-0">TV Shows</h1>
                    {/* <!-- button categorie --> */}
                    <div className="dropdown">
                        <button 
                            className="btn border border-secondary rounded-0 dropdown-toggle px-3 py-1" 
                            type="button" 
                            id="dropdownGenres" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            Genres
                        </button>
                        {/* <!-- lista dropdown categorie --> */}
                        <ul className="dropdown-menu  border-secondary" aria-labelledby="dropdownGenres">
                            <li><a className="dropdown-item text-light" href="#">Action</a></li>
                            <li><a className="dropdown-item text-light" href="#">Comedy</a></li>
                            <li><a className="dropdown-item text-light" href="#">Drama</a></li>
                            <li><a className="dropdown-item text-light" href="#">Western</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- icone a destra --> */}
            <div className="col-2 d-none d-sm-block">
                <div className="d-flex justify-content-end align-items-center gap-2">
                    <a href="#" className="btn btn-link p-0">
                        <i className="fa-solid fa-list px-2 py-1"></i>
                    </a>
                    <a href="#" className="btn btn-link p-0">
                        <i className="fa-solid fa-border-all px-2 py-1"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TvShowsHeader