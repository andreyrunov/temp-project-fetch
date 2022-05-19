const body = document.querySelector('.upper_wrapper');
// ловим форму. в document.forms лежат все формы страницы и обращаемся к нужному нам нейму формы
const addForm = document.forms.addForm;


body.addEventListener('click', async (event) => {
  event.preventDefault();
  if(event.target.id === 'add') {
    // собираем значение всех инпутов из формы в виде объекта
    const formData = Object.fromEntries(new FormData(addForm))
    // добавляем проверку заполнения поля прайс
    if (typeof Number(formData.price) !== 'number') {
      return alert('Cena cifra pls')
    }
    // фетч запрос собирает все значения инпутов и отправляет их на бэк (в req.body бэк это все принимает) и возвращает ответ, который отправляет нам бэк (мы прописываем это в ручке)
    const response = await fetch('/fetch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    // проверка ответа. если ОК, то 
    if(response.ok) {
      // response.json() - превращает из json в читаемый объект. данные из item ниже будут вставляться в innerHTML
      const item = await response.json();
      // находим наш див, куда необходимо вставить HTML
      const wrapper = document.querySelector('.wrapper');
      // вставляем HTML. += нужно, чтобы вставляемый объект не перезаписывался, а добавлялся новый + всякие {{this.nameItems}} меняем на ${item.nameItems} (если этот код копировался из hbs)
      wrapper.innerHTML += `
      <div class="card" style="width: 250px">
      <div class="card-body">
        <h5 class="card-title">${item.nameItems}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Цена${item.price}</h6>
        <p class="card-text">${item.description}
        </p>
        <form action="/delete/${item.id}" method="post">
          <button type="submit" name="delete" class="btn btn-link">Удалить пост</button>
        </form>
      </div>
    </div>
      `
    }
  }
})
