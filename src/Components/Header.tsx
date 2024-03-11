import React from "react";

const Header = () => {
    return (
        <>
             <div className="h-full w-full flex items-center justify-center flex-col ">
                <div className="mb-8 ">
                    <h1 className="text-3xl font-bold">Contact Manager</h1>
                </div>
                <div className=" flex items-center border justify-center w-1/2 ">
                    <form >
                        <div className="m-4">
                            <label className="me-1 text-gray-600">Name:</label>
                            <input type="text" id="name" name="name" className=" p-2 border border-gray-300 rounded" />
                        </div>

                        <div className="m-4">
                            <label className="me-2 text-gray-600">Email:</label>
                            <input type="email" id="email" name="email" className=" p-2 border border-gray-300 rounded" />
                        </div>

                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                    </form>
                </div>
            </div> 
        </>
    );
}

export default Header;