import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";


function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/v1/events')
      .then(response => setActivities(response.data));

    return () => { };
  }, []);

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.find(act => act.id === id));
    setEditMode(false);

  }

  const handleCancelSelectedActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
    if(id){
      handleSelectedActivity(id);
    }else{
      handleCancelSelectedActivity();
    }
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }
  return (
    <>
      <Box sx={{ bgcolor: '#eeeeee'}}>
        <CssBaseline />
        <NavBar openForm={() => handleOpenForm()} />
        <Container maxWidth="xl" sx={{ marginTop: 3.5 }}>
          <ActivityDashboard 
            activities={activities}
            selectActivity={handleSelectedActivity}
            cancelSelectActivity={handleCancelSelectedActivity}
            selectedActivity={selectedActivity} 
            editMode = {editMode}
            openForm = {handleOpenForm}
            closeForm = {handleFormClose}/>
        </Container>
      </Box>
    </>
  )
}

export default App
