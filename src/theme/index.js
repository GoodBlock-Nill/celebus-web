import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#B7E703', // Replace with your desired color
            borderWidth: '2px',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#B7E703', // Replace with your desired hover color
            borderWidth: '2px',
          },
        },
        notchedOutline: {
          borderColor: 'rgba(0, 0, 0, 0.08)', // Replace with your desired default color
        },
      },
    },
  },
});

export default theme;
