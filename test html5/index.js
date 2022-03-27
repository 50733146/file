const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const upbtn = document.getElementById('upbtn')
const delbtn = document.getElementById('delbtn')
const list = document.getElementById('list')

const listContent = []
 
function render() {

  let htmlStr = ''

  listContent.forEach(function (item) {
    htmlStr = htmlStr + `
    <div class="item">
      <div>
        <p>${item.webtitle}</p>
        <p>${item.title}</p>
        <p>${item.content}</p>
      </div>
    </div>
    `;
    webtitle.value="";
    title.value="";
    content.value="";
  })
  list.innerHTML = htmlStr
}
upbtn.addEventListener('click', function () {
  listContent.unshift({
    webtitle: webtitle.value,
    title: title.value,
    content: content.value
  })
  render()
})
delbtn.addEventListener('click', function () {
  listContent.shift()
  render()
})