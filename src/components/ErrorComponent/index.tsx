interface IError {
    errorCode?: number;
}

const RaiseError:React.FC<IError> = ({errorCode}) => {
    console.info(errorCode)
    return (
        <div className="absolute top-3 border-2 border-l-8 p-2 flex justify-center items-center left-1/2 transform -translate-x-1/2 -translate-u-1/2 z-50 border-red-500 bg-[#00000088] rounded-xl">
            <span className="text-white text-[2rem] tablet-max-w:text-[1rem]">{errorCode}</span>
        </div>
    )
}

export default RaiseError;