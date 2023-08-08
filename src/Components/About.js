import React, { useState } from 'react';
// const [Results, roll]= setRoll();
import Results from './../Data/resutlt.json';


function About() {
    const [search, setSearch] = useState();

    return (

        <div>

            <main>
                <div className="container">
                    <div className="title">
                        <h4>এই ওয়েবসাইটে শুধুমাত্র পাবনা পলিটেকনিক ইন্সটিটিউ এর ছাত্র/ছাত্রীদের বোর্ড পরিক্ষার রেজাল্ট দেখা
                            যাবে।</h4>
                        <h5>রেজাল্ট দেখতে নিচের ফর্মে প্রয়োজনীয় তথ্যাদি দিন।</h5>
                    </div>
                </div>
                <div className="container">
                    <form action="">
                        <label for="roll">Enter Your Roll: </label>
                        <input type="number" id="roll" placeholder="Your Board Roll" onChange={(e) => setSearch(e.target.value)} />
                    </form>
                </div>
                <div className="container">
                    <div className="output">
                        {
                            Results.filter((result)=>
                            result.roll.toLowerCase().includes(search)
                            ).map((result) => (

                                    <div className='container'>
                                        <h4 key={result.id}>Roll : {result.roll}</h4>
                                        <h4>Status : {result.status}</h4>
                                        <h4>GPA : {result.grade}</h4>
                                        <h4>{result.sub }</h4>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </main>

        </div>
    )
}

export default About;