import React, {useState} from "react";
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardContent, CardActions, Collapse, IconButton, Typography, Box, Modal } from '@mui/material'
import { BsChevronDown } from 'react-icons/bs';
import ch from "../../utils/ch";

export default function TeamCard (team) {
    const style = {
        width: 240,
        bgcolor: "#eae2b7",
        border: '1px solid #003049',
        boxShadow: 24,
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
        console.log('opened')
        setSelected(p)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Card sx={{ width: 300, m: 0.5 }} style = {{backgroundColor: "#e6af2e"}} className = 'project'>
            <CardHeader
                title={t.nickname}
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
                    <div className="flex-row justify-space-between">
                        {t.pokemon.length 
                            ? t.pokemon.map((p) => {
                                return(
                                    <div onClick={() => handleOpen(p)}>
                                        <Box sx={style}>
                                            <Typography sx={{margin: 0.5}}>{p.nickname}</Typography>
                                            <Typography sx={{margin: 0.5}}>({ch(p.name)})</Typography>
                                        </Box>
                                        <Modal
                                            open={false}
                                            onClose={handleClose}
                                            >
                                            <Typography>
                                                Salamander
                                            </Typography>
                                        </Modal>
                                    </div>
                                )
                            })
                            : <div>
                                <Typography>
                                    Team has no Pokemon
                                </Typography>
                            </div>
                        }
                    </div>
                    
                </CardContent>
            </Collapse>
        </Card>
    )    

}
