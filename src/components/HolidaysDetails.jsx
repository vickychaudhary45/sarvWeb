import React, { useEffect } from 'react'
import { Typography ,Box,Stack,AppBar, Toolbar,IconButton,Button,Container, TextField,CardContent} from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import '../assets/css/newhd.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { CookiesProvider, useCookies } from 'react-cookie'

import {itemData} from '../data/data'

import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SelectRoom from './utils/SelectRoom';
const borderBackgroundColor = 'rgba(241, 247, 255, 1)'
const alertColor = 'rgba(238, 4, 5, 1)'
const today = new Date()

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }


 function HolidaysDetails(props) {
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  console.log(formattedDate)
  const [value, setValue] = React.useState(dayjs(formattedDate));

  const [open, setOpen] = React.useState(false);
 

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [guest,setGuest] = React.useState(2)
  const [cookie] = useCookies(['room_guest']);

  const viewGuest = (guestObj) =>{
    const guest_counts = guestObj.reduce(
      (acc, current) => {
        acc.adult += current.adult;
        acc.cb += current.cb;
        acc.cb += current.cwb
        return acc;
      },
      { adult: 0, cb: 0 }
    );

    if (guest_counts.cb ===0){
      props.changePrice((props.price*guest_counts.adult),"adult")
      setGuest(`${guest_counts.adult} Adults`)
    }
    else {
      console.log("adultprice", (guest_counts.adult * props.price,"adult"))
      props.changePrice(guest_counts.adult * props.price,"adult")
      setGuest(`${guest_counts.adult} Adults, ${guest_counts.cb} Children`)

    }
  }
  // useEffect(() =>{
  //   let total_adult = cookie.room_guest
  //   viewGuest(total_adult)

  // },[cookie])

  useEffect(() =>{
    if (cookie.room_guest){
      let total_adult =  cookie.room_guest
      console.log("cookie val",total_adult)
      viewGuest(total_adult)
    }
    else{
      let total_adult = [{adult:2,cb:0,cwb:0}]
      viewGuest(total_adult)
    }
   

  },[])
  const handleClose = () => {
    setOpen(false);
  };
  const [tabvalue, setTabValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setTabValue(newValue);}
  return (
    <Container sx={{mb:6}} >

    <Box sx={{mb:3,mt:2}}>
    <Stack>
    <Typography variant='h4' sx={{fontWeight:500,color:'rgba(30, 33, 37, 1)',mb:-1}}>
        
        {props.PackageName}
    </Typography>
    <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap" alignItems='center'>
        <Typography sx={{backgroundColor:borderBackgroundColor, pt:0.5,pb:0.5,pl:2,pr:2,borderRadius:5,color:alertColor,fontWeight:600}}>{props.duration.days}D - {props.duration.night}N </Typography>
        <Toolbar>
        <IconButton><LocationOnIcon /></IconButton>
        <Typography>Manali</Typography>

        </Toolbar>
    </Stack>
    <ImageList
      sx={{ width: '100%', height: 400,overflow:'hidden' }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img className='galleryImg'
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
           
    </Stack>
  </Box>
        <Toolbar sx={{backgroundColor:borderBackgroundColor,boxShadow:1 ,p:1,borderRadius:20,justifyContent:'center',gap:5}}>
          <Typography variant='button'>Travelling Date </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                // label="Departure day"
                format='DD-MM-YYYY'
                value={value}
                onChange={(newValue) => setValue(newValue)}
                sx={{backgroundColor:'white',border:"1px solid rgba(39, 137, 255, 1)", borderRadius:2,outline:0}}
                disablePast
              />
          </LocalizationProvider>
          <Typography variant='button'>Rooms & Guests </Typography>

          <TextField
          inputProps={
            { readOnly: true, }
          }
          id="outlined-required"
          // label="Rooms & Guests"
          defaultValue= "2 Adults "
          value = {guest===2?" 2 Adult":guest}
          sx={{backgroundColor:'white',fontWeight:500,border:"1px solid rgba(39, 137, 255, 1);", borderRadius:2}}
          // style={{ fontWeight: 500 ,}}
          onClick={handleClickOpen}
        />
        <Dialog open={open} onClose={handleClose}>
        <SelectRoom handleGuest = {viewGuest} close = {handleClose} date = {value}/>
      </Dialog>
           
        </Toolbar>
        
        </Container>

 
   
  )
}

export default HolidaysDetails;