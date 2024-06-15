// src/App.js
import React, { useState, useEffect } from 'react';

const Creater = () => {
    const [colors, setColors] = useState(['Blue', 'Red']);
    const [sizes, setSizes] = useState(['Small', 'Medium']);
    const [variants, setVariants] = useState([
        { name: 'Small | Blue', price: '345.30', available: '40' },
        { name: 'Small | Red', price: '345.30', available: '20' },
        { name: 'Medium | Blue', price: '23.00', available: '20' },
        { name: 'Medium | Red', price: '45.00', available: '20' },
    ]);

    const [color, setColor] = useState('');
    const [size, setSize] = useState('');

    const addColor = () => {
        if (color in colors) {  
            alert('Color already exists');
            return;
        } 
        else if (color) {
            setColors([...colors, color]);
            setColor('');
        }
    };

    const addSize = () => {
        if (size) {
            setSizes([...sizes, size]);
            setSize('');
        }
    };

    // seEffect to update the variants when colors or sizes change
    useEffect(() => {
        const newVariants = [];
        sizes.forEach((size) => {
            colors.forEach((color) => {
                newVariants.push({
                    name: `${size} | ${color}`,
                    price: '0.00',
                    available: '0',
                });
            });
        });
        setVariants(newVariants);
    }, [colors, sizes]);


    useEffect(() => {
        const newVariants = [];
        sizes.forEach((size) => {
            colors.forEach((color) => {
                newVariants.push({
                    name: `${size} | ${color}`,
                    price: '0.00',
                    available: '0',
                });
            });
        });
        setVariants(newVariants);
    }, [colors, sizes]);

    const handleSave = () => {
        console.log('Variants saved:', variants);
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Variants</h3>
                <div className="p-4 mb-4">
                    <h4 className="text-md font-semibold mb-2">COLOR</h4>
                    <div className="flex items-center mb-2">
                        {colors.map((color, index) => (
                            <button key={index} className={`bg-${color.toLocaleLowerCase()}-300 px-4 py-2 rounded mr-2`}>
                                {color}
                            </button>
                        ))}
                        <input
                            className="border p-2 rounded mr-2"
                            type="text"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            placeholder="Add color"
                        />
                        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={addColor}>
                            Add color
                        </button>
                    </div>
                </div>
                <div className="p-4 mb-4">
                    <h4 className="text-md font-semibold mb-2">SIZE</h4>
                    <div className="flex items-center mb-2">
                    {sizes.map((size, index) => (
                            <button key={index} className={`bg-slate-300 px-4 py-2 rounded mr-2`}>
                                {size}
                            </button>
                        ))}
                        <input
                            className="border p-2 rounded mr-2"
                            type="text"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            placeholder="Add size"
                        />
                        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={addSize}>
                            Add size
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="mb-4">
                    <label className="mr-2">Group by:</label>
                    <select className="border p-2 rounded">
                        <option value="size">Size</option>
                        <option value="color">Color</option>
                    </select>
                </div>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-gray-200">Variants</th>
                            <th className="py-2 px-4 bg-gray-200">Price</th>
                            <th className="py-2 px-4 bg-gray-200">Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {variants.map((variant, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{variant.name}</td>
                                <td className="border px-4 py-2">
                                    <input className="border p-2 rounded" type="text" defaultValue={variant.price} />
                                </td>
                                <td className="border px-4 py-2">
                                    <input className="border p-2 rounded" type="text" defaultValue={variant.available} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="mt-12 bg-gray-800 text-white px-4 py-2 rounded" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default Creater;
