// src/components/ProductTable.js

import React from 'react';

const Selector = () => {
    return (
        <div className="p-4">
            <table className="min-w-full border-collapse block md:table">
                <thead className="block md:table-header-group">
                    <tr className="border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
                        <th className="bg-black text-white p-2 text-left block md:table-cell">Size</th>
                        <th className="bg-black text-white p-2 text-left block md:table-cell">Color</th>
                        <th className="bg-black text-white p-2 text-left block md:table-cell">Price</th>
                        <th className="bg-black text-white p-2 text-left block md:table-cell">Available</th>
                    </tr>
                </thead>
                <tbody className="block md:table-row-group">
                    <tr className="bg-gray-100 border border-gray-300 md:border-none block md:table-row">
                        <td className="p-2 text-left block md:table-cell">Small</td>
                        <td className="p-2 text-left block md:table-cell">Red</td>
                        <td className="p-2 text-left block md:table-cell">345</td>
                        <td className="p-2 text-left block md:table-cell">20</td>
                    </tr>
                    <tr className="bg-white border border-gray-300 md:border-none block md:table-row">
                        <td className="p-2 text-left block md:table-cell">Small</td>
                        <td className="p-2 text-left block md:table-cell">Blue</td>
                        <td className="p-2 text-left block md:table-cell">345</td>
                        <td className="p-2 text-left block md:table-cell">20</td>
                    </tr>
                    <tr className="bg-gray-100 border border-gray-300 md:border-none block md:table-row">
                        <td className="p-2 text-left block md:table-cell">Medium</td>
                        <td className="p-2 text-left block md:table-cell">Red</td>
                        <td className="p-2 text-left block md:table-cell">45</td>
                        <td className="p-2 text-left block md:table-cell">20</td>
                    </tr>
                    <tr className="bg-white border border-gray-300 md:border-none block md:table-row">
                        <td className="p-2 text-left block md:table-cell">Medium</td>
                        <td className="p-2 text-left block md:table-cell">Blue</td>
                        <td className="p-2 text-left block md:table-cell">23</td>
                        <td className="p-2 text-left block md:table-cell">20</td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-4">
                <div className="flex justify-between">
                    <span className="font-semibold">Available:</span>
                    <span>80</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Price range:</span>
                    <span>23-345</span>
                </div>
            </div>
        </div>
    );
};

export default Selector;
