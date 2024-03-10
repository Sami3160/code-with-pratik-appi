const sem = document.getElementById('sem');

console.log(sem);


function onSemClick(context) {
    const semList = document.querySelectorAll('.semList')


    for (const ele of semList[0].children) {
        ele.classList.remove('active')
        console.log(ele)
    }
    context.classList.add('active')


    // console.log(context);
    // context.addClassName('active');
}