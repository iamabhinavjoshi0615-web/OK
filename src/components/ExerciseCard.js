import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography, Box } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    {exercise.gifUrl ? (
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    ) : (
      <Box
        sx={{
          width: '100%',
          height: '220px',
          background: 'linear-gradient(135deg, #FF2625 0%, #ff6b6b 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20px 20px 0 0',
        }}
      >
        <Typography
          sx={{ fontSize: '72px', fontWeight: 900, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '-2px' }}
        >
          {exercise.bodyPart?.slice(0, 2).toUpperCase()}
        </Typography>
      </Box>
    )}
    <Stack direction="row" mt={1}>
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

export default ExerciseCard;
