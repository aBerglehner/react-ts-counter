import React from 'react';
import { useState } from 'react';

type DataProps = {
    inc?: number;
};

const Counter = ({ inc = 1 }: DataProps) => {
    const [value, setValue] = useState<number>(0);
    const incButton = (): void => {
        setValue(value + inc);
    };
    const decButton = (): void => {
        setValue(value - inc);
    };
    return (
        <div>
            <button className='btn' onClick={incButton}>
                +{inc}
            </button>
            <button className='btn' onClick={decButton}>
                -{inc}
            </button>
            <div>
                <p>{value}</p>
            </div>
        </div>
    );
};

export default Counter;
