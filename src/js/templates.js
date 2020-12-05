const addForm = `

<form class="form-row mt-3 ml-2">

  <div class="col-md-2 mb-3">
    <label class="" for="studentName">Имя:</label>
    <input type="text" class="form-control mb-2 mr-sm-2 input-form" id="studentName" data-name="name" placeholder="Имя">
    <div class="invalid-feedback">
      Введите корректное имя.
    </div>
  </div>

  <div class="col-md-2 mb-3">
    <label class="" for="studentMiddlename">Отчество:</label>
    <input type="text" class="form-control Middlename input-form" id="studentMiddlename" data-name="middlename" placeholder="Отчество">
    <div class="invalid-feedback">
      Введите корректное отчество.
    </div>
  </div>


  <div class="col-md-2 mb-3">
    <label class="" for="studentSurname">Фамилия:</label>
    <input type="text" class="form-control name input-form" id="studentSurname" data-name="surname" placeholder="Фамилия">
    <div class="invalid-feedback">
      Введите корректную фамилию.
    </div>
  </div>

  <div class="col-md-2 mb-3">
    <label for="inputDate">Дата рождения:</label>
    <input type="date" class="form-control dateBirth input-form" data-name="datebirth">
    <div class="invalid-feedback">
      Введите корректную дату.
    </div>
  </div>

  <div class="col-md-2 mb-3">
    <label for="inputDate">Начало обучения:</label>
      <input type="date" class="form-control eduStart input-form" data-name="startedu">
      <div class="invalid-feedback">
        Введите корректную дату.
    </div>
  </div>

  <div class="col-md-2 mb-3">
    <label for="inputDate">Факультет:</label>
    <input type="text" class="form-control faculty input-form" data-name="faculty">
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
              <th scope="col" class="filter__name title header" data-name="surname">Full Name</th>
              <th scope="col" class="filter__faculty title header" data-name="faculty">Faculty</th>
              <th scope="col" class="filter__age header" data-name="datebirth">Birthday / Age</th>
              <th scope="col" class="filter__dateEDU title header" data-name="startedu">Date of studying / Course</th>
            </tr>
            <tr>
              <td><button type="submit" class="btn btn-danger">Сброс фильтров</button></td>
              <td><input type="text" class="search__text search" placeholder="Фамиилия" data-name="surname"></td>
              <td><input type="text" class="search__text search" placeholder="Факультет" data-name="faculty"></td>
              <td><input type="text" class="search__date search" placeholder="Год рождения" data-name="datebirth"></td>
              <td><input type="text" class="search__date search" placeholder="Год поступления" data-name="startedu"></td>
            </tr>
          </thead>
          <tbody>
           ${rows}
          </tbody>
        </table>`
}

export { addForm, table };


