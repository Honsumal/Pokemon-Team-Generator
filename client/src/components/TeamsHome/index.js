import React, {useState} from 'react';
import { Box, Button, Modal,Typography } from '@mui/material'

const TeamsHome = ({ teams, title }) => {
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
  const [selectedTeam, setSelectedTeam] = useState(teams[1])
  const [open, setOpen] = useState(false);

  const handleOpen = (team) => {
    setOpen(true)
    setSelectedTeam(team)
  }
  const handleClose = () => {
    setOpen(false)
    setSelectedTeam(teams[1])
  };



  if (!teams.length) {
    return <h3>No teams Yet</h3>;
  } else {
    return (
      <div>
        <h3 className="text-primary">{title}</h3>
        <div className="flex-row justify-space-between my-4">
          {teams &&
            teams.map((team) => (
              <div key={team._id} className="col-12 col-xl-6">
                <div className="card mb-3">
                  <h4 className="card-header bg-light text-light p-2 m-0">
                    <span className="text-white" style={{ fontSize: '1rem' }}>
                      Nickname: {team.nickname}
                    </span>
                    <br></br>
                    <div>
                      <Button variant='contained' onClick={() => handleOpen(team)}>Open Team Sheet</Button>
                    </div>
                    <br></br>
                  </h4>
                </div>
                <Modal
                  open={open}
                  onClose={handleClose}
                >
                  <Box sx={style}>
                    <Typography id="instructions" variant="h6" component="h3">
                      {selectedTeam.nickname}
                    </Typography>
                    {selectedTeam.pokemon.length ? (
                      selectedTeam.pokemon.map((p) => (
                        <div>
                          <Typography>{p.name}</Typography>
                          <Typography>{p.nickname}</Typography>                      
                        </div>
                      ))
                    ): (
                      <h2>Team has no Pokemon!</h2>
                    )}
                  </Box>
                </Modal>                
              </div>
            ))}
        </div>
      </div>
    );
  };
}

export default TeamsHome;
