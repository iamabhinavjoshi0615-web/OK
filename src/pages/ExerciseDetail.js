import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { EXERCISE_DB_URL, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      // exercisedb.dev returns { success, data: {...} } for a single exercise
      const exerciseResult = await fetchData(`${EXERCISE_DB_URL}/exercises/${id}`);
      const detail = exerciseResult?.data ?? exerciseResult;
      if (!detail?.name) return;

      setExerciseDetail(detail);

      // YouTube videos (still via RapidAPI)
      const videosResult = await fetchData(
        `${youtubeSearchUrl}/search?query=${detail.name} exercise`,
        youtubeOptions,
      );
      setExerciseVideos(videosResult?.contents ?? []);

      // Similar by target muscle
      const targetResult = await fetchData(
        `${EXERCISE_DB_URL}/exercises?muscle=${encodeURIComponent(detail.target ?? detail.muscles?.[0] ?? '')}&limit=20`,
      );
      setTargetMuscleExercises(Array.isArray(targetResult?.data) ? targetResult.data : []);

      // Similar by equipment
      const equipResult = await fetchData(
        `${EXERCISE_DB_URL}/exercises?equipment=${encodeURIComponent(detail.equipment ?? '')}&limit=20`,
      );
      setEquipmentExercises(Array.isArray(equipResult?.data) ? equipResult.data : []);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail.name) return <div>Loading...</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
