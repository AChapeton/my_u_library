import { useState, useEffect } from "react"

const useCurrentYear = () =>{
    const [currentYear, setCurrentYear] = useState(0);

    useEffect(() => {
        const date = new Date()
        let year = date.getFullYear();
        setCurrentYear(year)
    }, [])

    return {currentYear}
}

export default useCurrentYear