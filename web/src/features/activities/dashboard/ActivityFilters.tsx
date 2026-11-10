import { Box, Paper, Typography, MenuList, MenuItem, ListItemText } from '@mui/material';
import { FilterList, Event } from '@mui/icons-material';
import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';

export default function ActivityFilters() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <FilterList sx={{ mr: 1 }} />
          Filters
        </Typography>

        <MenuList>
          <MenuItem><ListItemText primary="All events" /></MenuItem>
          <MenuItem><ListItemText primary="Going" /></MenuItem>
          <MenuItem><ListItemText primary="Hosting" /></MenuItem>
        </MenuList>
      </Paper>

      <Box component={Paper} sx={{ width: '100%', p: 3, borderRadius: 3 }}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Event sx={{ mr: 1 }} />
          Select date
        </Typography>
        <Calendar />
      </Box>
    </Box>
  );
}