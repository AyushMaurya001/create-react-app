

export default function Navbar(){

    return (
        <div>
            <div className=" p-4 w-full flex justify-between items-center">
                <div className=" mx-10 flex justify-center items-center">
                    <svg className=" h-10 mx-2 fill-baseColorDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.0049 6.99979H23.0049V16.9998H22.0049V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V6.99979ZM20.0049 16.9998H14.0049C11.2435 16.9998 9.00488 14.7612 9.00488 11.9998C9.00488 9.23836 11.2435 6.99979 14.0049 6.99979H20.0049V4.99979H4.00488V18.9998H20.0049V16.9998ZM21.0049 14.9998V8.99979H14.0049C12.348 8.99979 11.0049 10.3429 11.0049 11.9998C11.0049 13.6566 12.348 14.9998 14.0049 14.9998H21.0049ZM14.0049 10.9998H17.0049V12.9998H14.0049V10.9998Z"></path></svg>
                    <p className=" font-bold text-fontColorDark text-2xl cursor-default">Wallet</p>
                </div>
                <div className=" mx-10 flex justify-center items-center">
                    <p className=" px-4 font-Inter text-lg font-medium text-fontColorDark">
                        Name
                    </p>
                    <div className=" w-10 h-10 bg-yellow-500 rounded-full flex justify-center items-center">
                        A
                    </div>
                </div>
            </div>
            <div className=" w-full border border-b-baseColorLight "></div>
        </div>
    )

}