import React from 'react';
import { useState } from 'react';

type DataProps = {
    inc?: number;
};

const Counter = ({ inc = 1 }: DataProps) => {
    const [value, setValue] = useState<number>(0);
    const [valueChanged, setValueChanged] = useState<boolean>(false);
    const incButton = (): void => {
        setValue(value + inc);
        setValueChanged(true);
    };
    const decButton = (): void => {
        setValue(value - inc);
        setValueChanged(true);
    };
    const resetButton = (): void => {
        setValue(0);
        setValueChanged(false);
    };
    return (
        <div>
            <button className='btn' onClick={incButton}>
                +{inc}
            </button>
            <button className='btn' onClick={decButton}>
                -{inc}
            </button>
            {valueChanged && (
                <button className='btn' onClick={resetButton}>
                    Reset
                </button>
            )}
            <div>
                <p>{value}</p>
            </div>
        </div>
    );
};

export default Counter;
