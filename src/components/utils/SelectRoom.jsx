import { Container, Stack, Typography, Box, CardContent } from '@mui/material'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Cookies  from 'js-cookie';
import Swal from 'sweetalert2';
import { CookiesProvider, useCookies } from 'react-cookie'

export default function SelectRoom(props) {
    const [rooms, setRooms] = React.useState([{ adult: 2, cb: 0, cwb: 0 }]); 
    const [roomIdCounter, setRoomIdCounter] = React.useState(1);
    const [cookies, setCookie] = useCookies(false)

    const addRoom = () => {
        setRooms([...rooms, { adult: 2, cb: 0, cwb: 0 }]);
        setRoomIdCounter(roomIdCounter + 1);
    }
    const applyFunc =(props) =>{
      props.handleGuest(rooms);
      setCookie("room_guest", JSON.stringify(rooms), {
        expires: new Date(Date.now() + 86400000), // 1 day
        path: "/",
      });
      props.close()
    }
    const removeRoom = (index) => {
        const updatedRooms = [...rooms];
        updatedRooms.splice(index, 1);
        setRooms(updatedRooms);
      }

      const incrementValue = (index, field) => {
        const updatedRooms = [...rooms];
        updatedRooms[index][field]++;
        if ((updatedRooms[index].adult === 1 && updatedRooms[index].cb>0) || (updatedRooms[index].adult === 1 && updatedRooms[index].cwb>0)) {
          Swal.fire({
            title: 'Custom Alert',
            text: 'With 1 adults no children allowed.',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              container: 'my-sweetalert-container',
            },
          });
              updatedRooms[index].cb = 0;
              updatedRooms[index].cwb = 0;
        }
        if ((updatedRooms[index].adult === 2 && updatedRooms[index].cb>1) || (updatedRooms[index].adult === 2 && updatedRooms[index].cwb>1)) {
          Swal.fire({
            title: 'Custom Alert',
            text: 'With 2 adults 1 children with bed and 1 without bed allowed.',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              container: 'my-sweetalert-container',
            },
          });
              updatedRooms[index].cb = 0;
              updatedRooms[index].cwb = 0;
        }
        if ((updatedRooms[index].adult === 3 && updatedRooms[index].cb>0) || (updatedRooms[index].adult === 3 && updatedRooms[index].cwb>1)) {
          Swal.fire({
            title: 'Custom Alert',
            text: 'With 3 adults 1 children without bed allowed.',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              container: 'my-sweetalert-container',
            },
          });
              updatedRooms[index].cb = 0;
              updatedRooms[index].cwb = 0;
        }
        if (updatedRooms[index].adult > 3 ) {
          Swal.fire({
            title: 'Custom Alert',
            text: 'Only 3 adult allowed in a room.',
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              container: 'my-sweetalert-container',
            },
          });
              updatedRooms[index].adult = 3
              updatedRooms[index].cb = 0;
              updatedRooms[index].cwb = 0;
        }
          
        setRooms(updatedRooms);
      }
    
      const decrementValue = (index, field) => {
        if (rooms[index][field] > 0) {
          const updatedRooms = [...rooms];
          updatedRooms[index][field]--;
          if ((updatedRooms[index].adult === 1 && updatedRooms[index].cb>0) || (updatedRooms[index].adult === 1 && updatedRooms[index].cwb>0)) {
            Swal.fire({
              title: 'Custom Alert',
              text: 'With 1 adults no children allowed.',
              icon: 'error',
              confirmButtonText: 'OK',
              customClass: {
                container: 'my-sweetalert-container',
              },
            });
            updatedRooms[index].cb = 0;
            updatedRooms[index].cwb = 0;
      }

      if ((updatedRooms[index].adult === 2 && updatedRooms[index].cb>1) || (updatedRooms[index].adult === 2 && updatedRooms[index].cwb>1)) {
        Swal.fire({
          title: 'Custom Alert',
          text: 'With 2 adults 1 children with bed and 1 without bed allowed.',
          icon: 'error',
          confirmButtonText: 'OK',
          customClass: {
            container: 'my-sweetalert-container',
          },
        });
            updatedRooms[index].cb = 1;
            updatedRooms[index].cwb = 1;
      }
      if ((updatedRooms[index].adult === 3 && updatedRooms[index].cb>0) || (updatedRooms[index].adult === 3 && updatedRooms[index].cwb>1)) {
        Swal.fire({
          title: 'Custom Alert',
          text: 'With 3 adults 1 children without bed allowed.',
          icon: 'error',
          confirmButtonText: 'OK',
          customClass: {
            container: 'my-sweetalert-container',
          },
        });
            updatedRooms[index].cb = 0;
            updatedRooms[index].cwb = 0;
      }
      if (updatedRooms[index].adult > 3 ) {
        Swal.fire({
          title: 'Custom Alert',
          text: 'Only 3 adult allowed in a room.',
          icon: 'error',
          confirmButtonText: 'OK',
          customClass: {
            container: 'my-sweetalert-container',
          },
        });
            updatedRooms[index].adult = 3
            updatedRooms[index].cb = 0;
            updatedRooms[index].cwb = 0;
      }
          setRooms(updatedRooms);
        }
      }
    return (

    <Container sx={{border:"1px solid blue"}}>
        {rooms.map((room, index) => (
        <Stack sx={{borderBottom: "1px solid rgba(230, 230, 230, 1)",p:1,maxWidth:'80vw'}} key={index}>
            <Typography variant='caption' gutterBottom sx={{border:"1px solid rgba(39, 137, 255, 1)",width:'fit-content',p:1,fontWeight:'600',color:"rgba(39, 137, 255, 1)"}}>
                ROOM {index + 1}
            </Typography>
            <Stack direction="row" useFlexGap flexWrap="wrap" maxWidth='100%'>
                <CardContent>
                    <Typography sx={{fontWeight:800,pl:1.5,color:'rgba(30, 33, 37, 5)'}}>Adults <div style={{fontSize:'.8rem',fontWeight:200}}>+12 Years</div></Typography>
                   
                    <Box >
                    <ButtonGroup variant="text" aria-label="text button group" sx={{ml:0}}>
                    <Button onClick={() => decrementValue(index, 'adult')}><RemoveIcon /></Button>
                    <Button sx={{color:'black'}}>{room.adult}</Button>
                    <Button onClick={() => incrementValue(index, 'adult')}><AddIcon /></Button>
                    </ButtonGroup>

                    </Box>
                </CardContent>
                <CardContent>
                    <Typography sx={{fontWeight:800,pl:1.5,color:'rgba(30, 33, 37, 5)'}}>Child With Bed <div style={{fontSize:'.8rem',fontWeight:200}}>-12 Years</div></Typography>
               
                    <Box
                        >
                    <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={() => decrementValue(index, 'cb')}><RemoveIcon /></Button>
                    <Button sx={{color:'black'}}>{room.cb}</Button>
                    <Button onClick={() => incrementValue(index, 'cb')}><AddIcon /></Button>
                    
                    
                    </ButtonGroup>
                    </Box>
                </CardContent>
                <CardContent>
                    <Typography sx={{fontWeight:800,pl:1.5,color:'rgba(30, 33, 37, 5)'}}>Child Without Bed <div style={{fontSize:'.8rem',fontWeight:200}}>-12 Years</div></Typography>
                    <Box>
                    <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={() => decrementValue(index, 'cwb')}><RemoveIcon /></Button>
                    <Button sx={{color:'black'}}>{room.cwb}</Button>
                    <Button onClick={() => incrementValue(index, 'cwb')}><AddIcon /></Button>
                    </ButtonGroup>
                    </Box>     
                </CardContent>
                <CardContent>
                <Button variant="outlined" color='error' onClick={() => removeRoom(index)}>REMOVE</Button>
                     
                </CardContent>
                
        </Stack>
        
        </Stack>))}
        <Stack spacing={2} direction="row" justifyContent="right" sx={{mt:1,mb:1}}>
            <Button variant="contained" onClick={addRoom}>ADD MORE ROOMS</Button>
            <Button variant="contained" onClick={() =>applyFunc(props)}>APPLY</Button>
            {/* Cookies.set("room_guest",JSON.stringify(rooms),{ expires: 3 ,path:"/"}), */}
        </Stack>
    </Container>
  )
}
