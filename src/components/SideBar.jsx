import React,{useEffect, useState} from "react";


function SideBar({setGenres, setOrder,setPage}) {

    const [genArr, setGenArr] = useState([]);

    const onClick = (e) => {
        if(genArr.includes(e.target.value)) {
            setGenArr(genArr.filter(genre => genre!==e.target.value))
        }else{
            setGenArr([...genArr,e.target.value])
        }
        setPage(1)

    }

    const onChange = (e) => {
        setOrder(e.target.value)
    }

    useEffect(() => {
        setGenres(genArr.join(','))
    },[genArr])


    return (
                    <ul className="p-5" style={{width:"160px"}}>
                        <h1 style={{fontWeight:"bold", fontSize:"25px"}}>Order</h1>
                        <li>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Movie List Order</span>
                                </label>
                                <select className="select select-bordered" onChange={onChange} defaultValue="id">
                                    <option value="id">by ID</option>
                                    <option value="title">by Title</option>
                                    <option value="year">by Year</option>
                                    <option value="id_desc">by ID DESC</option>
                                    <option value="year_desc">by Year DESC</option>
                                    <option value="title_desc">by Title DESC</option>

                                </select>
                            </div>
                        </li>
                        <li><div className="mb-5"/></li>
                        <h1 style={{fontWeight:"bold", fontSize:"25px"}}>Genres</h1>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Action</span>
                                    <input type="checkbox" className="checkbox" value="Action"   onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Adventure</span>
                                    <input type="checkbox" className="checkbox" value="Adventure"   onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Fantasy</span>
                                    <input type="checkbox" className="checkbox" value="Fantasy"  onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Drama</span>
                                    <input type="checkbox" className="checkbox" value="Drama"  onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Thriller</span>
                                    <input type="checkbox" className="checkbox" value="Thriller"   onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Horror</span>
                                    <input type="checkbox" className="checkbox" value="Horror"  onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Mystery</span>
                                    <input type="checkbox" className="checkbox" value="Mystery"  onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Comedy</span>
                                    <input type="checkbox" className="checkbox" value="Comedy"  onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Romance</span>
                                    <input type="checkbox" className="checkbox" value="Romance"  onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Family</span>
                                    <input type="checkbox" className="checkbox" value="Family"  onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Documentary</span>
                                    <input type="checkbox" className="checkbox" value="Documentary"   onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Sci-Fi</span>
                                    <input type="checkbox" className="checkbox" value="Sci-Fi"  onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Animation</span>
                                    <input type="checkbox" className="checkbox" value="Animation" onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Biography</span>
                                    <input type="checkbox" className="checkbox" value="Biography" onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">War</span>
                                    <input type="checkbox" className="checkbox" value="War" onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Musical</span>
                                    <input type="checkbox" className="checkbox" value="Musical" onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Crime</span>
                                    <input type="checkbox" className="checkbox" value="Crime" onClick={onClick}/>
                                </label>
                            </div>

                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Western</span>
                                    <input type="checkbox" className="checkbox" value="Western" onClick={onClick}/>
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Adult</span>
                                    <input type="checkbox" className="checkbox" value="Adult" onClick={onClick}/>
                                </label>
                            </div>
                        </li>

                    </ul>

    );
}

export default SideBar;