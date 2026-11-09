import {
  Grid,
  Typography,
} from '@mui/material'
import { useParams } from 'react-router'
import { useActivities } from '../../../lib/hooks/useActivities'
import ActivityDetailsHeader from './ActivityDetailsHeader';
import ActivityDetailsInfo from './ActivityDetailsInfo';
import ActivityDetailsChat from './ActivityDetailsChat';
import ActivityDetailsSlidebar from './ActivityDetailsSlidebar';

export default function ActivityDetailPage() {
  const { id } = useParams()
  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity) return <Typography>Loadinf...</Typography>
  if (!activity) return <Typography>Loading...</Typography>

  return (
    <Grid container spacing={3}>
      <Grid size={8}>
        <ActivityDetailsHeader />
        <ActivityDetailsInfo />
        <ActivityDetailsChat />
      </Grid>
      <Grid size={4}>
        <ActivityDetailsSlidebar />
      </Grid>
    </Grid>
  )
}