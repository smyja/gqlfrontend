import React, { useState, useEffect } from 'react'
import {Container, Header,Loader} from '@mantine/core'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const LessonList = () => {
    const [lesson, setLesson] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const { courseSlug } = useParams()

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/v1/dashboard/lessons/${courseSlug}`);
                setLesson(res.data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchData();
    }, [courseSlug])

    return (
        <Container >
       {loading && <Loader />}
      {lesson?.map((lessons) => {
          return (
              <div key={lessons.id}>
                {lessons.title}
                  
              </div>
          )
      })}
            {error && <p>{error}</p>}
            
        </Container>
    )

  
}

export default LessonList;