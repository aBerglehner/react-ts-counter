import React from 'react';
import Counter from './components/Counter/Counter';

function App() {
    return (
        <>
            <Counter />
            <Counter inc={5} />
            <Counter inc={10} />
        </>
    );
}

export default App;
