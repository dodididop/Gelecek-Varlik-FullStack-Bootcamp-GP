import { useState, useEffect } from "react"

function Flat() {
    useEffect(() => {
        // PUT request using axios inside useEffect React hook
        const [flat,setFlat] = useState([]);
        axios.put('http://localhost:5000/api/Flats', flat)
            .then(response => setFlat(response.data.updateFlat));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default Flat
