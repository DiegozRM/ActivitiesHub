import { Box, Button, Paper, TextField, Typography } from "@mui/material";

type Props = {
    activity?: Activity;
    closeForm: () => void;
}

export default function ActivityForm({activity, closeForm}: Props) {
    return (
        <Paper sx={{ borderRadius: 3, padding: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
                {activity ? 'Edit activity' : 'Create activity'}
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField label="Title" defaultValue={activity?.title ?? ''} />
                <TextField label="Description" defaultValue={activity?.description ?? ''} multiline rows={3}/>
                <TextField label="Category" defaultValue={activity?.category ?? ''}/>
                <TextField label="Date" defaultValue={activity?.date?.split('T')[0] ?? ''} type="date" slotProps={{ inputLabel: { shrink: true } }}/>
                <TextField label="City" defaultValue={activity?.city ?? ''}/>
                <TextField label="Venue" defaultValue={activity?.venue ?? ''}/>
                <Box sx={{display: 'flex', justifyContent: 'end', gap: 3}}>
                    <Button onClick={closeForm} color="inherit">Cancel</Button>
                    <Button color="success">Submit</Button>
                </Box>
            </Box>
        </Paper>
    )
}
