import React, { useState } from "react";
// import { Link } from "@reach/router";
import { storage } from "../firebase";
import "./Homepage.css";

const Homepage = () => {
    const [imageLink, setImageLink] = useState("");

    const getImageURL = () => {
        var storageRef = storage.ref();
        var imageRef = storageRef.child('images/annapurna-massif-himalayas-nepal-4k-wallpaper.jpg');
        console.log("imageRef: " + imageRef);

        var imageURL = imageRef.getDownloadURL();
        setImageLink(imageURL);
    }

    return(
        <div className="Homepage">
            <p className="title">Wallpaper Repository</p>
            <p>Categories:</p>
            <img className="imageSize1"
            src="https://firebasestorage.googleapis.com/v0/b/test-project-1-283222.appspot.com/o/annapurna-massif-himalayas-nepal-4k-wallpaper.jpg?alt=media&token=b63a4d04-8bcb-4484-8f5a-4787ad17f32c" alt="image1"></img>
            {/* <Link>Art</Link>
            <Link>Cars</Link>
            <Link>Nature</Link>
            <Link>Sea</Link> */}
        </div>
    );
};

export default Homepage
