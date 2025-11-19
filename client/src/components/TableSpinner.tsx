

const TableSpinner = () => {
    return (
        <div className="min-w-full my-10 min-h-max justify-center items-center content-center flex">
            <div
                className="text-[#3c0d0d] inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
            </div>
        </div>
    );
}

export default TableSpinner;