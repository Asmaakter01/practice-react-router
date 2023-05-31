import React from 'react';
import Book from '../Book/Book';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
           <div className='flex gap-5 m-14'>
          <div className=''>
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
          </div>
          <div className='bg-sky-100 rounded-lg p-7'>
            <h1 className='text-bold text-4xl'>Shop as if the world is coming to an end!!</h1>
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, sapiente molestiae officiis animi amet architecto eum obcaecati alias repellendus, quos impedit beatae eos harum ex tempora ab natus nihil fugit.</p>
            <button className="btn">More Info</button>
          </div>
           </div>
        </div>
    );
};

export default Home;