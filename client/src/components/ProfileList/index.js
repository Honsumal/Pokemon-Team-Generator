import React from 'react';

const ProfileList = ({ teams, title }) => {
  if (!teams.length) {
    return <h3>No teams Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {teams &&
          teams.map((team) => (
            <div key={team._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-light text-light p-2 m-0">
                  {team.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    Nickname: {team.nickname}
                  </span>
                  <br></br>
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileList;
