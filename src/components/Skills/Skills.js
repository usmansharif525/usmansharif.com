import React from "react";

const Skills = () => {
    // :degree
    return (
        <div id="skills" className="skills-section wf-section pt-20 pb-20 bg-slate-100">
            <div className="c-container mx-auto">
                <div className=" text-center pb-5">
                    <h1 className="text-3xl font-bold mb-2.5">Pillars I build on</h1>
                    <p className="text-lg mb-3 leading-8">The connection between different crafts and trades enables me to see the bigger picture.</p>
                </div>
                <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
                    <div className="shadow-[1px_1px_4px_1px_#e2e8f0] w-full h-full border rounded-md px-3 pt-7 pb-4 text-center bg-white">
                        <div className="text-5xl mx-auto mb-4 max-w-fit hover:animate-heartBeat">🎓</div>
                        <h2 className="text-2xl leading-7 font-bold">
                            Engineering <br /> Degree
                        </h2>
                        <p className="text-md mt-2">I obtained a B.Eng. in the field of Mechanical Engineering and Production Management as a solid foundation to systematically break down challenges.</p>
                    </div>
                    <div className="shadow-[1px_1px_4px_1px_#e2e8f0] w-full h-full border rounded-md px-3 pt-7 pb-4 text-center bg-white">
                        <div className="text-5xl mx-auto mb-4 max-w-fit hover:animate-heartBeat">💡</div>
                        <h2 className="text-2xl font-bold">
                            Entrepreneurial <br /> Mindset
                        </h2>
                        <p className="text-md mt-2">Anticipation of requirements, holistically, is a must for me. I have been running my startup for six years and have, therefore, a profound grasp of the different interests of businesses and people.</p>
                    </div>
                    <div className="shadow-[1px_1px_4px_1px_#e2e8f0] w-full h-full border rounded-md px-3 pt-7 pb-4 text-center bg-white">
                        <div className="text-5xl mx-auto mb-4 max-w-fit hover:animate-heartBeat">💻</div>
                        <h2 className="text-2xl font-bold">
                            Software <br /> Development
                        </h2>
                        <p className="text-md mt-2">I love to interact with computers since childhood. I've added coding to my quiver because solving real-world problems with the help of bits and bytes is such a powerful tool.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;