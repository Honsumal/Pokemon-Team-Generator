import React from 'react';
import ProfileList from '../components/ProfileList';
import { useQuery } from '@apollo/client';
import { QUERY_GETALLPOKEMON, QUERY_GETALLTEAMS} from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_GETALLTEAMS);
  const teams = data?.getTeams || [];
  console.log(teams)

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProfileList
              teams={teams}
              title="Here are you currently saved teams..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
