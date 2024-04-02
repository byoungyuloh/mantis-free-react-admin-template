import React, { useEffect, useState } from 'react';
import { Box, Grid, ListItem, TextField } from '@mui/material';

const Examresult = ({ selectedPatientId, patients }) => {
  const [examResults, setExamResults] = useState({
    albumin: '선택되지 않음', bun: '선택되지 않음', calcium: '선택되지 않음', 
    creatinine: '선택되지 않음', chloride: '선택되지 않음', glucose: '선택되지 않음', 
    hematocrit: '선택되지 않음', hemoglobin: '선택되지 않음', platelet_count: '선택되지 않음', 
    potassium: '선택되지 않음', pt: '선택되지 않음', ptt: '선택되지 않음', sodium: '선택되지 않음'
  });

  useEffect(() => {
    const selectedPatient = patients.find(patient => patient.id === selectedPatientId);
    if (selectedPatient) {
      const { albumin, bun, calcium, creatinine, chloride, glucose, hematocrit, hemoglobin, platelet_count, potassium, pt, ptt, sodium } = selectedPatient;
      setExamResults({ albumin, bun, calcium, creatinine, chloride, glucose, hematocrit, hemoglobin, platelet_count, potassium, pt, ptt, sodium });
    } else {
      setExamResults({
        albumin: '선택되지 않음', bun: '선택되지 않음', calcium: '선택되지 않음', 
        creatinine: '선택되지 않음', chloride: '선택되지 않음', glucose: '선택되지 않음', 
        hematocrit: '선택되지 않음', hemoglobin: '선택되지 않음', platelet_count: '선택되지 않음', 
        potassium: '선택되지 않음', pt: '선택되지 않음', ptt: '선택되지 않음', sodium: '선택되지 않음'
      });
    }
  }, [selectedPatientId, patients]);

  const handleChange = (event, name) => {
    setExamResults({
      ...examResults,
      [name]: event.target.value
    });
  };

  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      {Object.entries(examResults).map(([label, value]) => (
        <Grid item xs={12} sm={6} md={3} lg={3} key={label} mt={1}>
          <ListItem>
            <Box textAlign="center" width="100%">
              <TextField
                label={label}
                variant="outlined"
                value={value}
                onChange={(event) => handleChange(event, label)}
                type="text"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Box>
          </ListItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default Examresult;