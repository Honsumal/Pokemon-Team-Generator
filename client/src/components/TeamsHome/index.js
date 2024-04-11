import React from 'react';
import TeamCard from '../fragments/TeamCard';

const TeamsHome = ({ teams, title }) => {

  if (!teams.length) {
    return <h3>No teams Yet</h3>;
  } else {
    return (
      <div>
        <h3 className="text-primary">{title}</h3>
        <div className="flex-row justify-space-between my-4">
          {teams &&
            teams.map((team) => (
              <TeamCard key={team._id} team = {team}/>
            ))}
        </div>
      </div>
    );
  };
}

export default TeamsHome;
