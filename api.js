var url = "https://private-anon-895740d2ec-technicaltaskapi.apiary-mock.com/feed?page=1&sport=football";

fetch(url)
  .then( res => {
      res.json()
  .then( data => {
      console.log(data);
        if (data.length > 0) {
            var temp = "";

            data.forEach((u) => {
                
                temp += ` 
                         <button class="accordion">${u.athlete.name}</button>
                         <div class="templatePlayers">
                            <video class="video-position" width="320" height="240" controls poster="${u.video.poster}">
                            <source src="${u.video.url}" type="video/mp4">
                            Your browser does not support the video tag.
                            </video>
                            <p class="text-position"><b class="bold-info">Author:</b> ${u.author.name}</p>
                            <p class="text-position"><b  class="bold-info">Created:</b> ${u.createdAt}</p>
                            <p class="text-position"><b class="bold-info">Athlete profile </b><br />
                               Name: <i>${u.athlete.name}</i><br />
                               Age: <i>${u.athlete.age}</i><br />
                               Club: <i>${u.athlete.club}</i><br />
                               ...
                            <p class="text bold-info text-position">
                              ${u.description}
                            </p>
                            <p class="text-position"><b>Views:</b> ${u.views}</p>
                         </div>`;

            })
            document.getElementById("data").innerHTML = temp;


            
            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var templatePlayers = this.nextElementSibling;
                if (templatePlayers.style.display === "block") {
                    templatePlayers.style.display = "none";
                } else {
                    templatePlayers.style.display = "block";
                }
            });
            }
        }
       
        
  })
  })