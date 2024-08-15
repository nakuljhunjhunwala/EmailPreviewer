
import { Grid, Box, Button } from '@mui/material';
import EmailForm from './EmailForm';
import EmailPreview from './EmailPreview';
import SubjectHeader from './SubjectHeader';

const Layout = () => {
    return (
        <>
            <SubjectHeader />
            <Grid container spacing={2} sx={{ padding: 2 }}>
                <Grid item xs={12} sm={6}>
                    <EmailForm />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <EmailPreview />
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    paddingLeft: 10,
                    paddingRight: 10
                }}
            >
                <Button
                    sx={{
                        textTransform: 'none',
                        color: 'purple',
                        marginRight: 2
                    }}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        textTransform: 'none',
                        backgroundColor: 'grey',
                        '&:hover': {
                            backgroundColor: 'darkgrey',
                        },
                        borderRadius: '20px',
                        padding: '6px 16px',
                    }}
                >
                    Save
                </Button>
            </Box>
        </>
    );
};

export default Layout;
