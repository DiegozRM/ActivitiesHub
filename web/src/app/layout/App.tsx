import { Box, Container, CssBaseline, Typography } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import NavBar from './NavBar'
import { useQuery } from '@tanstack/react-query'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'

function App() {
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined)
  const [editMode, setEditMode] = useState(false)

  const { data: activities, isPending, isError } = useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const response = await axios.get<Activity[]>(
        'https://localhost:5001/api/v1/events',
      )
      return response.data
    }
  })

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities?.find((x) => x.id === id))
    setEditMode(false)
  }

  const handleCancelSelectedActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
    if(id){
      handleSelectActivity(id);
    }else{
      handleCancelSelectedActivity();
    }
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleSubmitForm = (activity: Activity) => {
  //   if (activity.id) {
  //     setSelectedActivity(activity)
  //     setActivities(
  //       activities.map((act) => (act.id === activity.id ? activity : act)),
  //     )
  //   } else {
  //     const newActivity = { ...activity, id: activities.length.toString() }
  //     setSelectedActivity(newActivity)
  //     setActivities([...activities, newActivity])
  //   }
  //   setEditMode(false)
  // }
    console.log(activity);
    setEditMode(false)
  }

  return (
    <Box sx={{ bgcolor: '#dff2eb', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ marginTop: 3.5 }}>
        {isError ? (
          <Typography color="error">Unable to load activities. Please try again.</Typography>
        ) : !activities || isPending ? (
          <Typography>Loading...</Typography>
        ) : (
          <ActivityDashboard
            activities={activities}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectedActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleFormClose}
            submitForm={handleSubmitForm}
          />
        )}
      </Container>
    </Box>
  )
}

export default App
