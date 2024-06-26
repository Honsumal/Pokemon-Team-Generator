import React, {useState} from "react";
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardContent, CardActions, Collapse, IconButton, Typography, Box, Modal, Button } from '@mui/material'
import { BsChevronDown } from 'react-icons/bs';
import ch from "../../../utils/ch";
import PokeCard from "../PokeCard";
import AddPokemon2Team from "../AddPokemon2Team";
import EditTeamName from "../EditTeamName";
import DeleteConfirmation from "../DeleteConfirmation";
import { useMutation } from "@apollo/client";
import { MUTATION_REMOVEPOKEMONFROMTEAM } from "../../../utils/mutations";

export default function TeamCard (team) {
    const style = {
        width: 240,
        bgcolor: "#eae2b7",
        border: '1px solid #003049',
        boxShadow: 24,
    };

    const styleModal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: '#003049',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
      };

    const styleModal2 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1200,
        bgcolor: '#003049',
        border: '2px solid #000',
        boxShadow: 24,
        maxHeight: 600,
        overflowY: 'auto',
        p: 4
      };
    

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));

    const [exp, setExp] = useState(false);
    const handleExpClick = () => setExp(!exp);

    const t = team.team
    const [selected, setSelected] = useState(t.pokemon[0])
    const [open, setOpen] = useState(false)
    
    const handleOpen = (p) => {
        setOpen(true)
        setSelected(p)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const [nP, setNP] = useState(false)
    const handleNPOpen = () => setNP(true);
    const handleNPClose = () => setNP(false);

    const [nN, setNN] = useState(false)
    const handleNNOpen = () => setNN(true);
    const handleNNClose = () => setNN(false);

    const [c, setC] = useState(false);
    const handleCOpen = () => setC(true);
    const handleCClose = () => setC(false);

    const [rft, {error}] = useMutation(MUTATION_REMOVEPOKEMONFROMTEAM)

    const handleRFT = async (pokemon) => {
        try {
            const {data} = await rft({
                variables: {
                    id: t._id,
                    pokemonId: pokemon._id
                }
            });
        } catch (err) {
            console.error(err);
            console.log(error, 'Pokemon could not be removed')
        }

        window.location.reload()
    }

    return (
        <Card sx={{ width: 300, m: 0.5 }} style = {{backgroundColor: "#e6af2e", transparency: '40%'}} className = 'project'>
            <CardHeader
                title={t.nickname} className="text-center"
            />
            <CardActions disableSpacing>
                <ExpandMore
                    expand={exp}
                    onClick={handleExpClick}
                    aria-expanded={exp}
                    aria-label="show team"
                    >
                    <BsChevronDown />
                </ExpandMore>
            </CardActions>
            <Collapse in={exp} timeout="auto" unmountOnExit>
                <CardContent>
                    <div className="flex-row justify-center">
                        {t.pokemon.length 
                            ? t.pokemon.map((p) => {
                                return(
                                    <div key={p._id}>
                                        <Box sx={style} onClick={() => handleOpen(p)}>
                                            <Typography sx={{margin: 0.5}}>{p.nickname}</Typography>
                                            <Typography sx={{margin: 0.5}}>({ch(p.name)})</Typography>
                                        </Box>
                                        <Box sx={{marginTop: 1, marginBottom: 1}}>
                                            <Button variant="contained" color="error" onClick={() => handleRFT(p)}>Remove {p.nickname} from {t.nickname}</Button>
                                        </Box>
                                        <Box sx={{margin: 1}}>
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                sx={{bgcolor: '#f77f00'}}
                                                >
                                                    <Box sx={styleModal}>
                                                        <PokeCard p={selected}/>
                                                    </Box>
                                            </Modal>
                                        </Box>
                                    </div>
                                )
                            })
                            : <div>
                                <Typography>
                                    Team has no Pokemon
                                </Typography>
                            </div>
                        }

                        {(t.pokemon.length < 6) &&
                            <div> 
                                <Box>
                                    <Button variant="contained" onClick={handleNPOpen}>Add a Pokemon</Button>
                                </Box>
                                <Modal
                                    open={nP}
                                    onClose={handleNPClose}
                                    sx={{bgcolor: '#f77f00'}}
                                    >
                                        <Box sx={styleModal2}>
                                            <AddPokemon2Team team = {t} />
                                        </Box>
                                </Modal>
                            </div>
                        }

                        <div>
                            <Box sx={{marginTop: 1}}>
                                <Button variant="contained" onClick={handleNNOpen}>Edit Team Name</Button>
                            </Box>
                            <Modal
                                open={nN}
                                onClose={handleNNClose}
                                sx={{bgcolor: '#f77f00'}}
                                >
                                    <Box sx={styleModal2}>
                                        <EditTeamName team = {t} hC={handleNNClose}/>
                                    </Box>
                            </Modal>
                        </div>
        
                        <div>
                            <Box sx={{marginTop: 1}}>
                                <Button variant="contained" color="error" onClick={handleCOpen}>Delete Team</Button>
                            </Box>
                            <Modal
                                open={c}
                                onClose={handleCClose}
                                sx={{bgcolor: '#f77f00'}}
                                >
                                    <Box sx={styleModal2}>
                                        <DeleteConfirmation subject={t} mode={"Team"}/>
                                    </Box>
                            </Modal>
                        </div>
                    </div>
                </CardContent>
            </Collapse>
        </Card>
    )    

}
