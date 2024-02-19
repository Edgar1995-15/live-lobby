import { errorMessage } from "../../utils/errors/errors";
import { useEffect, useState } from "react";

interface IError {
    errorCode?: number;
}

const RaiseError: React.FC<IError> = ({ errorCode }) => {
    const [displayError, setDisplayError] = useState<boolean>(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDisplayError(false);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            {displayError &&
                <div className="absolute top-3 border-2 border-l-8 p-2 flex justify-center items-center left-1/2 transform -translate-x-1/2 -translate-u-1/2 z-50 border-red-500 bg-[#00000088] rounded-xl">
                    <span className="text-white text-[2rem] tablet-max-w:text-[1rem]">{errorMessage(errorCode)}</span>
                </div>
            }
        </>
    )
}

export default RaiseError;
