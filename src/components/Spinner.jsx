import spinner from './assets/load.gif'
function Spinner() {

    return (
        <div className='mx-auto items-center col-span-5'>
            <img src={spinner} alt="Loading..." className="text-center image-center" width={100}/>
        </div>
    );
}

export default Spinner;