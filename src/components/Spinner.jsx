import spinner from './assets/load.gif'
function Spinner() {

    return (
        <div className='w-100 mt-50'>
            <img src={spinner} alt="Loading..." className="text-center mx-auto" width={100}/>
        </div>
    );
}

export default Spinner;