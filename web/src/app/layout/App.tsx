import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";


function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/v1/events')
      .then(response => setActivities(response.data));

    return () => { };
  }, []);

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.find(act => act.id === id));

  }

  const handleCancelSelectedActivity = () => {
    setSelectedActivity(undefined);
  }

  return (
    <>
      <Box sx={{ bgcolor: '#eeeeee'}}>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="xl" sx={{ marginTop: 3.5 }}>
          <ActivityDashboard 
            activities={activities}
            selectActivity={handleSelectedActivity}
            cancelSelectActivity={handleCancelSelectedActivity}
            selectedActivity={selectedActivity} />
        </Container>
      </Box>
    </>
  )
}

export default App