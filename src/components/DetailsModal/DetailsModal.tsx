import React, { memo, useCallback } from "react";
import { setShowModal } from "@src/store/app/actions";
import { useDispatch } from "@src/hooks/dispatch";
import { ModalTypes } from "@src/types/common";
import useStyles from "./styles";

import {
    Card,
    CardContent,
    Box,
    Chip,
    Typography,
    Divider,
    Button,
    IconButton,
    Popover,
    List,
    ListItem,
} from "@material-ui/core";
import {
    QueryBuilder as QueryBuilderIcon,
    MoreVert as MoreVertIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
} from "@material-ui/icons";

interface Props {
    onCloseModal: () => void;
}

const DetailsModal: React.FC<Props> = memo(({ onCloseModal }) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    const classes = useStyles();
    const triggerModal = useDispatch<typeof setShowModal>(setShowModal);

    const handleEditClick = useCallback(
        (id: string) => {
            triggerModal(ModalTypes.MODAL_EDIT);
            setAnchorEl(null);
        },
        [triggerModal, setAnchorEl],
    );
    const handleOpenPopover = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        },
        [setAnchorEl],
    );
    const handleClosePopover = useCallback(() => {
        setAnchorEl(null);
    }, [setAnchorEl]);

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Box display="flex" mb={3}>
                    <Typography variant="h5" component="h2" className={classes.title}>
                        Transition modal
                    </Typography>
                </Box>
                <Box>
                    <Chip
                        className={classes.marginRight}
                        icon={<QueryBuilderIcon />}
                        label={
                            <>
                                <strong>12.12.2019</strong> - <strong>01.01.2020</strong>
                            </>
                        }
                        variant="outlined"
                    />
                    <Chip label="20 days" color="primary" />
                </Box>

                <p>react-transition-group animates me.</p>
            </CardContent>
            <Divider />
            <CardContent className={classes.footer}>
                <Button variant="outlined" onClick={onCloseModal} size="large">
                    Close
                </Button>
                <IconButton color="primary" onClick={handleOpenPopover}>
                    <MoreVertIcon />
                </IconButton>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClosePopover}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    className={classes.popover}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >
                    <List>
                        <ListItem button className={classes.editIcon} onClick={() => handleEditClick("some_ID")}>
                            <EditIcon /> Eidt
                        </ListItem>
                        <ListItem button className={classes.deleteIcon}>
                            <DeleteIcon /> Delete
                        </ListItem>
                    </List>
                </Popover>
            </CardContent>
        </Card>
    );
});

export default DetailsModal;
