import React from 'react';
import '../Css/Team.css';
import Constuction from "./Constuction";
import Members from './../Data/TeamMemberList.json';

function Team() {
    return (
        <div className="teamOverview">
            <div className="container">
                <div className='intro'>
                    <h2>Meet Our Beautiful & Expert Team</h2>
                </div>
                <div className='teamList'>
                    {
                        Members.map((member) => (

                            <div className='member'>
                                <div className='profile'>
                                    <img src={member.img} />
                                </div>
                                <div className='teamInf'>
                                    <h2>{member.name}</h2>
                                    <h4>{member.status}</h4>
                                    <h4>Roll : {member.roll}</h4>
                                    <h4>Group: {member.group}</h4>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default Team;