import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    marginTop: 64,
    backgroundColor: theme.palette.background.clean,
    // marginBottom: 40,
    flexGrow: 1,
    padding: theme.spacing(1),
    width: '50%',
  },
}));
