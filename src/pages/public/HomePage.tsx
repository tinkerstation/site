import React from 'react';
import {
    styled,
    Typography,
    Grid
} from '@mui/material';
import viteLogo from '/vite.svg'

const Container = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.background.default,
    padding: theme.spacing(1),

}));

const Item = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    border: "1px solid",
    color: theme.palette.text.primary,

}));

const HomePage: React.FC = () => {
    return (
        <React.Fragment>

            <Container container spacing={{ xs: 2, sm: 2, md: 4 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                <Grid xs={4} sm={4} md={3} >
                    <Item>
                        <a href="https://react.dev" target="_blank">
                            <img src={viteLogo} className="logo react" alt="React logo" />
                        </a>
                    </Item>
                </Grid>
                <Grid xs={4} sm={4} md={6}  >
                    <Item >
                        <Typography variant="h1">This is a Heading 1</Typography>
                        <Typography variant="h2">This is a Heading 2</Typography>
                    </Item>
                </Grid>
                <Grid xs={4} sm={4} md={3} >
                    <Item>
                        <a href="https://react.dev" target="_blank">
                            <img src={viteLogo} className="logo react" alt="React logo" />
                        </a>
                    </Item>
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default HomePage;
