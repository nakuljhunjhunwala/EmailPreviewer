import React from 'react';
import { TextField, Box, Button, InputAdornment, Tooltip, IconButton, Grid, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useDispatch, useSelector } from 'react-redux';
import { setSubjectA, setSubjectB, setPreviewText } from '../store/store';

const EmailForm = () => {

    const dispatch = useDispatch();
    const { subjectA, subjectB, previewText } = useSelector((state) => state.email);


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'subjectA') dispatch(setSubjectA(value));
        else if (name === 'subjectB') dispatch(setSubjectB(value));
        else if (name === 'previewText') dispatch(setPreviewText(value));
    };

    return (
        <Box >
            <Grid container spacing={2}>
                <Box display="flex" alignItems="center" mt={1} ml={2} >
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginRight: 1 }}>
                        Subject line <span style={{ color: 'red' }}>*</span>
                    </Typography>
                    <Tooltip title="Add a subject line for this campaign." placement="top">
                        <IconButton size="small">
                            <HelpOutlineIcon sx={{ fontSize: '16px' }} />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Grid item xs={12} sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end"
                }}>

                    <Box display="flex" alignItems="center" width={"100%"}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="subjectA"
                            value={subjectA}
                            autoComplete="off"
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Box sx={{ backgroundColor: '#F3F4F6', padding: '4px 8px', borderRadius: '4px' }}>
                                            A
                                        </Box>
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                                style: {
                                    borderRadius: '8px',
                                },
                            }}
                        />

                    </Box>
                    <Button
                        variant="text"
                        sx={{
                            backgroundColor: 'white',
                            color: '#333',
                            textTransform: 'none',
                            boxShadow: 'none',
                            marginLeft: 1,
                            marginTop: 1,
                            height: '40px',
                            width: "90px",
                            borderRadius: "15px",
                            border: "1px solid black"
                        }}
                    >
                        Use AI
                    </Button>
                </Grid>
                <Grid item xs={12} sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end"
                }}>
                    <Box display="flex" alignItems="center" mt={1} width={"100%"}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            name="subjectB"
                            value={subjectB}
                            onChange={handleChange}
                            autoComplete="off"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Box sx={{ backgroundColor: '#F3F4F6', padding: '4px 8px', borderRadius: '4px' }}>
                                            B
                                        </Box>
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                                style: {
                                    borderRadius: '8px',
                                },
                            }}
                        />

                    </Box>
                    <Button
                        variant="text"
                        sx={{
                            backgroundColor: 'white',
                            color: '#333',
                            textTransform: 'none',
                            boxShadow: 'none',
                            marginLeft: 1,
                            marginTop: 1,
                            height: '40px',
                            width: "90px",
                            borderRadius: "15px",
                            border: "1px solid black"
                        }}

                    >
                        Use AI
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" alignItems="center">
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginRight: 1 }}>
                            Preview text
                        </Typography>
                        <Tooltip title="Add preview text for the email." placement="top">
                            <IconButton size="small">
                                <HelpOutlineIcon sx={{ fontSize: '16px' }} />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <TextField
                        variant="outlined"
                        fullWidth
                        autoComplete='off'
                        name="previewText"
                        value={previewText}
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                            style: {
                                borderRadius: '8px',
                            },
                        }}
                        sx={{ marginTop: 1 }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default EmailForm;
