import React from 'react';
import { Card, Typography, Grid, Divider, Box } from '@mui/material';
import {BarChart } from '@mui/x-charts';
import {PieChart} from '@mui/x-charts';
import SideBar from '../../Components/SideBar';
import '../../Assets/Styles/Dashboard.css';

const CustomLabel = ({ datum, x, y, color }) => (
  <>
    <line
      x1={x}
      y1={y}
      x2={x + 180} // Line end x position; adjust for better alignment
      y2={y}
      stroke={color}
      strokeWidth={1}
      strokeDasharray="2,2"
    />
    <text
      x={x + 585}  // Adjust this value to position the label on the right
      y={y+50}
      fill={color}
      textAnchor="start"
      style={{ fontSize: 12 }}
    >
      {datum.label}
    </text>
  </>
);

const Dashboard = () => {
  return (
    <div>
      <SideBar/>
    <Box sx={{ display: 'flex', marginLeft:'6vw' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'white' }}>
          AutoGarage Dashboard
        </Typography>
        <Grid container spacing={2}>
          {/* Key Metrics */}
          <Grid item xs={12} md={6} lg={3}>
            <Card variant="outlined" sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: '#1976d2' }}>Total Repairs</Typography>
              <Typography variant="h4">150</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card variant="outlined" sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: '#388e3c' }}>Active Repairs</Typography>
              <Typography variant="h4">80</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card variant="outlined" sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: '#f57c00' }}>Pending Repairs</Typography>
              <Typography variant="h4">10</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card variant="outlined" sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: '#d32f2f' }}>Completed Repairs</Typography>
              <Typography variant="h4">60</Typography>
            </Card>
          </Grid>
          {/* Performance Metrics */}
          <Grid item xs={12}>
            <Card variant="outlined" sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Performance Metrics</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <BarChart
                    xAxis={[{ scaleType: 'band', data: ['Week 1', 'Week 2', 'Week 3'] }]}
                    series={[{ data: [10, 15, 20] }, { data: [5, 10, 15] }, { data: [8, 12, 18] }]}
                    width={500}
                    height={300}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <PieChart
                    series={[
                      {
                        data: [
                          { id: 0, value: 30, label: 'Oil Changes' },
                          { id: 1, value: 40, label: 'Brake Repairs' },
                          { id: 2, value: 30, label: 'Other Repairs' },
                        ],
                      },
                    ]}
                    width={540}
                    height={280}
                    padding={{ top: 20, bottom: 20, left: 20, right: 20 }} // Adjust padding
                    innerRadius={50} // Adjust inner radius if needed
                    labelComponent={CustomLabel} // Use custom label component
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>
          {/* Recent Activities */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Recent Activities</Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1">- New repair guide added for engine issues</Typography>
                <Typography variant="body1">- Updated maintenance schedule for Toyota vehicles</Typography>
                <Typography variant="body1">- New video tutorial: Brake Replacement</Typography>
              </Box>
            </Card>
          </Grid>
          {/* Important Alerts */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Important Alerts</Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1" color="error">- Alert: Update on vehicle recall notices</Typography>
                <Typography variant="body1" color="error">- Reminder: Check for safety recalls on new vehicles</Typography>
                <Typography variant="body1" color="error">- Urgent: Maintenance system update planned for this weekend</Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>
          {/* Staff Performance */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Staff Performance</Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1">- Average repair completion time: 4 hours</Typography>
                <Typography variant="body1">- Top performing mechanic: Alice Johnson</Typography>
                <Typography variant="body1">- Most improved: Bob Williams</Typography>
              </Box>
            </Card>
          </Grid>
          {/* Upcoming Events */}
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ padding: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Upcoming Events</Typography>
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1">- Free vehicle inspection day next Friday</Typography>
                <Typography variant="body1">- Workshop on advanced diagnostic tools next month</Typography>
                <Typography variant="body1">- Quarterly team meeting on the first Monday of next month</Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </div>
  );
};

export default Dashboard;
