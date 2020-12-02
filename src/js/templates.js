const addForm = `<form class="form-inline mt-10">
                  <label class="sr-only" for="studentName">Name</label>
                  <input type="text" class="form-control mb-2 mr-sm-2" id="studentName" placeholder="Name">
                  <label class="sr-only" for="studentSurname">Username</label>
                  <div class="input-group mb-2 mr-sm-2">
                    <input type="text" class="form-control name" id="studentSurname" placeholder="Surname">
                  </div>
                  <label class="sr-only" for="studentMiddlename">Username</label>
                  <div class="input-group mb-2 mr-sm-2">
                    <input type="text" class="form-control Middlename" id="studentMiddlename" placeholder="Middlename">
                  </div>
                  <label for="inputDate">Date Birth:</label>
                  <div class="input-group mb-2 mr-sm-2 ml-sm-2">
                    <input type="date" class="form-control dateBirth">
                  </div>
                  <label for="inputDate">Edu started:</label>
                  <div class="input-group mb-2 mr-sm-2 ml-sm-2">
                    <input type="date" class="form-control eduStart">
                  </div>
                  <label for="inputDate">Faculty:</label>
                  <div class="input-group mb-2 mr-sm-2 ml-sm-2">
                    <input type="text" class="form-control faculty">
                  </div>
                  <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </form>`

const table = (rows) => {
 return `<table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th class="filter__name">Full Name</th>
              <th class="filter__faculty">Faculty</th>
              <th class="filter__age">Birthday / Age</th>
              <th class="filter__dateEDU">Date of studying / Course</th>
            </tr>
          </thead>
          <tbody>
           ${rows}
          </tbody>
        </table>`
}


{/* <tr>
<td>Mark</td>
<td>Otto</td>
</tr>
<tr>
<td>Jacob</td>
<td>Thornton</td>
</tr> */}

export { addForm, table};
