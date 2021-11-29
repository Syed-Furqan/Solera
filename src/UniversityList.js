import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './UniversityList.css'

const UniversityList = () => {
    const { country } = useParams();
    const [universities, setUniversities] = useState();

    const URL = `http://universities.hipolabs.com/search?country=${country}`;

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(list => setUniversities(list))
            .catch(err => console.log(err))
    }, [URL]);

    let i = 0;

    return (
        <div className="list">
            <h3>Showing Results for: <span>{country}</span></h3>
                {universities?.map(university => (
                    <div className="list__university" key={i++}>
                        <a href={university.web_pages[0]}>{university.name}</a>
                    </div>
                ))}
        </div>
    );
}

export default UniversityList;