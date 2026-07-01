import { useState, useEffect } from 'react';
import { products } from "../data/products" 

export function useHoodies() { 
    const [hoodies, setHoodies] = useState(() => { 
        const result = {};
        products.forEach(product => {
            const arr = localStorage.getItem("Hoodies_" + product.size);
            result[product.size] = arr ? JSON.parse(arr) : [];
        }); 
        return result;
    });

    useEffect(() => {
        Object.keys(hoodies).forEach(size => {
        localStorage.setItem("Hoodies_" + size, JSON.stringify(hoodies[size]));
        }); }, [hoodies]);

    const addOrDelHoodie = (size, action) => {
        const oldArray = hoodies[size];
        let newArray;

        if (action === 'add') {
            const newHoodie = { 
                color: 'цвет не выбран',
                measurements: ['0','0','0','0','0','0','0','0','0'],
                stripes: '0',
                id: Date.now().toString()     
            };
            newArray = [...oldArray, newHoodie];
        } else {
            newArray = oldArray.length > 0 ? oldArray.slice(0, -1) : oldArray;
        }

        setHoodies(prev => ({ ...prev, [size]: newArray }));
    };

    const delHoodieById = (size, id) => {
        const oldArray = hoodies[size];
        const newArray = oldArray.filter(hoodie => hoodie.id !== id);

        setHoodies(prev => ({ ...prev, [size]: newArray }));
    }

    const changeColorById = (size, id, newColor) => {
        const oldArray = hoodies[size];
        const newArray = oldArray.map(hoodie => 
            hoodie.id === id 
            ? { ...hoodie, color: newColor }  // ← Новый объект с новым color
            : hoodie  // ← Старый объект (не меняем)
        );

        setHoodies(prev => ({ ...prev, [size]: newArray }));
    }

    const changeMeasurementsById = (size, id, newMeasurements) => {
        const oldArray = hoodies[size];
        const newArray = oldArray.map(hoodie => 
            hoodie.id === id 
            ? { ...hoodie, measurements: newMeasurements } 
            : hoodie
        );

        setHoodies(prev => ({ ...prev, [size]: newArray }));
    }

    const changeStripesById = (size, id, newStripes) => {
        const oldArray = hoodies[size];
        const newArray = oldArray.map(hoodie => 
            hoodie.id === id 
            ? { ...hoodie, stripes: newStripes }  // ← Новый объект с новым color
            : hoodie  // ← Старый объект (не меняем)
        );

        setHoodies(prev => ({ ...prev, [size]: newArray }));
    }

    return {
        hoodies,
        addOrDelHoodie,
        delHoodieById,
        changeColorById,
        changeMeasurementsById,
        changeStripesById,
    }; 
}

