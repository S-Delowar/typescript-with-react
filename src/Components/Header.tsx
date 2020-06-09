import React, { useState } from 'react';

interface HeaderProps {
    buttonText?: string;
}

interface Movies {
    title: string;
    date: string;
    rating: string;
    description: string;
}
const Header = ({buttonText}: HeaderProps) => {
    
    const [count, setCount] = useState(0) 

    const [movies, setMovies] = useState<Movies | null>(null)

    return ( 
        <div>
            <h1>Header</h1>
            <h4>Count: {count} </h4>
    <button onClick={()=>setCount(count+1)}>{buttonText || "click the button"}</button>
        </div>
    );
};

export default Header;