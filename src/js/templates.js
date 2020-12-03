const addForm = `

<form class="form-row mt-3 ml-2">

  <div class="col-md-2 mb-3">
    <label class="" for="studentName">Имя:</label>
    <input type="text" class="form-control mb-2 mr-sm-2" id="studentName" placeholder="Имя">
    <div class="invalid-feedback">
      Введите корректное имя.
    </div>
  </div>

  <div class="col-md-2 mb-3">
    <label class="" for="studentMiddlename">Отчество:</label>
    <input type="text" class="form-control Middlename" id="studentMiddlename" placeholder="Отчество">
    <div class="invalid-feedback">
      Введите корректное отчество.
    </div>
  </div>


  <div class="col-md-2 mb-3">
    <label class="" for="studentSurname">Фамилия:</label>
    <input type="text" class="form-control name" id="studentSurname" placeholder="Фамилия">
    <div class="invalid-feedback">
      Введите корректную фамилию.
    </div>
  </div>

  <div class="col-md-2 mb-3">
    <label for="inputDate">Дата рождения:</label>
    <input type="date" class="form-control dateBirth">
    <div class="invalid-feedback">
      Введите корректную дату.
    </div>
  </div>

  <div class="col-md-2 mb-3">
    <label for="inputDate">Начало обучения:</label>
      <input type="date" class="form-control eduStart">
      <div class="invalid-feedback">
        Введите корректную дату.
    </div>
  </div>

  <div class="col-md-2 mb-3">
    <label for="inputDate">Факультет:</label>
    <input type="text" class="form-control faculty">
    <div class="invalid-feedback">
      Введите корректное название.
    </div>
  </div>
  <form class="form-row">
  <div class="col-md-3 mb-3">
  <button type="submit" class="btn btn-primary mb-2">Add student</button>
  </div>
  </form>

`


const table = (rows) => {
 return `<table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col" class="filter__name">Full Name</th>
              <th scope="col" class="filter__faculty">Faculty</th>
              <th scope="col" class="filter__age">Birthday / Age</th>
              <th scope="col" class="filter__dateEDU">Date of studying / Course</th>
            </tr>
          </thead>
          <tbody>
           ${rows}
          </tbody>
        </table>`
}

export { addForm, table };


