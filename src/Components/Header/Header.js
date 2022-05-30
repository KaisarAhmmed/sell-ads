import React from "react";

const Header = () => {
    return (
        <div className="py-4 container mx-auto flex justify-start items-center">
            <div className="w-3/12">
                <h1 className="text-xl font-bold uppercase">Logo</h1>
            </div>
            <div className="w-9/12 flex justify-end items-center">Menu</div>
        </div>
    );
};

export default Header;
