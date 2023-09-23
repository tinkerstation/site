import React from 'react';
import {
    styled,
    Typography,
    Grid,
    Hidden
} from '@mui/material';
import AdsComponent from '../../common/components/AdsBox';

const Container = styled(Grid)(({ theme }) => ({
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
}));

const Item = styled(Grid)(({ theme }) => ({
    textAlign: "center",
    padding: theme.spacing(2),
    minHeight: "100vh",
}));

const HomePage: React.FC = () => {
    return (
        <React.Fragment>
            <Container container columns={{ xs: 4, sm: 4, md: 12 }}>
                <Hidden mdDown>
                    <Item xs={4} sm={4} md={2} >
                        <AdsComponent
                            client="ca-pub-6666280964586536"
                            slot="7259870550"
                            layout="in-article"
                            format="fluid"
                            style={{ width: "300px", height: "600px" }}
                        />
                    </Item>
                </Hidden>
                <Item xs={4} sm={4} md={8}  >
                    <Typography variant="h1">This is a Heading 1</Typography>
                    <Typography variant="h2">This is a Heading 2</Typography>
                </Item>
                <Hidden mdDown>
                    <Item xs={4} sm={4} md={2} >
                        <AdsComponent
                            client="ca-pub-6666280964586536"
                            slot="7259870555"
                            layout="in-article"
                            format="fluid"
                            style={{ width: "300px", height: "600px" }}
                        />
                    </Item>
                </Hidden>
            </Container>
        </React.Fragment>
    );
};

export default HomePage;
