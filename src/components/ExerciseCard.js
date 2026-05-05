import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  // exercisedb.dev provides gifUrl directly on the exercise object
  const gifSrc = exercise.gifUrl || `https://exercisedb.dev/api/v1/exercises/${exercise.id}/image`;
  const fallback = 'https://via.placeholder.com/350x220?text=No+Image';

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img
        src={gifSrc}
        alt={exercise.name}
        loading="lazy"
        onError={(e) => { e.target.onerror = null; e.target.src = fallback; }}
      />
      <Stack direction="row">
        <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
