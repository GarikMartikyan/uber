import {api} from './api';

export const testApi = api.injectEndpoints({
  endpoints: build => ({
    test: build.query({
      query: () => ({
        url: '/users',
      }),
    }),
  }),
});

export const {useTestQuery} = testApi;
