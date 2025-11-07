import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"

export default function InfoBox({info}) {

    const HOT_URL = "https://images.unsplash.com/photo-1728717832210-311f016165cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bW1lciUyMGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500";
    const COLD_URL ="https://images.unsplash.com/photo-1706974587457-16ee29d957b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500";
    const RAIN_URL ="https://images.unsplash.com/photo-1610901342861-e472a8c248b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW4lMjBjaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500";
    
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
                    }
                    title={info.city}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}&nbsp;{
                        info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                       <p>Temperature : {info.temp}&deg;C</p>
                       <p>Humidity : {info.humidity}</p>
                       <p>Min Temp : {info.tempMin}</p>
                       <p>Max Temp : {info.tempMax}</p>
                       <p>The weather can be described as <b>{info.weather}</b> & feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}