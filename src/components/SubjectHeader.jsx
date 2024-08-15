import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';

const SubjectHeader = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
            <Grid container alignItems="center">
                <Grid item>
                    <CheckCircleIcon sx={{ color: 'green', marginRight: 1 }} />
                </Grid>
                <Grid item xs>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 0 }}>
                        Subject
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Add a subject line for this campaign.
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton size="large">
                        <CloseIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SubjectHeader;
