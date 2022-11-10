import React from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold pt-8 pb-3 text-cyan-500 text-center'>Contact</h1>
            <p className='text-xl text-slate-800 shadow-xl rounded-lg p-8 mb-24'>
            I have given the historical context for every photograph I have shared. Each photo is accompanied by its historical description, the circumstances, the date the photo was taken, the photographer’s name, and the copyright holder. Also, each photo is posted in its best available resolution. I put a lot of effort into writing a factual, correct, and informative article. <br />
            If you have any questions, comments, or if there’s any factual mistake in the articles, please send us your suggestions. If you find any grammatical/typo errors, you’re welcome to point them out. You can <Link className='text-cyan-500'><strong>contact me</strong></Link> here.
            </p>
        </div>
    );
};

export default Contact;