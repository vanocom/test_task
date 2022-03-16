import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeRequest } from '../utils/api';

const url1 = 'http://jsonplaceholder.typicode.com/photos?albumId=1';
const url2 = 'http://jsonplaceholder.typicode.com/photos?albumId=2';
const url3 = 'http://jsonplaceholder.typicode.com/photos?albumId=3';

export const initialDataDownload = createAsyncThunk('tabPhotos/initialDataDownload', async () => {
    const initialData = { photoList: [] };
    try {
        initialData.photoList = await makeRequest( 'GET', url1 );
      return initialData;
    } catch (error) {
        console.log('InitialDataDownload error: ', error);
    }
});
