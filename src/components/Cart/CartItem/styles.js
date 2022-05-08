import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    padding: '50%',
    height: 160,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));
