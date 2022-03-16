import spinner from './assets/load.gif'
function Spinner() {

    return (
        <div className='col-span-5 grid grid-col-1 text-center mx-auto'>
            <img src={spinner} alt="Loading..." className="text-center image-center" width={300}/>
        </div>
    );
}

export default Spinner;