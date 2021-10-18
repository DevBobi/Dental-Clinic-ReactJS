import React, { useEffect, useState } from 'react';

const useData = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return {
        services,
        setServices
    }

};

export default useData;