import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rtkSlice = createApi({
      reducerPath: 'api',
      baseQuery: fetchBaseQuery({
            baseUrl: 'https://respected-lilac-crowberry.glitch.me/animals',
      }),
      endpoints: (builder) => ({
            getAnimals: builder.query({
                  query: () => '/',
            }),
      }),
});

export const { useGetAnimalsQuery } = rtkSlice;
export default rtkSlice;