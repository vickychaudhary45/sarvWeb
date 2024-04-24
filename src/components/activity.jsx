import { useEffect, useState } from "react";
import car from '../../public/data/car.png'
import { CardContent,Typography,CardMedia,Button,Grid,Box,Slider,Stack, Toolbar} from "@mui/material";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CarDrawer from "./utils/car_drawer";
import Hotel_Drawer from "./utils/hotel_drawer";
const ActCard = ({url,type,id,changeprice}) =>{
    console.log(id)
    const [cardData,setcardData] = useState(false)
    const [hotelChange, setHotelChange] = useState(false)
    const [roomChange, setRoomChange]=useState(false)
    const [roomCount, setRoomCount] = useState(1)
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };
    const fetchApi = async() =>{
        const response = await fetch(url)
        const result =  await response.json()
        setcardData(result)
    }
    // console.log([...Array(roomCount).keys()])
    [...Array(roomCount).keys()].map((value) =>console.log(value))

    useEffect(() =>{
        
            fetchApi()
      
        
    },[url])


    if (!cardData){

    }
    else if (type ==="hotel"){
      

        return (
          <div className="activity_section">
            <div className="single-activity">

                <div className="activity-image">
                  <img src={cardData.imgs[0].path} alt="" />
                </div>
                <div className="activity-info">
                  <p id="type">HOTEL</p>
                  <h4 className="activity-name">
                  {cardData.hotelName}
                  </h4>
                  <p className="activity-place">
                    {cardData.city}
                  </p>
                  <div className="activity-target-place">
             
                  </div>
                  <div className="activity-timesheet">
                 
                  </div>
                  
                </div>
                <div className="Hotel_chnage">
                  <Hotel_Drawer id = {id} changeprice = {changeprice}/>
                {/* <Typography sx={{fontSize:".8rem",fontWeight:500,cursor:'pointer'}} align="right" color="primary" onClick={() => {setHotelChange(!hotelChange)}}>Change</Typography> */}
                {/* { hotelChange ? <Hotel_Drawer />:""} */}
                {/* <Grid component={'div'} className="update-card" container >
                <Grid item xs={6}>
                  <CardContent> 
                    <CardMedia component={'img'} image={cardData.imgs[0].path} alt="hotel" />
                    <Typography variant="subtitle2" align="center" color={'error'} gutterBottom>4 Star Hotel</Typography>
                   
                    <Button variant="outlined" fullWidth sx={{ borderRadius: 12.5 ,fontSize:".7rem",fontWeight:500}}size="small" onClick={() =>setRoomChange(!roomChange)}>Choose Room</Button>
                    
                  </CardContent>
                  </Grid>
                  <Grid item xs={6}>
                  <CardContent>
                    <CardMedia component={'img'} image={cardData.imgs[0].path} alt="hotel" />
                    <Typography variant="subtitle2" align="center" color={'error'} gutterBottom>4 Star Hotel</Typography>
                    <Button  variant="outlined" fullWidth sx={{ borderRadius: 12.5 ,fontSize:".7rem",fontWeight:500}} size="small" onClick={() =>setRoomChange(!roomChange)}>Choose Room</Button>
                    
                  </CardContent>
                  </Grid>
                  <Grid item xs={6}>
                  <CardContent>
                    <CardMedia component={'img'}   image={cardData.imgs[0].path} alt="hotel" />
                    <Typography variant="subtitle2" color={'error'} align="center"  gutterBottom>4 Star Hotel</Typography>
                    <Button  variant="outlined" fullWidth sx={{ borderRadius: 12.5 ,fontSize:".7rem",fontWeight:500}} size="small" onClick={() =>setRoomChange(!roomChange)}>Choose Room</Button>
                    
                  </CardContent>
                  </Grid>
                  <Grid item xs={6}>
                  <CardContent>
                    <CardMedia component={'img'}   image={cardData.imgs[0].path} alt="hotel" />
                    <Typography variant="subtitle2" color={'error'} align="center"  gutterBottom>4 Star Hotel</Typography>
                    <Button  variant="outlined" fullWidth sx={{ borderRadius: 12.5 ,fontSize:".7rem",fontWeight:500}} size="small" onClick={() =>setRoomChange(!roomChange)}>Choose Room</Button>
                    
                  </CardContent>
                  </Grid>
                </Grid>
                 */}
                 
                </div>
              </div>
              
              <div className="room-info">
              <div className="room-details">
              <Typography sx={{fontSize:".8rem",fontWeight:500,cursor:'pointer'}} align="right" color="primary" onClick={() => setRoomChange(!roomChange)}>Change Room</Typography>
                <p id="title">Deluxe</p>
                <p className="amenities">Amenities:</p>
                <p className="a_info">Breakfast | Wifi | Loundry | TV | AC</p>
                </div>
                {/* { roomChange &&

                <Grid component={'div'} className="update-card" container >
                <Grid item xs={3}>
                  <CardContent> 
                    <CardMedia component={'img'} image={cardData.imgs[0].path} alt="hotel" />
                    <Typography variant="subtitle2" align="center" color={'error'} gutterBottom>Standard</Typography>
                    <p className="amenities">Amenities:</p>
                    <Typography variant="body1" sx={{fontSize:".8rem"}} >Breakfast | Wifi | TV | AC</Typography>
                  { [...Array(roomCount).keys()].map((value) => (
                   <Box>
                    <Typography variant="body2" color="error">Room {value +1}</Typography>
                    <Typography variant="caption" color="primary">Adults (12+ years)</Typography>
                    <Button fullWidth>
                        <Slider
                            aria-label="Counts"
                            defaultValue={0}
                            getAriaValueText=""
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={0}
                            max={3}
                          />
                          </Button>
                    <Stack direction={'row'} >
                      <div className="childwithBed">
                      <Typography variant="caption" color="primary">ChildWith Bed</Typography>
                    <Button fullWidth>
                        <Slider
                            aria-label="Counts"
                            defaultValue={0}
                            getAriaValueText=""
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={0}
                            max={2}
                          />
                          </Button>
                      </div>
                      <div className="childwithBed">
                      <Typography variant="caption" color="primary">ChildWithout Bed</Typography>
                    <Button fullWidth>
                        <Slider
                            aria-label="Counts"
                            defaultValue={0}
                            getAriaValueText=""
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={0}
                            max={2}
                          />
                          </Button>
                      </div>
                    

                    </Stack>
                    </Box>))}
                    <Toolbar>
                      <Button variant="contained" onClick={() =>setRoomCount(roomCount+1)}>Add Rooms</Button>
                    </Toolbar>
                    <Button variant="outlined" fullWidth sx={{ borderRadius: 12.5 ,fontSize:".7rem",margin:"5px", fontWeight:600}}size="small">Pay Rs.2000 Extra</Button>
                    
                  </CardContent>
                  </Grid>
                </Grid>} */}
              </div>

              

              </div>
        )
       
    }
    else if (type ==="activity"){
        return (
            <div className="single-activity">
            <div className="activity-image">
              <img src={cardData.img.path} alt="" />
            </div>
            <div className="activity-info">
              <h4 className="activity-name">
              {cardData.activityName}
              </h4>
              <p className="activity-place">
                {cardData.activityPlace}
              </p>
              <div className="activity-target-place">
                {cardData.targetPlaces.map(place =>(<li>{place}</li>))}
                
              </div>
              <div className="activity-timesheet">
              <div className="activity-duration">
                <p id="title">Duration</p>
                <p>{cardData.duration} Hour</p>
              </div>
              <div className="activity-placeCover">
                <p id="title">Place Cover </p>
                <p>{cardData.placeCover} </p>
              </div>
              </div>
              
            </div>
          </div>
        )
    }
    else if (type ==="car"){
        return (
            <div className="single-activity">
                <div className="activity-image">
                  <img src={car} alt="" />
                </div>
                <div className="activity-info">
                  <h4 className="activity-name">
                  Private Transfer: {cardData.vehicleType}
                  </h4>
                  <p className="activity-place">
                  {cardData.modelName} or similar
                  </p>
                  <div className="activity-target-place">
                   
                  </div>
                  <div className="activity-timesheet">
                  <div className="activity-duration">
                    <p id="title">Facilities</p>
                    <p> {cardData.seatLimit} seater | 2 Luggage Bags | First Aid</p>
                  </div>
                 
                  </div>
                  
                </div>
                <div className="Hotel_chnage">
                  <CarDrawer id = {id} changeprice = {changeprice}/>
                  {/* <Typography sx={{fontSize:".8rem",fontWeight:500,cursor:'pointer'}} align="right" color="primary" onClick={() => setHotelChange(!hotelChange)}>Change</Typography>
                  { hotelChange ?
                  <Grid component={'div'} className="update-card" container >
                  <Grid item xs={6}>
                    <CardContent> 
                      <CardMedia component={'img'} image={car} alt="car" />
                      <Typography variant="subtitle2" align="center" color={'error'} gutterBottom>4 Star Hotel</Typography>
                      <Button variant="outlined" fullWidth sx={{ borderRadius: 12.5 ,fontSize:".7rem",fontWeight:500}}size="small">Pay Rs.2000 Extra</Button>
                      
                    </CardContent>
                    </Grid>
                    <Grid item xs={6}>
                    <CardContent>
                      <CardMedia component={'img'} image={car} alt="car" />
                      <Typography variant="subtitle2" align="center" color={'error'} gutterBottom>4 Star Hotel</Typography>
                      <Button  variant="outlined" fullWidth sx={{ borderRadius: 12.5 ,fontSize:".7rem",fontWeight:500}} size="small">Pay Rs.2000 Extra</Button>
                      
                    </CardContent>
                    </Grid>
                    <Grid item xs={6}>
                    <CardContent>
                      <CardMedia component={'img'}   image={car} alt="car" />
                      <Typography variant="subtitle2" color={'error'} align="center"  gutterBottom>4 Star Hotel</Typography>
                      <Button  variant="outlined" fullWidth sx={{ borderRadius: 12.5 ,fontSize:".7rem",fontWeight:500}} size="small">Pay Rs.2000 Extra</Button>
                      
                    </CardContent>
                    </Grid>
                    <Grid item xs={6}>
                    <CardContent>
                      <CardMedia component={'img'}   image={car} alt="car" />
                      <Typography variant="subtitle2" color={'error'} align="center"  gutterBottom>4 Star Hotel</Typography>
                      <Button  variant="outlined" fullWidth sx={{ borderRadius: 12.5 ,fontSize:".7rem",fontWeight:500}} size="small">Pay Rs.2000 Extra</Button>
                      
                    </CardContent>
                    </Grid>
                  </Grid>:"" } */}
                  
                   
                  </div>
              </div>
        )
    }
    return null

}

export default  ActCard;