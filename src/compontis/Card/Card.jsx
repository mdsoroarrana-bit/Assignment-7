import React, { use } from 'react';
import FriendCard from './FriendCard';

const booksPromise = fetch('/friend-data.json').then(res=> res.json());

    
const Card = () => {
    const books = use(booksPromise);
    console.log(books, "books");
    return (
        <div>
            <h2 className="text-center text-2xl font-bold m-4 pt-6 ">Your Friends</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container ">
              {
                books.map((book, ind)=>{
                    return (
                        <FriendCard key={ind} book={book}/>
                    );
                })
            }
          </div>
        </div>
    );
};

export default Card;