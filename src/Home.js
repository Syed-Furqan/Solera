import { useState } from "react";
import { useHistory } from "react-router";
import './Home.css';

const Home = () => {
    const countries = ['Australia', 'Austria', 'Argentina', 'Belgium', 'Brazil', 'Canada', 'Colombia', 'China', 'Denmark', 'Egypt', 
                       'France', 'Germany', 'Greece', 'Hungary', 'India', 'Israel', 'Japan', 'Libya', 'Mexico', 'North Korea', 'Norway', 
                       'Pakistan', 'Saudi Arabia', 'South Africa', 'Turkey', 'United Stated', 'United Kingdom', 'Zimbabwe'];

    const history = useHistory();
    const [country, setCountry] = useState();

    const submit = (e) => {
        e.preventDefault();

        history.push(`list/${country}`);
    }

    return (
        <div className="home">
            <img alt="" src='https://3.bp.blogspot.com/-BupoLyFwVDM/WXTi2uCtcRI/AAAAAAAAlZg/rGq7-Jod84Ie5GrTwjZY4ZPJ94BcSt63ACLcBGAs/s1600/princeton-university-campus-1.jpg'/>
            <div className="home__form">
                <form onSubmit={submit}>
                    <select onChange={(e) => setCountry(e.target.value)}>
                        <option>Select a Country</option>
                        {countries.map(country => (
                            <option key={country}>{country}</option>
                        ))}
                    </select>
                    <button>Search</button>
                </form>
            </div>
        </div>

    );
}

export default Home;