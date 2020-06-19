let bookmarkButtons = document.querySelectorAll('.perforator-item button');
let bookmarkInfo = document.querySelector('.bookmarks span');
let bookmarksCount = bookmarkInfo.innerHTML;

for(bookmarkButton of bookmarkButtons){
    bookmarkButton.addEventListener(
        'click',
        function(e){
            bookmarksCount++;
            bookmarkInfo.innerHTML = bookmarksCount;
            if(bookmarksCount > 0){
                bookmarkInfo.parentElement.classList.add('goods-inside');
            }
        }
    )
}