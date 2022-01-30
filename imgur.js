let arr = [
  "BYO banana for scale.",
  "Is it GIF or GIF? Either way, we’ve got the best of them.",
  "Soak your logs in wood.",
  "Laugh, cry, learn. There’s never a dull moment.",
  "When life gives you lemons, make memes.",
  "The memes of tomorrow, today.",
  "You, as an Imgurian, are a beautiful creature and deserve happiness.",
  "Edward Macaroni Fork.",
  "You're breathtaking!",
];

document.getElementById("line1").innerHTML =
  arr[Math.floor(Math.random() * arr.length)];

let filters = document.getElementById("filters");

async function Filters() {
  try {
    let res = await fetch(
      `https://api.imgur.com/3/gallery/hot/viral/1/month?showViral=true&mature=true&album_previews=true`,
      {
        method: "GET",
        headers: {
          Authorization: "Client-ID 2bc3f5769892754",
        },
      }
    );
    let data = await res.json();
    console.log("data:", data.data);
    list(data.data);
  } catch (err) {}
}
Filters();
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");

function list(tags) {
  tags.forEach((p, i) => {
    if (
      p?.images?.[0].link &&
      (p?.images?.[0].type == "image/jpeg" ||
        p?.images?.[0].type == "image/gif")
    ) {
      let maindiv = document.createElement("div");
      maindiv.setAttribute("class", "maindiv");

      let imgdiv = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("class", "allimg");
      img.src = p?.images?.[0].link;

      let text = document.createElement("div");
      text.setAttribute("class", "imgtext");

      let title = document.createElement("p");
      title.innerHTML = p?.title;
      title.style.height = "20px";
      title.style.marginBottom = "3px"
      title.style.overflow = "hidden";

      let titleline2 = document.createElement("div");
      titleline2.setAttribute("class" , "vote");

      let secondline = document.createElement("div");
      secondline.style.display = "flex";
      // secondline.style.textAlign = "center";

      let voteup = document.createElement("svg");
      voteup.innerHTML ='<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Upvote</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z"></path></svg>'
      
      let votes = document.createElement("div"); 
      votes.textContent = p.score;
      votes.style.margin = "0px 3px"

      let votedown = document.createElement("svg");
      votedown.innerHTML ='<svg width="16" height="16" viewBox="0 0 16 16" class="Vote Vote-down" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Downvote</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M8.803 13.476a1.2 1.2 0 01-1.606 0 53.03 53.03 0 01-2.364-2.243 29.613 29.613 0 01-2.422-2.722c-.339-.435-.025-1.028.526-1.028h2.397V3.336c0-.524.306-.982.823-1.064A11.874 11.874 0 018 2.15c.829 0 1.427.056 1.843.122.517.082.824.54.824 1.064v4.147h2.396c.552 0 .865.593.527 1.028-.52.669-1.32 1.62-2.423 2.722a53.038 53.038 0 01-2.364 2.243z"></path></svg>';
      votedown.setAttribute( "class" , "votedown")
      
      let cmtdiv = document.createElement("div");
      cmtdiv.style.display = "flex";

      let cmt = document.createElement("svg");
      cmt.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" class="PostCommentsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Comments</title><path fill="currentColor" stroke="#ffffff" stroke-width="0" d="M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z"></path></svg>'
     
      let cmtscore = document.createElement("div"); 
      cmtscore.textContent = p.comment_count; 
      cmtscore.style.margin = "0px 3px";


      let viewBox = document.createElement("div");
      viewBox.style.display = "flex";

      let viewicon = document.createElement("svg");
      viewicon.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" class="PostViewsIcon" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Post views</title><path d="M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z" fill="currentColor"></path></svg>';

      let views = document.createElement('div');
      views.textContent = p.views;
      views.style.marginLeft = "3px";

      

      imgdiv.append(img);
      secondline.append(voteup,votes,votedown);

      cmtdiv.append(cmt,cmtscore)
 
      viewBox.append(viewicon,views)
      titleline2.append(secondline,cmtdiv, viewBox);

      text.append(title,titleline2);
      maindiv.append(imgdiv, text);

      if (i % 4 === 0) {
        div1.append(maindiv);
      } else if (i % 4 === 1) {
        div2.append(maindiv);
      } else if (i % 4 === 2) {
        div3.append(maindiv);
      } else if (i % 4 === 3) {
        div4.append(maindiv);
      }
    }
  });

}
    
 let scrollTop = document.getElementById('scroll');

  function scrollup(){
    window.scrollTo(0, 0)
  }
   
   
  let timerId;
  function debounce(func, delay) {

    if (timerId) {
      clearInterval(timerId);
    }
    timerId = setTimeout(function () {
      func();
    }, delay);
  }



  async function main() {
    let text = document.getElementById("inputtext").value;
    let headersList = {
      Authorization: "Client-ID fe6cbe383cc4efa",
    };
    let res = await fetch(
      `https://api.imgur.com/3/gallery/t/${text}/top/all`,
      {
        method: "GET",
        headers: headersList,
      }
    );
    let { data } = await res.json();
  
    if(text){
      searchitem.style.display = "block"
    }
    else{
     searchitem.style.display = "none"
    }
    appendSearch(data.items); 
  }


  let searchitem = document.getElementById("searchitem");
  function appendSearch(data) {
    searchitem.innerHTML = null;
    data?.forEach((data) => {
      let p = document.createElement("p");
      p.textContent = data.title;
      searchitem.append(p);
    });
  }

