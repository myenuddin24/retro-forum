const loadData = async () => {
  const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts');
  const data = await res.json();
  const posts = data.posts;
  displayData(posts);
}


const displayData = (posts) => {
  posts.forEach(post => {
    console.log(post);
    const discussionCard = document.getElementById('discussion-card');
    const cardDiv = document.createElement('div');
    cardDiv.innerHTML = `
         <div class="card card-side bg-[#797DFC1a] lg:p-8 p-4 gap-6 mb-6 items-start">
              <div class="relative">
                <p id="active-status" class="w-4 h-4 rounded-full absolute -top-2 -right-2"></p>
               <figure>
                <img class="lg:w-16 lg:h-16 w-12 h-12 rounded-lg" src="${post.image}" alt="" />
               </figure>
              </div>
              <div class="lg:space-y-3 space-y-1 w-full">
                <div class="inter text-xs flex gap-5">
                  <p>#${post?.category}</p>
                  <p>Author : ${post?.author?.name}</p>
                </div>
                <h2 class="lg:text-lg text-base font-bold text-[#12132D]">
                  ${post?.title}
                </h2>
                <p class="inter lg:text-sm text-xs text-[#12132D99]">
                  ${post?.description}
                </p>
                <hr class="border-dashed text-[#12132D40]">
                <div class="flex items-center justify-between">
                  <div class="flex items-center lg:gap-5 gap-2">
                    <div class="flex items-center lg:gap-2">
                      <img class="lg:w-5 lg:h-5 w-4 h-4" src="images/Group 13.png" alt="">
                      <p class="inter text-xs text-[#12132D99]">${post?.comment_count}</p>
                    </div>
                    <div class="flex items-center lg:gap-2">
                      <img class="lg:w-5 lg:h-5 w-4 h-4" src="images/Group 16.png" alt="">
                      <p class="inter text-xs text-[#12132D99]">${post?.view_count}</p>
                    </div>
                    <div class="flex items-center lg:gap-2">
                      <img class="lg:w-5 lg:h-5 w-4 h-4" src="images/Group 18.png" alt="">
                      <p class="inter text-xs text-[#12132D99]">${post?.posted_time} min</p>
                    </div>
                  </div>
                  <div class="card-actions justify-end">
                    <button class="btn btn-circle w-6 h-6">
                      <img class="w-6 h-6" src="images/Group 40106.png" alt="">
                    </button>
                  </div>
                </div>
              </div>
            </div>
        `
    discussionCard.appendChild(cardDiv);

    const activeStatus = cardDiv.querySelector('#active-status');
    if (post.isActive) {
      activeStatus.classList.add('bg-[#10B981]')
    } else {
      activeStatus.classList.add('bg-[#FF3434]')
    }
  });
}

loadData();