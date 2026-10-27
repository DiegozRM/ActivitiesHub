import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import type { FormEvent } from 'react'
import { useActivities } from '../../lib/hooks/useActivities'


type Props = {
  closeForm: () => void
  activity?: Activity
}
export default function ActivityForm({ closeForm, activity }: Props) {
  const { updateActivity } = useActivities()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    if (activity) {
      const updatedActivity: Activity = {
        ...activity,
        title: formData.get('title')?.toString() ?? activity.title,
        description:
          formData.get('description')?.toString() ?? activity.description,
        category: formData.get('category')?.toString() ?? activity.category,
        date: formData.get('date')?.toString() ?? activity.date,
        city: formData.get('city')?.toString() ?? activity.city,
        venue: formData.get('venue')?.toString() ?? activity.venue,
      }

      await updateActivity.mutateAsync(updatedActivity)
      closeForm()
    }
  }

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create Activity
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        <TextField name="title" label="Title" defaultValue={activity?.title} />
        <TextField
          name="description"
          label="Description"
          multiline
          rows={3}
          defaultValue={activity?.description}
        />
        <TextField
          name="category"
          label="Category"
          defaultValue={activity?.category}
        />
        <TextField
          name="date"
          label="Date"
          type="date"
          defaultValue={activity?.date
            ? new Date(activity.date).toISOString().split('T')[0]
            : new Date().toISOString().split('T')[0]
          }
        />
        <TextField name="city" label="City" defaultValue={activity?.city} />
        <TextField name="venue" label="Venue" defaultValue={activity?.venue} />
        <Box sx={{ display: 'flex', justifyContent: 'end', gap: 3 }}>
          <Button onClick={closeForm} color="inherit">
            Cancel
          </Button>
          <Button
            type="submit"
            color="success"
            variant="contained"
            loading={updateActivity.isPending}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}