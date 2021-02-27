var datas = []; // Veriler api'den gelecek
var counterId = 1; // datas içi boş olduğu için 1 değeri verdim. Api den veri geldiğinde maksimum id + 1 değerini alması gerekecek.

  function createTableRow(data) {
    return `<tr id='${data.id}' class='right-click'>
              <th>${data.id}</th>
              <td>${data.user}</td>
              <td><a href="${data.link}">${data.link}</a></td>
              <td>${data.description}</td>
              <td class='text-center'>${data.status == true ? "✓" : "x"}</td>
            </tr>`;
  }

  function addTableRow(data){
    $("#table tbody").append(createTableRow(data));
    counterId++;
  }

  function createTable() {
    $tbody = $("#table tbody");
    $tbody.html("");
    let html = datas.map(function (data) {
      return createTableRow(data);
    });
    $tbody.append(html);
  }


  // Dinamik olacak.
  function createContextMenu(){
    return `<li><a class="dropdown-item">Okundu</a></li>
            <li><a class="dropdown-item">Düzenle</a></li>
            <li><a class="dropdown-item">Sil</a></li>`;
  }


  //  Events ------------------------------------------------------------------------------------------------------

  $(document).ready(function () { // Sayfa hazır olduğunda çalışır.
    createTable(datas);
  });

  $("#form").submit(function (event) { // Form içerisinde submit butona basıldığında tetiklenir.
    // Formun gönderilmesini önler. Devamında kodlara müdahale edebiliriz.
    // Gönderilmesini önlemediğimizde get veya post işlemiyle form gönderilir ve sayfa yenilir.
    // Sayfa yenilenirse DOM tekrardan yüklenir ve sayfadaki tüm bilgiler sıfırlanır.
    event.preventDefault();

    let user = $("#form select[name='user']").val();
    let link = $("#form input[name='link']").val();
    let description = $("#form textarea[name='description']").val();

    let data = {
      id: counterId,
      user: user,
      link: link,
      description: description,
      status: false,
    };

    addTableRow(data);
  });

  $(document) // <tr> ler js ile dinamik eklendiği için DOM a sonradan ekleniyor. Bu nedenle document içerisinde tr.right-click leri on click metot ile yakalayabiliyoruz.
          .on("click", "tr.right-click", function (e) {
            var top = e.pageY + 10; // Mouse kordinatları
            var left = e.pageX - 70; // Mouse kordinatları

            let $contextMenu = $("#context-menu");
            $contextMenu
              .css({ display: "block", top: top, left: left })
              .addClass("show");
            $contextMenu.html(createContextMenu());

            return false;
          })
          .on("click", function () { // Popup aktif ise sayfa üzerinde tıklama gerçekleşirse tetiklenir.
            let $contextMenu = $("#context-menu");
            $contextMenu.removeClass("show").hide();
            $contextMenu.empty();
          });