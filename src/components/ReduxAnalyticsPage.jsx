import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectToQlikApp, fetchQlikObject } from '../redux/qlikSlice';
import { useParams } from 'react-router-dom';

const ReduxAnalyticsPage = () => {
  const dispatch = useDispatch();
  const { objectId } = useParams(); // Assuming you are passing Qlik object ID dynamically via URL
  const { qlikApp, objectData, loading, error } = useSelector((state) => state.qlik);

  useEffect(() => {
    dispatch(connectToQlikApp());
  }, [dispatch]);

  useEffect(() => {
    if (qlikApp && objectId) {
      dispatch(fetchQlikObject(objectId));
    }
  }, [qlikApp, objectId, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Analytics Page</h1>
      <div>
        <pre>{JSON.stringify(objectData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ReduxAnalyticsPage;
