import { GoArchive } from "react-icons/go";
import { MdDelete, MdNotificationsPaused } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";

const FriendDetails = () => {
    const {id} = useParams();
    // console.log(Id,"id")

    // const books = use(booksPromise);
    const books = useLoaderData();
        // console.log(books, "books");
        const expected = books.find(book=>book.bookId == id);
        // console.log(expected);
        const { name, picture, tags,email} = expected;
        // console.log(expected),
        return ( 
            <div>
                <div>
                    <div>
                    <img src={picture} alt="img" />
                    <h3>{name}</h3>
                    <p className="flex text-center gap-2">
                              {tags.map((tag,ind) => (
                                 <div key={ind} className="badge badge-outline badge-success">{tag}</div>
                                    ))}
                    </p>
                    <p>{email}</p>
                    </div>

                    <div>
                        <div>
                            <p><MdNotificationsPaused /> Snooze 2 weeks</p>
                        </div>
                        <div>
                            <p><GoArchive /> Archive</p>
                        </div>
                        <div>
                            <p><MdDelete /> Delete</p>
                        </div>
                    </div>
                </div>
            </div>


    // <div className=" grid grid-cols-1 md:grid-cols-2 shadow-sm container mx-auto pr-8 my-10 bg-gray-100">
    //         <figure className="w-full flex items-center justify-center bg-gray-200 rounded-2xl">
    //            <img className="h-100" src={picture} alt="" />  
    //         </figure>
    //         <div className="card-body space-y-2">
    //             <h2 className="card-title text-2xl">{name}</h2>
    //             <h2 className="card-title"> </h2>
    //             <p className="py-2 border-y">{category}</p>
    //             <p>Review :  </p>
    //             <div className="flex text-center gap-2">
    //                              {tags.map((tag,ind) => (
    //                              <div key={ind} className="badge badge-outline badge-success">{tag}</div>
    //                                 ))}
    //                           </div>
    //             <div className="border-t space-y-2">
    //                 <div className="flex items-center justify-between gap-2">
    //                     <span>Number of pages : </span> <span></span>
    //                 </div>
    //                 <div className="flex items-center justify-between gap-2">
    //                     <span>Publisher : </span> <span></span>
    //                 </div>
    //                 <div className="flex items-center justify-between gap-2">
    //                     <span>Publish Time : </span> <span></span>
    //                 </div>
    //             <div className="flex items-center gap-2">
    //                 <button 
    //                 className="btn">Mark as Read</button>
    //                 <button className="btn btn-primary">Add to Wishlist</button>
    //             </div>
    //             </div>
    //         </div>
    //      </div>
    );
};

export default FriendDetails;



