import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { db, storage } from "./firebase";
import firebase from "firebase";
import "./imageupload.css";

function ImageUpload({ username }) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("post").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              imageUrl: url,
              caption: caption,
              username: username,
            });
            setCaption("");
            setProgress(0);
            setImage(null);
          });
      }
    );
  };
  return (
    <div className="imageupload">
      <progress className="image_upload_progress" value={progress} max="100" />
      <input
        type="text"
        value={caption}
        className="caption_text"
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Write your caption"
      />
      <input type="file" className="upload_image" onChange={handleChange} />
      <Button onClick={handleUpload}> Upload</Button>
    </div>
  );
}

export default ImageUpload;
