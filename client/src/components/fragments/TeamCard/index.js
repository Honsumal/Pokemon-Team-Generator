import React, {useState} from "react";
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardContent, CardActions, Collapse, IconButton, Typography, Box, Modal, Button } from '@mui/material'
import { BsChevronDown } from 'react-icons/bs';
import ch from "../../../utils/ch";
import PokeCard from "../PokeCard";
import AddPokemon2Team from "../AddPokemon2Team";

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
                                        <Box>
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
                    </div>
                    
                </CardContent>
            </Collapse>
        </Card>
    )    

}
