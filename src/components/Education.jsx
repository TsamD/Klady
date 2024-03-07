import React, { useState } from 'react';

const App = () => {
    const Accordion = ({ title, content }) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleAccordion = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div className="accordion mb-4">
                <div
                    className="accordion-title cursor-pointer py-2 px-4 bg-boutonBase text-white text-center hover:bg-brightColor"
                    onClick={toggleAccordion}
                >
                    {title}
                </div>
                {isOpen && (
                    <div className="accordion-content py-2 px-4 bg-experience">
                        {content}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mt-8">
            <div className="p-6 text-center">
                <h1 className="text-3xl font-bold mb-4 m-auto font-ligth mb-8 text-boutonBase hover:text-brightColor text-center md:w-1/2">
                    Education
                </h1>
                <p className="w-11/12 md:w-5/6 m-auto text-black bold-light">
                    We and our partners store and/or access information on a device, such as cookies and process personal data,
                    such as unique identifiers and standard information sent by a device for personalised ads and content,
                    ad and content measurement, and audience insights, as well as to develop and improve products.
                    With your permission, we and our partners may use precise geolocation data and identification through device scanning.
                </p>
            </div>
            <div className="flex flex-col md:flex-row mx-4 md:mx-auto mt-8 w-11/12 md:w-5/6 h-full bg-experience shadow-nuanceBlack shadow-md rounded-md">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center m-4 bg-opacity-20 ">
                    <h2 className="text-3xl font-bold mb-4 text-boutonBase hover:text-brightColor">Cursus au Mali</h2>
                    <Accordion title="2011-2012" content="and/or access information on a device, such as cookies and process personal data, 
                        such as unique identifiers " />
                    <Accordion title="2012-2014" content="and/or access information on a device, such as cookies and process personal data, 
                        such as unique identifiers " />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center m-4 ">
                    <h2 className="text-3xl font-bold mb-4 text-boutonBase hover:text-brightColor">Cursus en Belgique</h2>
                    <Accordion title="2017-2019" content="and/or access information on a device, such as cookies and process personal data, 
                        such as unique identifiers " />
                    <Accordion title="2023-2024" content="and/or access information on a device, such as cookies and process personal data, 
                        such as unique identifiers " />
                </div>
            </div>
        </div>
    );
};

export default App;
