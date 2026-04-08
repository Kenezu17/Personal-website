
export default function getimageUrl(person, size = 's') {
    return(
      'https://scontent.fmnl37-1.fna.fbcdn.net/' +
       person.imageId + size + 
       ".jpg"
    );
}