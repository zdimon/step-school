var db_debtors = [];
var num = 0;

function add_new_record(){
  // Находим нужную таблицу
  var tbody = document.getElementById('table').getElementsByTagName('TBODY')[0];

  // Создаем строку таблицы и добавляем ее
  var row = document.createElement("TR");
  tbody.appendChild(row);

  // Создаем ячейки в вышесозданной строке
  // и добавляем тх
  var td1 = document.createElement("TD");
  var td2 = document.createElement("TD");
  var td3 = document.createElement("TD");
  var td4 = document.createElement("TD");
  var td5 = document.createElement("TD");

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);

  console.log(db_debtors[db_debtors.length-1].id);
  // Наполняем ячейки
  td1.innerHTML = db_debtors[db_debtors.length-1].id;
  td2.innerHTML = db_debtors[db_debtors.length-1].name;
  td3.innerHTML = db_debtors[db_debtors.length-1].phone;
  td4.innerHTML = db_debtors[db_debtors.length-1].sum;
  td5.innerHTML = db_debtors[db_debtors.length-1].isPaid;
}

let table = document.getElementById('table');

let selectedTd;
var indexRow;


// функция определяет событие нажатия элемента в таблице
table.onclick = function(event) {
  let target = event.target;

  while (target != this) {
    if (target.tagName == 'TR') {
      highlight(target);
      indexRow = $("tr").index();
      return;
    }
    target = target.parentNode;
  }
  
}

// выделение строки цветом
function highlight(node) {
  if (selectedTd) {
    selectedTd.classList.remove('highlight');
  }
  selectedTd = node;
  selectedTd.classList.add('highlight');
}

// удаление строки по нажатию кнопки (по полученому индексу строки, которая была выделена)
$('#delete').on('click', function() {
  $("tr").eq(indexRow + 2).remove();
  db_debtors.splice(indexRow+2, 1);
});

// по нажатию кнопки Add new record добавляется запись в таблицу
    $('#save').on('click', function(e) {
      e.preventDefault()

      var record = {
        id: Number,
        name: String,
        phone: String,
        sum: Number,
        isPaid: Boolean
      };


      num += 1;
    record.id = num;
    record.name = document.getElementById('name').value;
    record.phone = document.getElementById('phone').value;
    record.sum = document.getElementById('sum').value;
    var paid = document.getElementById('paid').value;

    if(paid === "Yes" || paid === "yes" || paid === "YES" || paid === "+")
      record.isPaid = true;
    else
      record.isPaid = false;

      db_debtors.push(record);
      console.log(db_debtors);
              
      add_new_record();
      $('form input[type="text"], form input[type="number"]').val('');
    });


    // по нажатию на кнопку Edit изменяем значения выделенной строки
    $('#edit').on('click', function(e) {
      e.preventDefault();
      console.log(db_debtors[indexRow]);

      let new_name = document.getElementById('name').value;
      if(new_name){
        db_debtors[indexRow].name = new_name;
        $(`#table tr:nth-child(${indexRow + 2}) td:nth-child(2)`).html(new_name);
      }

      let new_phone = document.getElementById('phone').value;
      if(new_phone){
        db_debtors[indexRow].phone = new_phone;
        $(`#table tr:nth-child(${indexRow + 2}) td:nth-child(3)`).html(new_phone);
      }

      let new_sum = document.getElementById('sum').value;
      if(new_sum){
        db_debtors[indexRow].sum = new_sum;
        $(`#table tr:nth-child(${indexRow + 2}) td:nth-child(4)`).html(new_sum);
      }

      let new_paid = document.getElementById('paid').value;
      if(new_paid){
        if(new_paid === "Yes" || new_paid === "yes" || new_paid === "YES" || new_paid === "+")
          db_debtors[indexRow].isPaid = true;
        else
          db_debtors[indexRow].isPaid = false;
        
        $(`#table tr:nth-child(${indexRow + 2}) td:nth-child(5)`).html(db_debtors[indexRow].isPaid);
      }

      $('form input[type="text"], form input[type="number"]').val('');
      console.log(db_debtors[indexRow]);
    });
