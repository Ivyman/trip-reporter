import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            outline: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowY: "auto",
            paddingRight: theme.spacing(0, 3),
        },
        card: {
            boxShadow: theme.shadows[3],
            maxWidth: "80vw",
            width: "1000px",
            outline: "none",
            position: "absolute",
            top: theme.spacing(6),
            marginBottom: theme.spacing(6),
        },
        content: {
            "&, &:last-child": {
                padding: theme.spacing(4),
            },
        },
        title: {
            textTransform: "uppercase",
            margin: theme.spacing(1, 0),
        },
        footer: {
            "&, &:last-child": {
                padding: theme.spacing(2, 4),
            },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        popover: {
            padding: theme.spacing(2),
        },
        editIcon: {
            "& > svg": {
                marginRight: theme.spacing(2),
            },
            color: theme.palette.primary.main,
        },
        deleteIcon: {
            "& > svg": {
                marginRight: theme.spacing(2),
            },
            color: theme.palette.secondary.dark,
        },
        marginRight: {
            marginRight: theme.spacing(2),
        },
    }),
);

export default useStyles;
