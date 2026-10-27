import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useActivities } from '../../../lib/hooks/useActivities'


type Props = {
  selectedActivity: Activity
  cancelSelectActivity: () => void
  openForm: (id: string) => void
}

export default function ActivityDetail({
  selectedActivity,
  cancelSelectActivity,
  openForm,
}: Props) {

  const { activities } = useActivities();
  const activity = activities?.find (act => act.id === selectedActivity.id);

  if (!activity) {
    return <Typography>Loanding...</Typography>
  }

  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        src={`/Images/categoryImages/${selectedActivity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h5">{selectedActivity.title}</Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 'light' }}>
          {selectedActivity.date}
        </Typography>
        <Typography variant="body1">{selectedActivity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={() => openForm(selectedActivity.id)}>
          Edit
        </Button>
        <Button onClick={cancelSelectActivity} color="inherit">
          Cancel
        </Button>
      </CardActions>
    </Card>
  )
}