export function getImageUrl(rawUrl){
  let imageUrl = rawUrl || "http://lorempixel.com/600/337/nature/";
  if (!imageUrl.startsWith("http")){
    imageUrl = "https://googledrive.com/host/0B7-AXiygNCV8ZGl1cENYVEtPWk0/" + imageUrl;
  }
  return imageUrl;
}