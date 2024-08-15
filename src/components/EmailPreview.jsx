import React from 'react';
import { Paper, Typography, Box, Avatar, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const EmailPreview = () => {
    const { subjectA, subjectB, previewText } = useSelector((state) => state.email);

    return (
        <Paper
            sx={{
                padding: 2,
                borderRadius: 3,
                marginTop: 2,
                position: 'relative',
                backgroundColor: 'transparent',
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: "none"
            }}
        >
            <Box
                sx={{
                    width: '360px',
                    height: '640px',
                    backgroundColor: '#fff',
                    borderRadius: '36px',
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
                    position: 'relative',
                    overflow: 'auto',
                }}
            >
                <Box
                    sx={{
                        width: '60px',
                        height: '20px',
                        backgroundColor: '#ddd',
                        borderRadius: '10px',
                        position: 'absolute',
                        top: '10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                ></Box>
                <Box sx={{ padding: 2, paddingTop: '40px' }}>
                    <Box sx={{ textAlign: 'center', borderBottom: '1px solid #ddd', paddingBottom: 1 }}>
                        <Typography variant="caption" color="textSecondary">9:47</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', borderBottom: '1px solid #ddd', paddingY: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Inbox</Typography>
                    </Box>
                    <Grid container spacing={1} sx={{ padding: 1, borderBottom: '1px solid #ddd' }}>
                        <Grid item>
                            <Avatar sx={{ bgcolor: '#3b82f6' }}>A</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                The Green Yoga
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{subjectA} </Typography>
                                {previewText}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" color="textSecondary">5:45 PM</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} sx={{ padding: 1, borderBottom: '1px solid #ddd' }}>
                        <Grid item>
                            <Avatar sx={{ bgcolor: '#9333ea' }}>B</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                The Green Yoga
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{subjectB} </Typography>
                                {previewText}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" color="textSecondary">5:45 PM</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} sx={{ padding: 1, borderBottom: '1px solid #ddd' }}>
                        <Grid item>
                            <Avatar sx={{ bgcolor: '#4ade80' }}>A</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                Brevo Academy
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Free email marketing course
                                <br />
                                Learn how to create an email marketing strategy.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" color="textSecondary">Sep 6</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} sx={{ padding: 1 }}>
                        <Grid item>
                            <Avatar sx={{ bgcolor: '#fb7185' }}>A</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                Brevo Editor
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Try the new drag & drop editor
                                <br />
                                Learn how to save time & build beautiful emails in a flash.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" color="textSecondary">Sep 5</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Typography variant='subtitle2' sx={{
                color: "grey",
                marginTop: "5px"
            }}>
                Actual email preview may vary depending on the email client.
            </Typography>
        </Paper>
    );
};

export default EmailPreview;
