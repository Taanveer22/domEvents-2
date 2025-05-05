// step 01 : add eventListener to the post button
document.getElementById('btn-post').addEventListener('click', function(){
    console.log('post btn clicked');

    // step 02 : get the comment inside the text area
    const commentBox = document.getElementById('new-comment');
    const newComment = commentBox.value;
    console.log(newComment);

    // step 03: set the comment inside the comment 
    // substep : get the comment container
    // substep : create new element for comment (p tag)
    // substep : set the text of the comment as innerText of the element (p tag)
    // substep : clear the comment box
    const commentContainer = document.getElementById('comment-container');
    const para = document.createElement('p');
    para.innerText = newComment;
    commentContainer.appendChild(para);
    console.log(commentContainer);


    // step 04 : clear the comment box
    commentBox.value = '';


})