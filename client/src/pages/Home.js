import React, { useState } from 'react';
import TeamsHome from '../components/TeamsHome';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_GETALLTEAMS } from '../utils/queries';
import { MUTATION_CREATETEAM } from '../utils/mutations'; 
import { Box, Button, Modal, TextField, Typography } from '@mui/material'

const Home = () => {
  const { loading, data } = useQuery(QUERY_GETALLTEAMS);
  const teams = data?.getTeams || [];
  //console.log(teams)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true); 
  const handleClose = () => setOpen(false);

  const[input, setInput] = useState('');

  const [newTeam, { error }] = useMutation(MUTATION_CREATETEAM)

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(input)
    try {
      const {data} = await newTeam({
        variables: {nickname:input}
      });
    } catch (err) {
      console.error(err);
      console.log(error, 'Wong Sum Ting')
    }
    window.location.reload()
  }

  const handleInput = (event) => {
    event.preventDefault()
    setInput(event.target.value)
  }


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TeamsHome
              teams={teams}
              title="Here are you currently saved teams..."
            />
          )}
        </div>
        <Modal
          open = {open}
          onClose = {handleClose}
          aria-labelledby="newteammaker"
          aria-describedby="new team button"
        >
          <Box sx={style}>
              <Typography variant="h6" component="h3">
                Enter New Team Nickname:
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField sx={{input:{color: '#003049', width: 300}}} onInput={handleInput} />
                <Button type='submit' sx={{marginTop:1}} variant='contained'>Enter New Team Nickname</Button>
              </form>
          </Box>
        </Modal>
      </div>
      <div className='flex-row justify-center my-3'>
          <Box>
            <Button variant="contained" onClick={handleOpen}>New Team</Button>
          </Box>
      </div>

    </main>
  );
};

export default Home;
