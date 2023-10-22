const data = {
   currentUser: {
      image: {
         png: "./images/avatars/image-juliusomo.png",
         webp: "./images/avatars/image-juliusomo.webp",
      },
      username: "juliusomo",
   },
   comments: [
      {
         parent: 0,
         id: 1,
         content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
         createdAt: "1 month ago",
         score: 12,
         user: {
            image: {
               png: "./images/avatars/image-amyrobson.png",
               webp: "./images/avatars/image-amyrobson.webp",
            },
            username: "amyrobson",
         },
         replies: [],
      },
      {
         parent: 0,
         id: 2,
         content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
         createdAt: "2 weeks ago",
         score: 5,
         user: {
            image: {
               png: "./images/avatars/image-maxblagun.png",
               webp: "./images/avatars/image-maxblagun.webp",
            },
            username: "maxblagun",
         },
         replies: [
            {
               parent: 2,
               id: 1,
               content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
               createdAt: "1 week ago",
               score: 4,
               replyingTo: "maxblagun",
               user: {
                  image: {
                     png: "./images/avatars/image-ramsesmiron.png",
                     webp: "./images/avatars/image-ramsesmiron.webp",
                  },
                  username: "ramsesmiron",
               },
            },
            {
               parent: 2,
               id: 1,
               content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
               createdAt: "2 days ago",
               score: 2,
               replyingTo: "ramsesmiron",
               user: {
                  image: {
                     png: "./images/avatars/image-juliusomo.png",
                     webp: "./images/avatars/image-juliusomo.webp",
                  },
                  username: "juliusomo",
               },
            },
         ],
      },
   ],
}

function appendFrag(frag, parent) {
   var children = [].slice.call(frag.childNodes, 0)
   parent.appendChild(frag)
   return children[1]
}

const addComment = (body, parentId, replyTo = undefined) => {
   let commentParent = parentId === 0 ? data.comments : data.comments.filter((c) => c.id == parentId)[0].replies
   let newComment = {
      parent: parentId,
      id: commentParent.length == 0 ? 1 : commentParent[commentParent.length - 1].id + 1,
      content: body,
      createdAt: "Now",
      replyingTo: replyTo,
      score: 0,
      replies: parent == 0 ? [] : undefined,
      user: data.currentUser,
   }
   commentParent.push(newComment)
}

const deleteComment = (commentObject) => {
   if (commentObject.parent == 0) {
      data.comments = data.comments.filter((e) => e != commentObject)
   } else {
      data.comments.filter((e) => e.id === commentObject.parent)[0].replies = 
         data.comments.filter((e) => e.id === commentObject.parent)[0].replies.filter((e) => e != commentObject)
   }
}