import React, { useCallback } from "react";
import { useDispatch } from "@src/hooks/dispatch";
import { setShowModal } from "@src/store/app/actions";
import { ModalTypes } from "@src/types/common";

import { Button, Box } from "@material-ui/core";

const Panel: React.FC = () => {
    const triggerModal = useDispatch<typeof setShowModal>(setShowModal);

    const handleAddClick = useCallback(() => triggerModal(ModalTypes.MODAL_ADD), [triggerModal]);

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Button onClick={handleAddClick} size="large" variant="contained" color="primary">
                Create new trip
            </Button>
        </Box>
    );
};

export default Panel;
