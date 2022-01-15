class ImageUpload {
  async upload(file) {
    const url = "https://api.cloudinary.com/v1_1/dkwvzwyz5/upload";

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "rrauav3z");
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.json();
  }
}

export default ImageUpload;
