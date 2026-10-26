import { Grid } from '@mui/material'
import ActivityList from './ActivityList'
import ActivityForm from '../../form/ActivityForm'
import ActivityDetail from '../details/ActivityDetails'

type Props = {
  activities: Activity[]
  selectActivity: (id: string) => void
  cancelSelectActivity: () => void
  selectedActivity: Activity | undefined
  editMode: boolean
  openForm: (id?: string) => void
  closeForm: () => void
  deleteActivity: (id: string) => void
}

export default function ActivityDashboard({
  activities,
  selectActivity,
  cancelSelectActivity,
  selectedActivity,
  editMode,
  openForm,
  closeForm,
  deleteActivity,
}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={5}>
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
          deleteActivity={deleteActivity}
        />
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetail
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ActivityForm
            closeForm={closeForm}
            activity={selectedActivity}
          />
        )}
      </Grid>
    </Grid>
  )
}