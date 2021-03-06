import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useDispatch } from "@src/hooks/dispatch";
import { fetchCountries } from "@src/store/countries/actions";
import { fetchTrips } from "@src/store/trips/actions";

import { Container, Box, AppBar, Toolbar } from "@material-ui/core";
import MasterModal from "@src/containers/MasterModal";
import TripList from "@src/containers/TripList";
import Filters from "@src/containers/Filters";
import Panel from "@src/containers/Panel";
import Snacksbar from "@src/containers/Snacksbar";

const App: React.FC = () => {
    const dispatchCountries = useDispatch<typeof fetchCountries>(fetchCountries);
    const dispatchTrips = useDispatch<typeof fetchTrips>(fetchTrips);

    useEffect(() => {
        dispatchTrips();
        dispatchCountries();
    }, [dispatchCountries, dispatchTrips]);

    return (
        <Box py={8} component="main">
            <CssBaseline />
            <AppBar position="fixed" color="inherit">
                <Toolbar>
                    <Container>
                        <Panel />
                    </Container>
                </Toolbar>
            </AppBar>
            <Container>
                <Filters />
                <TripList />
            </Container>
            <MasterModal />
            <Snacksbar />
        </Box>
    );
};

export default App;
