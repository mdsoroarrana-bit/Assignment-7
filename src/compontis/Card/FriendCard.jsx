import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({book}) => {
    return (
        <div>
            <div className="text-center items-center w-50 h-65  border border-gray-200  mx-auto rounded-xl shadow-xl space-y-2 ">
                <img src={book.picture} alt="img" className="w-15 mx-auto pt-4" />
                <h4 className="text-xl font-bold">{book.name} </h4>
                <p>62d ago</p>
                <p className="border w-20 mx-auto">{book.status}</p>
                <div className="text-center ">
                                 {book.tags.map((tag,ind) => (
                                 <div key={ind} className="badge badge-outline badge-success">{tag}</div>
                                    ))}
                              </div>
                
            </div>

            <div>
            {/* <Link to={`/FriendDetails/${book.bookId}`} className="card bg-base-100 w-96 shadow-sm">
                        
                        <div className="card-body">
                              <div className="flex text-center gap-2">
                                 {book.tags.map((tag,ind) => (
                                 <div key={ind} className="badge badge-outline badge-success">{tag}</div>
                                    ))}
                              </div>
                            <h2 className="font-bold text-2xl">{book.name}</h2>

                            <p className="font-semibold text-lg">{book.author}</p>
                            <div className="card-actions justify-between border-t border-dashed border-gray-300 p-4 text-xl">
                            <div className="font-semibold">{book.category}</div>
                            <div className="flex items-center gap-1">{book.rating} <FaRegStar /></div>
                            </div>
                        </div>
            </Link> */}
            </div>
        </div>
    );
};

export default FriendCard;